import { account } from './base.api';
import createGetRequest from '../requests/createGetRequest';
import createPatchRequest from '../requests/createPatchRequest';

const PRODUCTS_URL = '/products';
const PRODUCT_SET_PRIORITY = '/products/{product}/priority';

export const getProducts = (params) => createGetRequest(
  account, 
  PRODUCTS_URL,
  params
);

export const setPriority = (params) => createPatchRequest(
  account, 
  PRODUCT_SET_PRIORITY.replace('{product}', params.productId),
  {
    priority_id: params.priorityId
  }
);