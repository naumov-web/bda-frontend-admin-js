import { account } from './base.api';
import createPostRequest from '../requests/createPostRequest';
import createGetRequest from '../requests/createGetRequest';
import createPutRequest from '../requests/createPutRequest';
import createDeleteRequest from '../requests/createDeleteRequest';

const REPORT_SCHEMAS_URL = '/report-schemas';
const REPORT_SCHEMA_URL = '/report-schemas/{report_schema}';

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

export const updateReportSchema = (id, params) => createPutRequest(
  account, 
  REPORT_SCHEMA_URL.replace('{report_schema}', id),
  params
);

export const deleteReportSchema = (id) => createDeleteRequest(
  account,
  REPORT_SCHEMA_URL.replace('{report_schema}', id)
);

export const getReportSchema = id => createGetRequest(
  account,
  REPORT_SCHEMA_URL.replace('{report_schema}', id)
);