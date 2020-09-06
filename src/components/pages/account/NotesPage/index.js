import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
// Styles
import './styles.sass';

export default () => {

  const baseUrl = '/notes';

  return <div className="notes-page wide-page page list-page">
    <h3>Заметки</h3>
    <div className="actions-row">
      <Link className="btn btn-sm btn-success" to={`/notes/add`}>
        Добавить заметку
      </Link>
    </div>
  </div>;

}