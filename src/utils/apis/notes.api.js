import { account } from './base.api';
import createPostRequest from '../requests/createPostRequest';
import createGetRequest from '../requests/createGetRequest';

const PRODUCT_NOTE_URL = '/products/{product}/notes';
const NOTES_URL = '/notes';

export const createProductNote = (params) => createPostRequest(
  account, 
  PRODUCT_NOTE_URL.replace('{product}', params.product_id),
  params
);

export const getNotes = (params) => createGetRequest(
  account, 
  NOTES_URL,
  params
);