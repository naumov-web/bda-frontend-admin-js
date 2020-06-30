import { auth } from './base.api';
import createPostRequest from '../requests/createPostRequest';

const LOGIN_URL = '/login';

export const postLogin = (payload) => createPostRequest(auth, LOGIN_URL, payload);