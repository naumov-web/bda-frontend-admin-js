import { SET_PRODUCTS, SET_IS_LOADING, SET_PAGINATION } from './actionTypes';

export const createSetProductsAction = (products, count) => ({
  type: SET_PRODUCTS,
  products,
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