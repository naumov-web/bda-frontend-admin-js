import camelcaseKeys from 'camelcase-keys';
// Redux methods
import { 
  createSetIsLoadingAction,
  createSetRawDataAction,
  createSetPaginationAction,
  createSetRawDataItemAction
} from '../store/rawData/actionCreators';

// API methods
import { getRawData, getRawDataItem } from '../utils/apis/rawData.api';

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

export const loadItem = async(id, { dispatch }) => {
  try {
    const data = await getRawDataItem(id);
    dispatch(createSetRawDataItemAction(data));
  } catch (e) {
  }
};