import camelcaseKeys from 'camelcase-keys';
// Redux methods
import { 
  createSetIsLoadingAction,
  createSetRawDataAction,
  createSetPaginationAction
} from '../store/rawData/actionCreators';

// API methods
import { getRawData } from '../utils/apis/rawData.api';

export const load = async (params, { dispatch }) => {
  dispatch(createSetIsLoadingAction(true));
  dispatch(createSetPaginationAction(camelcaseKeys(params)));
  try {
    const data = await getRawData(params);
    dispatch(createSetRawDataAction(data.items, data.count));
  } catch (e) {
  }
  dispatch(createSetIsLoadingAction(false));
};