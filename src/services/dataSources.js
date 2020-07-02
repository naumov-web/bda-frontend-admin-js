// Redux methods
import { 
  createSetIsLoadingAction,
  createSetDataSourcesAction
} from '../store/dataSources/actionCreators';

// API methods
import { getDataSources } from '../utils/apis/dataSources.api';

export const load = async ({ dispatch }) => {
  dispatch(createSetIsLoadingAction(true));
  try {
    const data = await getDataSources();
    dispatch(createSetDataSourcesAction(data.items, data.count));
  } catch (e) {
  }
  dispatch(createSetIsLoadingAction(false));
};