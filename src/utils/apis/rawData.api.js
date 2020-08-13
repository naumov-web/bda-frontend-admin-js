import { account } from './base.api';
import createGetRequest from '../requests/createGetRequest';

const MINED_DATA_URL = '/raw-data';

export const getRawData = (params) => createGetRequest(
  account, 
  MINED_DATA_URL,
  params
);