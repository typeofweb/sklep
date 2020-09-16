import Hapi from '@hapi/hapi';
import type { SklepTypes } from '@sklep/types';
import ms from 'ms';

import { isProd } from '../../config';
import { Awaited } from '../../types';

import { addToCart, clearCart, findOrCreateCart, removeFromCart } from './cartFunctions';
import {
  addToCartPayloadSchema,
  createCartResponseSchema,
  removeFromCartPayloadSchema,
} from './cartSchemas';

declare module '@hapi/hapi' {
  interface PluginsStates {
    cart: {
      findOrCreateCart: typeof findOrCreateCart;
      addToCart: typeof addToCart;
      removeFromCart: typeof removeFromCart;
      clearCart: typeof clearCart;
    };
  }
}

export const CartPlugin: Hapi.Plugin<{ cookiePassword: string }> = {
  multiple: false,
  name: 'Sklep Cart Plugin',
  version: '1.0.0',
  async register(server, options) {
    server.expose('findOrCreateCart', findOrCreateCart);
    server.expose('addToCart', addToCart);
    server.expose('removeFromCart', removeFromCart);
    server.expose('clearCart', clearCart);

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

    function calculateCartTotals(cart: Awaited<ReturnType<typeof findOrCreateCart>>) {
      return cart.cartProducts.reduce(
        (acc, cartProduct) => {
          const regularSum = cartProduct.product.regularPrice * cartProduct.quantity;
          const discountSum =
            (cartProduct.product.discountPrice ?? cartProduct.product.regularPrice) *
            cartProduct.quantity;

          acc.regularSubTotal += Math.trunc(regularSum);
          acc.discountSubTotal += Math.trunc(discountSum);
          return acc;
        },
        {
          regularSubTotal: 0,
          discountSubTotal: 0,
        },
      );
    }

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
        const cart = await findOrCreateCart(request);
        h.state('cart', cart.id);

        const { regularSubTotal, discountSubTotal } = calculateCartTotals(cart);

        return {
          data: {
            ...cart,
            regularSubTotal,
            discountSubTotal,
            createdAt: cart.createdAt.toISOString(),
            updatedAt: cart.updatedAt.toISOString(),
          },
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
        const cart = await findOrCreateCart(request);
        h.state('cart', cart.id);

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
        const cart = await findOrCreateCart(request);
        h.state('cart', cart.id);

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
        const cart = await findOrCreateCart(request);
        h.state('cart', cart.id);

        await clearCart(request, { cartId: cart.id });

        return null;
      },
    });
  },
};
