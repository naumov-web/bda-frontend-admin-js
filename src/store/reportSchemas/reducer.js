import Immutable from 'seamless-immutable';
import { SET_REPORT_SCHEMAS, SET_REPORT_SCHEMA, SET_PAGINATION } from './actionTypes';
import defaultPagination from '../../config/pagination';

// Initial state
const initialState = Immutable({
  reportSchemas: [],
  reportSchema: {
    name: ''
  },
  count: 0,
  ...defaultPagination,
  sortBy: 'updated_at',
  sortDirection: 'desc'
});

// Reducer
export default function reduce(state = initialState, action = {}) {
  switch(action.type) {
    case SET_REPORT_SCHEMAS:
      return state.merge({
        reportSchemas: action.reportSchemas,
        count: action.count
      });
    case SET_REPORT_SCHEMA:
      return state.merge({
        reportSchema: action.reportSchema
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