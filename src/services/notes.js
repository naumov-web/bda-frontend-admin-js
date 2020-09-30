import camelcaseKeys from 'camelcase-keys';
// Redux methods
import { 
  createSetNotesAction, 
  createSetNoteAction,
  createSetPaginationAction
} from '../store/notes/actionCreators';
// API methods
import { 
  createProductNote as createProductNoteRequest,
  getNotes as getNotesRequest,
  updateNote as updateNoteRequest,
  deleteNote as deleteNoteRequest,
  getNote as getNoteRequest
} from '../utils/apis/notes.api';
// Utils
import { removeEmptyFields } from '../utils/objects';

export const createProductNote = async (params, { history }) => {
  try {
    await createProductNoteRequest(params);
    history.push('/notes');
  } catch (e) {
  }
}
export const updateNote = async(id, params, { history }) => {
  try {
    await updateNoteRequest(id, params);
    history.push('/notes');
  } catch (e) {}
};

export const loadNotesList = async(params, { dispatch }) => {
  try {
    dispatch(createSetPaginationAction(
      camelcaseKeys(removeEmptyFields(params)))
    );
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

export const loadNote = async(id, { dispatch }) => {
  try {
    const data = await getNoteRequest(id);
    dispatch(createSetNoteAction(data));
  } catch (e) {
  }
};