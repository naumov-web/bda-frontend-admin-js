import { account } from './base.api';
import createPostRequest from '../requests/createPostRequest';
import createGetRequest from '../requests/createGetRequest';
import createDeleteRequest from '../requests/createDeleteRequest';

const PRODUCT_NOTE_URL = '/products/{product}/notes';
const NOTES_URL = '/notes';
const NOTE_URL = '/notes/{note}';

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

export const deleteNote = (id) => createDeleteRequest(
  account,
  NOTE_URL.replace('{note}', id),
);