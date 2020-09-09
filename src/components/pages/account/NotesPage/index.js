import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
// Services
import { load as loadProducts } from '../../../../services/products';
// Utils
import transformSelectOptions from '../../../../utils/transformers/reactSelectTransformer';
// Styles
import './styles.sass';

export default () => {

  const baseUrl = '/notes';
  const dispatch = useDispatch();
  const products = useSelector(data => data.products.products);
  const notes = useSelector(data => data.notes.notes);

  useEffect(() => {
    if (products.length === 0) {
      loadProducts({}, { dispatch });
    }
  }, []);

  return <div className="notes-page wide-page page list-page">
    <h3>Заметки</h3>
    <div className="actions-row">
      <Link className="btn btn-sm btn-success" to={`/notes/add`}>
        Добавить заметку
      </Link>
    </div>
    <div className="filters-row">
    </div>
  </div>;

}