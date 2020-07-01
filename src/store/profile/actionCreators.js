import { SET_IS_LOADING, SET_ERROR_MESSAGES, SET_USER, SET_SUCCESS_MESSAGE } from './actionTypes';

export const createSetIsLoadingAction = (isLoading) => ({
  type: SET_IS_LOADING,
  isLoading
});

export const createSetErrorMessagesAction = (errorMessages) => ({
  type: SET_ERROR_MESSAGES,
  errorMessages
});

export const createSetUserAction = (user) => ({
  type: SET_USER,
  user
})

export const createSetSuccessMessageAction = (message) => ({
  type: SET_SUCCESS_MESSAGE,
  message
});