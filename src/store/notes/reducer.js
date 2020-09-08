import Immutable from 'seamless-immutable';
import { SET_NOTES, SET_NOTE } from './actionTypes';
import defaultPagination from '../../config/pagination';

// Initial state
const initialState = Immutable({
  notes: [],
  note: {
    text: '',
    product_id: ''
  },
  count: 0,
  ...defaultPagination
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
    default:
      return state;
  }
}