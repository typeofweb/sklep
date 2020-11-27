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
  Model7: { id: number; name: string; taxRate: number };
  Model8: definitions['Model7'][];
  Model9: { data: definitions['Model8'] };
  user: {
    id: number;
    name?: string;
    email: string;
    role: 'USER' | 'ADMIN';
    createdAt?: string;
    updatedAt?: string;
  };
  Model10: {
    id: string;
    validUntil: string;
    userId: number;
    createdAt?: string;
    updatedAt?: string;
    user: definitions['user'];
  };
  Model11: { data: definitions['Model10'] };
  Model12: definitions['cart'][];
  Model13: { data: definitions['Model12'] };
  Model14: (
    | 'PENDING'
    | 'PROCESSING'
    | 'ON_HOLD'
    | 'COMPLETED'
    | 'CANCELLED'
    | 'REFUNDED'
    | 'FAILED'
  )[];
  Model15: { data: definitions['Model14'] };
  Model16: {
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
  Model17: { data: definitions['Model16'] };
  Model18: { data: definitions['Model4'] };
  Model19: { data: definitions['Model7'] };
  Model20: { data: definitions['cart'] };
  Model21: {
    name: string;
    description: string;
    isPublic: boolean;
    regularPrice: number;
    discountPrice?: number;
    type: 'SINGLE' | 'BUNDLE';
  };
  Model22: { name: string; taxRate: number };
  Model23: { email: string; password: string };
  Model24: { productId: number; quantity: number };
  Model25: { productId: number };
  Model26: { orderId: string; stripeClientSecret: string };
  Model27: { data: definitions['Model26'] };
  Model28: {
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
  postProductsRequestBody: definitions['Model21'];

  postProducts200Response: definitions['Model18'];

  getTaxes200Response: definitions['Model9'];
  postTaxesRequestBody: definitions['Model22'];

  postTaxes200Response: definitions['Model19'];

  getAuthMe200Response: definitions['Model11'];

  getCartAll200Response: definitions['Model13'];

  getOrdersStatuses200Response: definitions['Model15'];
  getOrdersOrderIdRequestPathParams: {
    orderId: string;
  };

  getOrdersOrderId200Response: definitions['Model17'];
  putOrdersOrderIdRequestPathParams: {
    orderId: string;
  };
  putOrdersOrderIdRequestBody: definitions['Model28'];

  putOrdersOrderId200Response: definitions['Model17'];
  getProductsProductIdOrSlugRequestPathParams: {
    productIdOrSlug: number | string;
  };

  getProductsProductIdOrSlug200Response: definitions['Model18'];
  getTaxesTaxIdRequestPathParams: {
    taxId: number;
  };

  getTaxesTaxId200Response: definitions['Model19'];
  putTaxesTaxIdRequestPathParams: {
    taxId: number;
  };
  putTaxesTaxIdRequestBody: definitions['Model22'];

  putTaxesTaxId200Response: definitions['Model19'];
  deleteTaxesTaxIdRequestPathParams: {
    taxId: number;
  };

  deleteTaxesTaxIdDefaultResponse: string;

  postCart200Response: definitions['Model20'];
  postAuthLoginRequestBody: definitions['Model23'];

  postAuthLoginDefaultResponse: string;

  postAuthLogoutDefaultResponse: string;
  postAuthRegisterRequestBody: definitions['Model23'];

  postAuthRegisterDefaultResponse: string;

  postOrdersStripeWebhookDefaultResponse: string;
  patchCartAddRequestBody: definitions['Model24'];

  patchCartAddDefaultResponse: string;

  patchCartClearDefaultResponse: string;
  patchCartRemoveRequestBody: definitions['Model25'];

  patchCartRemoveDefaultResponse: string;
  patchCartSetRequestBody: definitions['Model24'];

  patchCartSetDefaultResponse: string;

  patchOrdersInitiateStripePayment200Response: definitions['Model27'];
  putProductsProductIdRequestPathParams: {
    productId: number;
  };
  putProductsProductIdRequestBody: definitions['Model21'];

  putProductsProductId200Response: definitions['Model18'];
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
        requestBody: definitions['Model21'];

        response: definitions['Model18'];
      };
    };
    '/taxes': {
      GET: {
        response: definitions['Model9'];
      };
      POST: {
        requestBody: definitions['Model22'];

        response: definitions['Model19'];
      };
    };
    '/auth/me': {
      GET: {
        response: definitions['Model11'];
      };
    };
    '/cart/all': {
      GET: {
        response: definitions['Model13'];
      };
    };
    '/orders/statuses': {
      GET: {
        response: definitions['Model15'];
      };
    };
    '/orders/{orderId}': {
      GET: {
        requestPathParams: {
          orderId: string;
        };

        response: definitions['Model17'];
      };
      PUT: {
        requestPathParams: {
          orderId: string;
        };
        requestBody: definitions['Model28'];

        response: definitions['Model17'];
      };
    };
    '/products/{productIdOrSlug}': {
      GET: {
        requestPathParams: {
          productIdOrSlug: number | string;
        };

        response: definitions['Model18'];
      };
    };
    '/taxes/{taxId}': {
      GET: {
        requestPathParams: {
          taxId: number;
        };

        response: definitions['Model19'];
      };
      PUT: {
        requestPathParams: {
          taxId: number;
        };
        requestBody: definitions['Model22'];

        response: definitions['Model19'];
      };
      DELETE: {
        requestPathParams: {
          taxId: number;
        };

        response: string;
      };
    };
    '/cart': {
      POST: {
        response: definitions['Model20'];
      };
    };
    '/auth/login': {
      POST: {
        requestBody: definitions['Model23'];

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
        requestBody: definitions['Model23'];

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
        requestBody: definitions['Model24'];

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
        requestBody: definitions['Model25'];

        response: string;
      };
    };
    '/cart/set': {
      PATCH: {
        requestBody: definitions['Model24'];

        response: string;
      };
    };
    '/orders/initiate-stripe-payment': {
      PATCH: {
        response: definitions['Model27'];
      };
    };
    '/products/{productId}': {
      PUT: {
        requestPathParams: {
          productId: number;
        };
        requestBody: definitions['Model21'];

        response: definitions['Model18'];
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
