import { handbooks } from './base.api';
import createGetRequest from '../requests/createGetRequest';

const MICRO_TASKS_URL = '/micro-tasks';

export const getMicroTasks = () => createGetRequest(
  handbooks, 
  MICRO_TASKS_URL
);