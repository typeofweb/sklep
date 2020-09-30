import Boom from '@hapi/boom';
import type Hapi from '@hapi/hapi';
import type { InputJsonObject } from '@prisma/client';
import type { SklepTypes } from '@sklep/types';
import ms from 'ms';
import Stripe from 'stripe';

import { isProd, getConfig } from '../../config';
import { Enums } from '../../models';

const stripe = new Stripe(getConfig('STRIPE_API_KEY'), {
  apiVersion: '2020-08-27',
  typescript: true,
});

import {
  calculateCartTotals,
  addToCart,
  cartModelToResponse,
  clearCart,
  ensureCartExists,
  findAllCarts,
  findCart,
  findOrCreateCart,
  removeFromCart,
} from './cartFunctions';
import {
  addToCartPayloadSchema,
  createCartResponseSchema,
  getAllCartsResponseSchema,
  removeFromCartPayloadSchema,
} from './cartSchemas';

declare module '@hapi/hapi' {
  interface PluginProperties {
    readonly cart: {
      readonly findOrCreateCart: typeof findOrCreateCart;
      readonly addToCart: typeof addToCart;
      readonly removeFromCart: typeof removeFromCart;
      readonly clearCart: typeof clearCart;
      readonly findCart: typeof findCart;
      readonly calculateCartTotals: typeof calculateCartTotals;
    };
  }
}

export const CartPlugin: Hapi.Plugin<{ readonly cookiePassword: string }> = {
  multiple: false,
  name: 'Sklep Cart Plugin',
  version: '1.0.0',
  register(server, options) {
    server.expose('findOrCreateCart', findOrCreateCart);
    server.expose('addToCart', addToCart);
    server.expose('removeFromCart', removeFromCart);
    server.expose('clearCart', clearCart);
    server.expose('findCart', findCart);
    server.expose('calculateCartTotals', calculateCartTotals);

    /**
     * @description Delete cart when order is created
     */
    server.events.on('order:order:created', (order) => {
      const cart = order.cart;
      if (typeof cart === 'object' && cart && 'id' in cart) {
        const { id: cartId } = cart as { readonly id: string };
        server.app.db.cart
          .deleteMany({
            where: {
              id: cartId,
            },
          })
          .catch((err) => console.error(err));
      }
    });

    server.state('cart', {
      ttl: ms('3 months'),
      isSecure: isProd(),
      isHttpOnly: true,
      isSameSite: 'Lax',
      encoding: 'iron',
      password: options.cookiePassword,
      clearInvalid: true,
      strictHeader: true,
    });

    server.route({
      method: 'POST',
      path: '/',
      options: {
        tags: ['api', 'cart'],
        auth: false,
        response: {
          schema: createCartResponseSchema,
        },
      },
      async handler(request, h): Promise<SklepTypes['postCart200Response']> {
        const cart = await ensureCartExists(request, h);

        return {
          data: cartModelToResponse(cart),
        };
      },
    });

    server.route({
      method: 'PATCH',
      path: '/add',
      options: {
        tags: ['api', 'cart'],
        auth: false,
        validate: {
          payload: addToCartPayloadSchema,
        },
      },
      async handler(request, h) {
        const cart = await ensureCartExists(request, h);

        const { quantity, productId } = request.payload as SklepTypes['patchCartAddRequestBody'];

        await addToCart(request, { quantity, productId, cartId: cart.id });

        return null;
      },
    });

    server.route({
      method: 'PATCH',
      path: '/remove',
      options: {
        tags: ['api', 'cart'],
        auth: false,
        validate: {
          payload: removeFromCartPayloadSchema,
        },
      },
      async handler(request, h) {
        const cart = await ensureCartExists(request, h);

        const { productId } = request.payload as SklepTypes['patchCartRemoveRequestBody'];

        await removeFromCart(request, { productId, cartId: cart.id });

        return null;
      },
    });

    server.route({
      method: 'PATCH',
      path: '/clear',
      options: {
        tags: ['api', 'cart'],
        auth: false,
        validate: {},
      },
      async handler(request, h) {
        const cart = await ensureCartExists(request, h);

        await clearCart(request, { cartId: cart.id });

        return null;
      },
    });

    server.route({
      method: 'GET',
      path: '/all',
      options: {
        tags: ['api', 'cart'],
        auth: {
          scope: [Enums.UserRole.ADMIN],
        },
        response: {
          schema: getAllCartsResponseSchema,
        },
      },
      async handler(request) {
        const carts = await findAllCarts(request);

        return {
          data: carts.map(cartModelToResponse),
        };
      },
    });

    server.route({
      method: 'PATCH',
      path: '/pay',
      options: {
        tags: ['api', 'cart', 'order'],
      },
      async handler(request) {
        const cart = await findCart(request);
        if (!cart) {
          throw Boom.badRequest('INVALID_CART');
        }

        const totals = calculateCartTotals(cart);
        const cartTotal = totals.discountSubTotal;

        const cartJson = JSON.parse(JSON.stringify(cart)) as InputJsonObject;

        const paymentIntent = await stripe.paymentIntents.create({
          amount: cartTotal,
          currency: 'pln',
        });

        const order = await request.server.app.db.order.create({
          data: {
            cart: cartJson,
            total: cartTotal,
            stripePaymentIntentId: paymentIntent.id,
          },
        });

        return {
          data: {
            orderId: order.id,
            stripeClientSecret: paymentIntent.client_secret,
          },
        };
      },
    });
  },
};
