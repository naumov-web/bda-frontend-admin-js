import Immutable from 'seamless-immutable';
import { SET_PRODUCT_PRIORITIES } from './actionTypes';

// Initial state
const initialState = Immutable({
  productPriorities: []
});

// Reducer
export default function reduce(state = initialState, action = {}) {
  switch(action.type) {
    case SET_PRODUCT_PRIORITIES:
      return state.merge({
          productPriorities: action.productPriorities,
          count: action.count
      });
    default:
      return state;
  }
}