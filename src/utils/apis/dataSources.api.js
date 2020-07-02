import { handbooks } from './base.api';
import createGetRequest from '../requests/createGetRequest';

const DATA_SOURCES_URL = '/product-types/{product_type}/data-sources';
const DEFAULT_PRODUCT_TYPE_ID = 1;

export const getDataSources = (params) => createGetRequest(
  handbooks, 
  DATA_SOURCES_URL.replace(
    '{product_type}',
    DEFAULT_PRODUCT_TYPE_ID
  ),
  params
);