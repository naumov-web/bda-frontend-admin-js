import { account } from './base.api';
import createPostRequest from '../requests/createPostRequest';

const REPORT_SCHEMAS_URL = '/report-schemas';

export const createReportSchema = (params) => createPostRequest(
  account, 
  REPORT_SCHEMAS_URL,
  params
);