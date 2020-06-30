import axios from 'axios';

import { API_URL } from '../../config/api';

export const auth = axios.create({
  baseURL: `${API_URL}/core/auth`
});

export const account = axios.create({
  baseURL: `${API_URL}/core/account`
});

export const handbooks = axios.create({
  baseURL: `${API_URL}/core/handbooks`
});

account.interceptors.request.use(config => {
  const token = localStorage.getItem('token');

  if (token) {
    // eslint-disable-next-line
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

handbooks.interceptors.request.use(config => {
  const token = localStorage.getItem('token');

  if (token) {
    // eslint-disable-next-line
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});