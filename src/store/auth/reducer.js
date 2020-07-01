import Immutable from 'seamless-immutable';
import { SET_IS_LOGGED, SET_IS_LOADING, SET_ERROR_MESSAGES } from './actionTypes';
import { getToken } from '../../utils/localStorage/token';

// Initial state
const initialState = Immutable({
  errorMessages: {},
  isLogged: Boolean(getToken()),
  isLoading: false
});

// Reducer
export default function reduce(state = initialState, action = {}) {
  switch(action.type) {
    case SET_ERROR_MESSAGES:
      return state.merge({
        errorMessages: action.errorMessages,
      });
    case SET_IS_LOGGED:
      return state.merge({
        isLogged: action.isLogged,
      });
    case SET_IS_LOADING:
      return state.merge({
        isLoading: action.isLoading,
      });
    default:
      return state;
  }
}
