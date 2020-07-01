// Redux methods
import { 
  createSetIsLoadingAction
} from '../store/dataSources/actionCreators';

// API methods
import { getDataSources } from '../utils/apis/dataSources.api';

export const load = async ({ dispatch }) => {
  dispatch(createSetIsLoadingAction(true));
  try {
    const data = await getDataSources();
    
  } catch (e) {
  }
  dispatch(createSetIsLoadingAction(false));
};