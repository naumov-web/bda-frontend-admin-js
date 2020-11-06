import { SET_MICRO_TASKS } from './actionTypes';

export const createSetMicroTasksAction = (microTasks) => ({
  type: SET_MICRO_TASKS,
  microTasks,
});