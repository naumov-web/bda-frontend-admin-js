import camelcaseKeys from 'camelcase-keys';
// Redux methods
// API methods
import { 
  createReportSchema as createReportSchemaRequest
} from '../utils/apis/reportSchemas.api';
// Utils
import { removeEmptyFields } from '../utils/objects';

export const createProductNote = async (params, { history }) => {
  try {
    await createReportSchemaRequest(params);
    history.push('/report-schemas');
  } catch (e) {
  }
}