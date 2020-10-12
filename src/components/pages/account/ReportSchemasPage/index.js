import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import './styles.sass';

export default () => {
  const baseUrl = '/report-schemas';

  return <div className="report-schemas-page wide-page page list-page">
    <h3>Схемы отчетов</h3>
    <div className="actions-row">
      <Link className="btn btn-sm btn-success" to={`/report-schemas/add`}>
        Добавить схему отчета
      </Link>
    </div>
  </div>;
};