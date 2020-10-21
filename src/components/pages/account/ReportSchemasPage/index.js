import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import queryString from 'query-string';
// Components
import Table from '../../../Table';
import DeleteButton from '../../../ui/DeleteButton';
import EditLink from '../../../ui/EditLink';
// Services
import { loadReportSchemasList } from '../../../../services/reportSchemas';
// Styles
import './styles.sass';

export default () => {
  const baseUrl = '/report-schemas';
  const dispatch = useDispatch();
  const history = useHistory();
  const reportSchemas = useSelector(data => data.reportSchemas.reportSchemas);
  const count = useSelector(state => state.reportSchemas.count);
  const pagination = useSelector(
    data => (
      { 
        limit: data.reportSchemas.limit,
        offset: data.reportSchemas.offset,
        sortBy: data.reportSchemas.sortBy,
        sortDirection: data.reportSchemas.sortDirection
      }
    )
  );

  const columns = [
    {
      field: 'id',
      title: 'Id',
      sortable: true
    },
    {
      field: 'name',
      title: 'Наименование',
      sortable: true
    },
    {
      field: 'typeName',
      title: 'Тип схемы',
      sortable: false
    },
    {
      title: '',
      sortable: false,
      render: (item) => {
        return <>
          <EditLink link={`/report-schemas/edit/${item.id}`} />
        </>;
      }
    },
    {
      title: '',
      sortable: false,
      render: (item) => {
        return <>
          <DeleteButton onClick={() => null } />
        </>;
      }
    }
  ];

  useEffect(() => {

    if (history.location.search) {
      const params = queryString.parse(history.location.search);

      loadReportSchemasList(params, {
        dispatch
      });
    } else {
      loadReportSchemasList(pagination, {
        dispatch
      });
    }

    history.listen(
      location => {

      }
    );

  }, []);

  return <div className="report-schemas-page wide-page page list-page">
    <h3>Схемы отчетов</h3>
    <div className="actions-row">
      <Link className="btn btn-sm btn-success" to={`/report-schemas/add`}>
        Добавить схему отчета
      </Link>
    </div>
    <Table 
      columns={columns}
      items={reportSchemas}
      {...pagination}
      baseUrl={baseUrl}
    />
  </div>;
};