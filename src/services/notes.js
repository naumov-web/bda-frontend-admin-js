import camelcaseKeys from 'camelcase-keys';
// Redux methods
import { createSetNotesAction } from '../store/notes/actionCreators';
// API methods
import { 
  createProductNote as createProductNoteRequest,
  getNotes as getNotesRequest,
  deleteNote as deleteNoteRequest
} from '../utils/apis/notes.api';

export const createProductNote = async (params, { history }) => {
  try {
    await createProductNoteRequest(params);
    history.push('/notes');
  } catch (e) {
  }
}

export const loadNotesList = async(params, { dispatch }) => {
  try {
    const data = await getNotesRequest(params);
    dispatch(createSetNotesAction(camelcaseKeys(data.items), data.count));
  } catch (e) {
  }
};

export const deleteNote = async(id, pagination, { dispatch }) => {
  try {
    await deleteNoteRequest(id);
    loadNotesList(pagination, { dispatch });
  } catch (e) {
  }
};