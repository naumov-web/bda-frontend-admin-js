import Immutable from 'seamless-immutable';
import { SET_RAW_DATA, SET_RAW_DATA_ITEM, SET_IS_LOADING, SET_PAGINATION } from './actionTypes';
import defaultPagination from '../../config/pagination';

// Initial state
const initialState = Immutable({
  rawData: [],
  count: 0,
  isLoading: false,
  ...defaultPagination,
  defaultPagination: {
    ...defaultPagination,
    limit: 100
  },
  rawDataItem: null
});

// Reducer
export default function reduce(state = initialState, action = {}) {
  switch(action.type) {
    case SET_RAW_DATA:
      return state.merge({
          rawData: action.rawData,
          count: action.count
      });
    case SET_RAW_DATA_ITEM:
      return state.merge({
          rawDataItem: action.rawDataItem
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