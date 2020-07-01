import Immutable from 'seamless-immutable';
import { SET_IS_LOADING, SET_ERROR_MESSAGES, SET_USER, SET_SUCCESS_MESSAGE } from './actionTypes';

// Initial state
const initialState = Immutable({
  errorMessages: {},
  isLoading: false,
  serverError: null,
  successMessage: null,
  user: {
    email: '',
    phone: ''
  }
});

// Reducer
export default function reduce(state = initialState, action = {}) {
  switch(action.type) {
    case SET_ERROR_MESSAGES:
      return state.merge({
        errorMessages: action.errorMessages,
      });
    case SET_IS_LOADING:
      return state.merge({
        isLoading: action.isLoading,
      });
    case SET_USER:
      return state.merge({
        user: action.user
      });
    case SET_SUCCESS_MESSAGE: 
      return state.merge({
        successMessage: action.message
      });
    default:
      return state;
  }
}