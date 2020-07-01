import { account } from './base.api';
import createGetRequest from '../requests/createGetRequest';
import createPutRequest from '../requests/createPutRequest';

const PROFILE_URL = '/user';

export const getProfile = () => createGetRequest(account, PROFILE_URL);

export const updateProfile = (data) => createPutRequest(account, PROFILE_URL, data);