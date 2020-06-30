import { SET_IS_LOADING, SET_IS_LOGGED, SET_ERROR_MESSAGES } from './actionTypes';

export const createSetIsLoadingAction = (isLoading) => ({
  type: SET_IS_LOADING,
  isLoading
});

export const createSetIsLoggedAction = (isLogged) => ({
  type: SET_IS_LOGGED,
  isLogged
});

export const createSetErrorMessagesAction = (errorMessages) => ({
  type: SET_ERROR_MESSAGES,
  errorMessages
});