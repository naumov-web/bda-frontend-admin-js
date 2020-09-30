import Immutable from 'seamless-immutable';
import { SET_NOTES, SET_NOTE, SET_PAGINATION } from './actionTypes';
import defaultPagination from '../../config/pagination';

// Initial state
const initialState = Immutable({
  notes: [],
  note: {
    text: '',
    product_id: ''
  },
  count: 0,
  ...defaultPagination,
  sortBy: 'updated_at',
  sortDirection: 'desc'
});

// Reducer
export default function reduce(state = initialState, action = {}) {
  switch(action.type) {
    case SET_NOTES:
      return state.merge({
          notes: action.notes,
          count: action.count
      });
    case SET_NOTE:
      return state.merge({
          note: action.note
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