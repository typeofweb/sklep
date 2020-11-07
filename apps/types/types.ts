/**
 * This file was auto-generated by swagger-to-ts.
 * Do not make direct changes to the file.
 */

export interface definitions {
  product: { id: number; name: string; slug: string; regularPrice: number; discountPrice?: number };
  Model1: { quantity: number; product: definitions['product'] };
  cartProducts: definitions['Model1'][];
  cart: {
    id: string;
    createdAt: string;
    updatedAt: string;
    regularSubTotal: number;
    discountSubTotal: number;
    totalQuantity: number;
    cartProducts: definitions['cartProducts'];
  };
  Model2: {
    id: string;
    cart: definitions['cart'];
    total: number;
    status:
      | 'PENDING'
      | 'PROCESSING'
      | 'ON_HOLD'
      | 'COMPLETED'
      | 'CANCELLED'
      | 'REFUNDED'
      | 'FAILED';
    createdAt: string;
    updatedAt: string;
  };
  data: definitions['Model2'][];
  meta: { total: number };
  Model3: { data: definitions['data']; meta: definitions['meta'] };
  Model4: {
    id: number;
    slug: string;
    name: string;
    description: string;
    isPublic: boolean;
    regularPrice: number;
    discountPrice?: number;
    type: 'SINGLE' | 'BUNDLE';
  };
  Model5: definitions['Model4'][];
  Model6: { data: definitions['Model5']; meta: definitions['meta'] };
  user: {
    id: number;
    name?: string;
    email: string;
    role: 'USER' | 'ADMIN';
    createdAt?: string;
    updatedAt?: string;
  };
  Model7: {
    id: string;
    validUntil: string;
    userId: number;
    createdAt?: string;
    updatedAt?: string;
    user: definitions['user'];
  };
  Model8: { data: definitions['Model7'] };
  Model9: definitions['cart'][];
  Model10: { data: definitions['Model9'] };
  Model11: (
    | 'PENDING'
    | 'PROCESSING'
    | 'ON_HOLD'
    | 'COMPLETED'
    | 'CANCELLED'
    | 'REFUNDED'
    | 'FAILED'
  )[];
  Model12: { data: definitions['Model11'] };
  Model13: {
    id: string;
    cart?: definitions['cart'];
    total: number;
    status:
      | 'PENDING'
      | 'PROCESSING'
      | 'ON_HOLD'
      | 'COMPLETED'
      | 'CANCELLED'
      | 'REFUNDED'
      | 'FAILED';
    createdAt: string;
    updatedAt: string;
  };
  Model14: { data: definitions['Model13'] };
  Model15: { data: definitions['Model4'] };
  Model16: { data: definitions['cart'] };
  Model17: {
    name: string;
    description: string;
    isPublic: boolean;
    regularPrice: number;
    discountPrice?: number;
    type: 'SINGLE' | 'BUNDLE';
  };
  Model18: { email: string; password: string };
  Model19: { productId: number; quantity: number };
  Model20: { productId: number };
  Model21: { orderId: string; stripeClientSecret: string };
  Model22: { data: definitions['Model21'] };
  Model23: {
    status:
      | 'PENDING'
      | 'PROCESSING'
      | 'ON_HOLD'
      | 'COMPLETED'
      | 'CANCELLED'
      | 'REFUNDED'
      | 'FAILED';
  };

  getOrdersRequestQuery: {
    take?: number;
    skip?: number;
  };

  getOrders200Response: definitions['Model3'];
  getProductsRequestQuery: {
    take?: number;
    skip?: number;
  };

  getProducts200Response: definitions['Model6'];
  postProductsRequestBody: definitions['Model17'];

  postProducts200Response: definitions['Model15'];

  getAuthMe200Response: definitions['Model8'];

  getCartAll200Response: definitions['Model10'];

  getOrdersStatuses200Response: definitions['Model12'];
  getOrdersOrderIdRequestPathParams: {
    orderId: string;
  };

