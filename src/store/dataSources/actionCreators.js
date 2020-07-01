import { SET_DATA_SOURCES, SET_IS_LOADING, SET_PAGINATION } from './actionTypes';

export const createSetDataSourcesAction = (dataSources, count) => ({
  type: SET_DATA_SOURCES,
  dataSources,
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