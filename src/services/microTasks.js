import camelcaseKeys from 'camelcase-keys';
// Redux methods
import { createSetMicroTasksAction } from '../store/microTasks/actionCreators';
// API methods
import { getMicroTasks as getMicroTasksRequest } from '../utils/apis/microTasks.api';

export const load = async ({ dispatch }) => {
  try {
    const data = await getMicroTasksRequest();
    dispatch(createSetMicroTasksAction(data.items));
  } catch (e) {
  }
};