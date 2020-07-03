import Immutable from 'seamless-immutable';
import { SET_DATA_SOURCES, SET_IS_LOADING, SET_PAGINATION } from './actionTypes';
import defaultPagination from '../../config/pagination';

// Initial state
const initialState = Immutable({
  dataSources: [],
  count: 0,
  isLoading: false,
  ...defaultPagination,
  defaultPagination
});

// Reducer
export default function reduce(state = initialState, action = {}) {
  switch(action.type) {
    case SET_DATA_SOURCES:
      return state.merge({
          dataSources: action.dataSources,
          count: action.count
      });  
    case SET_IS_LOADING:
      return state.merge({
          isLoading: action.isLoading
      });
    case SET_PAGINATION:
      return state.merge({
        limit: action.limit,
        offset: action.offset,
        sortBy: action.sortBy,
        sortDirection: action.sortDirection,
      });
    default:
      return state;
  }
}