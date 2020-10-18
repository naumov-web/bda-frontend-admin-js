import snakecaseKeys from 'snakecase-keys';
// Redux methods
// API methods
import { 
  createReportSchema as createReportSchemaRequest
} from '../utils/apis/reportSchemas.api';
// Utils
import { removeEmptyFields } from '../utils/objects';

export const createReportSchema = async (params, { history }) => {
  try {
    await createReportSchemaRequest(
      snakecaseKeys(
        removeEmptyFields(params)
      )
    );
    history.push('/report-schemas');
  } catch (e) {
  }
}