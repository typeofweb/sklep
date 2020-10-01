/**
 * This file was auto-generated by swagger-to-ts.
 * Do not make direct changes to the file.
 */

export interface definitions {
  Model1: {
    id: number;
    slug: string;
    name: string;
    description: string;
    isPublic: boolean;
    regularPrice: number;
    discountPrice?: number;
    type: 'SINGLE' | 'BUNDLE';
  };
  data: definitions['Model1'][];
  meta: { total: number };
  Model2: { data: definitions['data']; meta: definitions['meta'] };
  user: {
    id: number;
    name?: string;
    email: string;
    role: 'USER' | 'ADMIN';
    createdAt?: string;
    updatedAt?: string;
  };
  Model3: {
    id: string;
    validUntil: string;
    userId: number;
    createdAt?: string;
    updatedAt?: string;
    user: definitions['user'];
  };
  Model4: { data: definitions['Model3'] };
  product: { id: number; name: string; slug: string; regularPrice: number; discountPrice?: number };
  Model5: { quantity: number; product: definitions['product'] };
  cartProducts: definitions['Model5'][];
  Model6: {
    id: string;
    createdAt: string;
    updatedAt: string;
    regularSubTotal: number;
    discountSubTotal: number;
    totalQuantity: number;
    cartProducts: definitions['cartProducts'];
  };
  Model7: definitions['Model6'][];
  Model8: { data: definitions['Model7'] };
  Model9: { data: definitions['Model1'] };
  Model10: { data: definitions['Model6'] };
  Model11: {
    name: string;
    description: string;
    isPublic: boolean;
    regularPrice: number;
    discountPrice?: number;
    type: 'SINGLE' | 'BUNDLE';
  };
  Model12: { email: string; password: string };
  Model13: { productId: number; quantity: number };
  Model14: { productId: number };
  Model15: { orderId: string; stripeClientSecret: string };

  getProductsRequestQuery: {
    take?: number;
    skip?: number;
  };

  getProducts200Response: definitions['Model2'];
  postProductsRequestBody: definitions['Model11'];

  postProducts200Response: definitions['Model9'];

  getAuthMe200Response: definitions['Model4'];

  getCartAll200Response: definitions['Model8'];
  getProductsProductIdRequestPathParams: {
    productId: number;
  };

  getProductsProductId200Response: definitions['Model9'];
  putProductsProductIdRequestPathParams: {
    productId: number;
  };
  putProductsProductIdRequestBody: definitions['Model11'];

  putProductsProductId200Response: definitions['Model9'];
  deleteProductsProductIdRequestPathParams: {
    productId: number;
  };

  deleteProductsProductIdDefaultResponse: string;

  postCart200Response: definitions['Model10'];
  postAuthLoginRequestBody: definitions['Model12'];

  postAuthLoginDefaultResponse: string;

  postAuthLogoutDefaultResponse: string;
  postAuthRegisterRequestBody: definitions['Model12'];

  postAuthRegisterDefaultResponse: string;

  postOrdersStripeWebhookDefaultResponse: string;
  patchCartAddRequestBody: definitions['Model13'];

  patchCartAddDefaultResponse: string;

  patchCartClearDefaultResponse: string;
  patchCartRemoveRequestBody: definitions['Model14'];

  patchCartRemoveDefaultResponse: string;

  patchOrdersInitiateStripePayment200Response: definitions['Model15'];

  pathsDefinitions: {
    '/products': {
      GET: {
        requestQuery: {
          take?: number;
          skip?: number;
        };

        response: definitions['Model2'];
      };
      POST: {
        requestBody: definitions['Model11'];

        response: definitions['Model9'];
      };
    };
    '/auth/me': {
      GET: {
        response: definitions['Model4'];
      };
    };
    '/cart/all': {
      GET: {
        response: definitions['Model8'];
      };
    };
    '/products/{productId}': {
      GET: {
        requestPathParams: {
          productId: number;
        };

        response: definitions['Model9'];
      };
      PUT: {
        requestPathParams: {
          productId: number;
        };
        requestBody: definitions['Model11'];

        response: definitions['Model9'];
      };
      DELETE: {
        requestPathParams: {
          productId: number;
        };

        response: string;
      };
    };
    '/cart': {
      POST: {
        response: definitions['Model10'];
      };
    };
    '/auth/login': {
      POST: {
        requestBody: definitions['Model12'];

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
        requestBody: definitions['Model12'];

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
        requestBody: definitions['Model13'];

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
        requestBody: definitions['Model14'];

        response: string;
      };
    };
    '/orders/initiate-stripe-payment': {
      PATCH: {
        response: definitions['Model15'];
      };
    };
  };
}
