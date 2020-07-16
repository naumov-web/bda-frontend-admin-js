import { handbooks } from './base.api';
import createGetRequest from '../requests/createGetRequest';

const ALL_HANDBOOKS_URL = '/all';

export const getAllHandbooks = () => createGetRequest(
  handbooks, 
  ALL_HANDBOOKS_URL
);