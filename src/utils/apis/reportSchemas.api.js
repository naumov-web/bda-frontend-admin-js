import { account } from './base.api';
import createPostRequest from '../requests/createPostRequest';
import createGetRequest from '../requests/createGetRequest';

const REPORT_SCHEMAS_URL = '/report-schemas';

export const createReportSchema = (params) => createPostRequest(
  account, 
  REPORT_SCHEMAS_URL,
  params
);

export const getReportSchemas = (params) => createGetRequest(
  account,
  REPORT_SCHEMAS_URL,
  params
);