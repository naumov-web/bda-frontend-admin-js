import camelcaseKeys from 'camelcase-keys';
// Redux methods
import { 
  createSetIsLoadingAction,
  createSetRawDataAction,
  createSetPaginationAction,
  createSetRawDataItemAction,
  createSetRawDataItemExampleAction
} from '../store/rawData/actionCreators';

// API methods
import { getRawData, getRawDataItem, getRawDataExample } from '../utils/apis/rawData.api';

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

export const loadItemExample = async (microTaskId, { dispatch }) => {
  try {
    const data = await getRawDataExample(microTaskId);
    if (data.count) {
      dispatch(createSetRawDataItemExampleAction(data.items[0]));
    } else {
      dispatch(createSetRawDataItemExampleAction(null));
    }
  } catch (e) {
  }
}