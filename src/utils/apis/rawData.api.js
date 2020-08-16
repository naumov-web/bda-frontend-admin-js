import { account } from './base.api';
import createGetRequest from '../requests/createGetRequest';

const MINED_DATA_URL = '/raw-data';
const MINED_DATA_ITEM_URL = '/raw-data/{id}';

export const getRawData = (params) => createGetRequest(
  account, 
  MINED_DATA_URL,
  params
);

export const getRawDataItem = (id) => createGetRequest(
  account,
  MINED_DATA_ITEM_URL.replace('{id}', id)
);