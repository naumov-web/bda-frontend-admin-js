import { SET_PRODUCT_PRIORITIES } from './actionTypes';

export const createSetProductPrioritiesAction = (productPriorities) => ({
  type: SET_PRODUCT_PRIORITIES,
  productPriorities,
});