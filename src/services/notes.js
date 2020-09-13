import camelcaseKeys from 'camelcase-keys';
// Redux methods
import { createSetNotesAction } from '../store/notes/actionCreators';
// API methods
import { 
  createProductNote as createProductNoteRequest,
  getNotes as getNotesRequest
} from '../utils/apis/notes.api';

export const createProductNote = async (params, { history }) => {
  try {
    const data = await createProductNoteRequest(params);
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