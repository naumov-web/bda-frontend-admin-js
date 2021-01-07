import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default () => {

  const { report_id } = useParams();

  return <div className="report-schema-graphs-page wide-page page list-page">
    <h3>Графики схемы отчета</h3>
    <div className="actions-row">
      <Link className="btn btn-sm btn-success" to={`/report-schemas/${report_id}/add-graph`}>
        Добавить график
      </Link>
    </div>
  </div>;
};