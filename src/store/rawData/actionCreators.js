import { 
  SET_RAW_DATA, 
  SET_RAW_DATA_ITEM, 
  SET_IS_LOADING, 
  SET_PAGINATION, 
  SET_RAW_DATA_ITEM_EXAMPLE
} from './actionTypes';

export const createSetRawDataAction = (rawData, count) => ({
  type: SET_RAW_DATA,
  rawData,
  count
});
  
export const createSetIsLoadingAction = (isLoading) => ({
  type: SET_IS_LOADING,
  isLoading
});
  
export const createSetPaginationAction = (params) => ({
  type: SET_PAGINATION,
  ...params
});

export const createSetRawDataItemAction = (rawDataItem) => ({
  type: SET_RAW_DATA_ITEM,
  rawDataItem
});

export const createSetRawDataItemExampleAction = (rawDataItem) => ({
  type: SET_RAW_DATA_ITEM_EXAMPLE,
  rawDataItemExample: rawDataItem
});