import Immutable from 'seamless-immutable';
import { SET_PRODUCT_PRIORITIES } from './actionTypes';

// Initial state
const initialState = Immutable({
  product_priorities: []
});

// Reducer
export default function reduce(state = initialState, action = {}) {
  switch(action.type) {
    case SET_PRODUCT_PRIORITIES:
      return state.merge({
          products: action.products,
          count: action.count
      });
    default:
      return state;
  }
}