  getOrdersOrderId200Response: definitions['Model14'];
  putOrdersOrderIdRequestPathParams: {
    orderId: string;
  };
  putOrdersOrderIdRequestBody: definitions['Model23'];

  putOrdersOrderId200Response: definitions['Model14'];
  getProductsProductIdOrSlugRequestPathParams: {
    productIdOrSlug: number | string;
  };

  getProductsProductIdOrSlug200Response: definitions['Model15'];

  postCart200Response: definitions['Model16'];
  postAuthLoginRequestBody: definitions['Model18'];

  postAuthLoginDefaultResponse: string;

  postAuthLogoutDefaultResponse: string;
  postAuthRegisterRequestBody: definitions['Model18'];

  postAuthRegisterDefaultResponse: string;

  postOrdersStripeWebhookDefaultResponse: string;
  patchCartAddRequestBody: definitions['Model19'];

  patchCartAddDefaultResponse: string;

  patchCartClearDefaultResponse: string;
  patchCartRemoveRequestBody: definitions['Model20'];

  patchCartRemoveDefaultResponse: string;
  patchCartSetRequestBody: definitions['Model19'];

  patchCartSetDefaultResponse: string;

  patchOrdersInitiateStripePayment200Response: definitions['Model22'];
  putProductsProductIdRequestPathParams: {
    productId: number;
  };
  putProductsProductIdRequestBody: definitions['Model17'];

  putProductsProductId200Response: definitions['Model15'];
  deleteProductsProductIdRequestPathParams: {
    productId: number;
  };

  deleteProductsProductIdDefaultResponse: string;

  pathsDefinitions: {
    '/orders': {
      GET: {
        requestQuery: {
          take?: number;
          skip?: number;
        };

        response: definitions['Model3'];
      };
    };
    '/products': {
      GET: {
        requestQuery: {
          take?: number;
          skip?: number;
        };

        response: definitions['Model6'];
      };
      POST: {
        requestBody: definitions['Model17'];

        response: definitions['Model15'];
      };
    };
    '/auth/me': {
      GET: {
        response: definitions['Model8'];
      };
    };
    '/cart/all': {
      GET: {
        response: definitions['Model10'];
      };
    };
    '/orders/statuses': {
      GET: {
        response: definitions['Model12'];
      };
    };
    '/orders/{orderId}': {
      GET: {
        requestPathParams: {
          orderId: string;
        };

        response: definitions['Model14'];
      };
      PUT: {
        requestPathParams: {
          orderId: string;
        };
        requestBody: definitions['Model23'];

        response: definitions['Model14'];
      };
    };
    '/products/{productIdOrSlug}': {
      GET: {
        requestPathParams: {
          productIdOrSlug: number | string;
        };

        response: definitions['Model15'];
      };
    };
    '/cart': {
      POST: {
        response: definitions['Model16'];
      };
    };
    '/auth/login': {
      POST: {
        requestBody: definitions['Model18'];

        response: string;
      };
    };
    '/auth/logout': {
      POST: {
        response: string;
      };
    };
    '/auth/register': {
      POST: {
        requestBody: definitions['Model18'];

        response: string;
      };
    };
    '/orders/stripe/webhook': {
      POST: {
        response: string;
      };
    };
    '/cart/add': {
      PATCH: {
        requestBody: definitions['Model19'];

        response: string;
      };
    };
    '/cart/clear': {
      PATCH: {
        response: string;
      };
    };
    '/cart/remove': {
      PATCH: {
        requestBody: definitions['Model20'];

        response: string;
      };
    };
    '/cart/set': {
      PATCH: {
        requestBody: definitions['Model19'];

        response: string;
      };
    };
    '/orders/initiate-stripe-payment': {
      PATCH: {
        response: definitions['Model22'];
      };
    };
    '/products/{productId}': {
      PUT: {
        requestPathParams: {
          productId: number;
        };
        requestBody: definitions['Model17'];

        response: definitions['Model15'];
      };
      DELETE: {
        requestPathParams: {
          productId: number;
        };

        response: string;
      };
    };
  };
}
