import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
// Components
import NoteCard from './NoteCard';
// Services
import { load as loadProducts } from '../../../../services/products';
import { loadNotesList, deleteNote } from '../../../../services/notes';
// Utils
import transformSelectOptions from '../../../../utils/transformers/reactSelectTransformer';
// Styles
import './styles.sass';

export default () => {

  const baseUrl = '/notes';
  const dispatch = useDispatch();
  const products = useSelector(data => data.products.products);
  const notes = useSelector(data => data.notes.notes);
  const pagination = useSelector(
    data => (
      { 
        limit: data.notes.limit,
        offset: data.notes.offset,
        sortBy: data.notes.sortBy,
        sortDirection: data.notes.sortDirection
      }
    )
  );

  useEffect(() => {
    loadNotesList(pagination, { dispatch });

    if (products.length === 0) {
      loadProducts({}, { dispatch });
    }
  }, []);

  const onDeleteClick = (id) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('Вы уверены, что хотите удалить заметку?')) {
      deleteNote(
        id,
        pagination,
        { dispatch }
      );
    }
  };

  return <div className="notes-page wide-page page list-page">
    <h3>Заметки</h3>
    <div className="actions-row">
      <Link className="btn btn-sm btn-success" to={`/notes/add`}>
        Добавить заметку
      </Link>
    </div>
    <div className="filters-row">
    </div>
    <div className="items-row">
      {notes.map(note => <NoteCard key={`note-${note.id}`} {...note} onDeleteClick={onDeleteClick} />)}
    </div>
  </div>;

}