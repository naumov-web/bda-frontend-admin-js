import camelcaseKeys from 'camelcase-keys';
import snakecaseKeys from 'snakecase-keys';
// Redux methods
import { 
  createSetReportSchemasAction, 
  createSetPaginationAction,
  createSetReportSchemaAction
} from '../store/reportSchemas/actionCreators';
// API methods
import { 
  createReportSchema as createReportSchemaRequest,
  getReportSchemas as getReportSchemasRequest,
  getReportSchema as getReportSchemaRequest,
  updateReportSchema as updateReportSchemaRequest,
  deleteReportSchema as deleteReportSchemaRequest
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

export const loadReportSchemasList = async(params, { dispatch }) => {
  try {
    dispatch(createSetPaginationAction(
      camelcaseKeys(removeEmptyFields(params)))
    );
    const data = await getReportSchemasRequest(params);
    dispatch(createSetReportSchemasAction(camelcaseKeys(data.items), data.count));
  } catch (e) {
  }
};

export const updateReportSchema = async (id, params, { history }) => {
  try {
    await updateReportSchemaRequest(
      id,
      snakecaseKeys(
        removeEmptyFields(params)
      )
    );
    history.push('/report-schemas');
  } catch (e) {
  }
}

export const deleteReportSchema = async(id, pagination, { dispatch }) => {
  try {
    await deleteReportSchemaRequest(id);
    loadReportSchemasList(pagination, { dispatch });
  } catch (e) {
  }
};

export const loadReportSchema = async(id, { dispatch }) => {
  try {
    const data = await getReportSchemaRequest(id);
    dispatch(createSetReportSchemaAction(data));
  } catch (e) {
  }
};