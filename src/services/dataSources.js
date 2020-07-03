import camelcaseKeys from 'camelcase-keys';
// Redux methods
import { 
  createSetIsLoadingAction,
  createSetDataSourcesAction,
  createSetPaginationAction
} from '../store/dataSources/actionCreators';

// API methods
import { getDataSources } from '../utils/apis/dataSources.api';

export const load = async (params, { dispatch }) => {
  dispatch(createSetIsLoadingAction(true));
  dispatch(createSetPaginationAction(camelcaseKeys(params)));
  try {
    const data = await getDataSources(params);
    dispatch(createSetDataSourcesAction(data.items, data.count));
  } catch (e) {
  }
  dispatch(createSetIsLoadingAction(false));
};