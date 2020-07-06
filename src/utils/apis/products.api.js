import { account } from './base.api';
import createGetRequest from '../requests/createGetRequest';

const PRODUCTS_URL = '/products';

export const getProducts = (params) => createGetRequest(
  account, 
  PRODUCTS_URL,
  params
);