import { SET_REPORT_SCHEMAS, SET_REPORT_SCHEMA, SET_PAGINATION } from './actionTypes';

export const createSetReportSchemasAction = (reportSchemas, count) => ({
  type: SET_REPORT_SCHEMAS,
  reportSchemas,
  count
});

export const createSetReportSchemaAction = (reportSchema) => ({
  type: SET_REPORT_SCHEMA,
  reportSchema
});

export const createSetPaginationAction = (params) => ({
  type: SET_PAGINATION,
  ...params
});