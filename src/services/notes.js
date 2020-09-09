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

export const getNotesList = async(params, { dispatch }) => {
  try {
    const data = await getNotesRequest(params);
  } catch (e) {
  }
};