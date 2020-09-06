import { SET_NOTES, SET_NOTE } from './actionTypes';

export const createSetNotesAction = (notes, count) => ({
  type: SET_NOTES,
  notes,
  count
});

export const createSetNoteAction = (note) => ({
  type: SET_NOTE,
  note
});