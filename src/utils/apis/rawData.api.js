import { account } from './base.api';
import createGetRequest from '../requests/createGetRequest';

const MINED_DATA_URL = '/raw-data';
const MINED_DATA_ITEM_URL = '/raw-data/{id}';
const MINED_DATA_EXAMPLE_URL = '/raw-data';

export const getRawData = (params) => createGetRequest(
  account, 
  MINED_DATA_URL,
  params
);

export const getRawDataItem = (id) => createGetRequest(
  account,
  MINED_DATA_ITEM_URL.replace('{id}', id)
);

export const getRawDataExample = (micro_task_id) => createGetRequest(
  account,
  MINED_DATA_EXAMPLE_URL,
  {
    micro_task_id,
    limit: 1,
    offset: 0
  }
);