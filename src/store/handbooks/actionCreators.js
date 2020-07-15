import { SET_PRODUCT_PRIORITIES } from './actionTypes';

export const createSetProductPrioritiesAction = (product_priorities) => ({
  type: SET_PRODUCT_PRIORITIES,
  product_priorities,
});