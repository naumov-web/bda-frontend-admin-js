import Immutable from 'seamless-immutable';
import { SET_MICRO_TASKS } from './actionTypes';

// Initial state
const initialState = Immutable({
  microTasks: []
});

// Reducer
export default function reduce(state = initialState, action = {}) {
  switch(action.type) {
    case SET_MICRO_TASKS:
      return state.merge({
        microTasks: action.microTasks
      });
    default:
      return state;
  }
}