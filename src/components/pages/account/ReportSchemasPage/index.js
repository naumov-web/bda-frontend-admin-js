import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import queryString from 'query-string';
// Components
import Table from '../../../Table';
import Pagination from '../../../Pagination';
import DeleteButton from '../../../ui/DeleteButton';
import EditLink from '../../../ui/EditLink';
import DetailLink from '../../../ui/DetailLink';
// Services
import { loadReportSchemasList, deleteReportSchema } from '../../../../services/reportSchemas';
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

  const onDeleteClick = (id) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('Вы уверены, что хотите удалить схему отчета?')) {
      deleteReportSchema(
        id,
        pagination,
        { dispatch }
      );
    }
  };

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
          {item.typeId === 1 && 
            <DetailLink 
              text="Графики" 
              link={`/report-schemas/${item.id}/graphs`} 
              size="sm" 
            />
          }
        </>;
      }
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
          <DeleteButton onClick={() => onDeleteClick(item.id) } />
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
        if (location.pathname === baseUrl && location.search !== '') {
          const params = queryString.parse(history.location.search);

          loadReportSchemasList(params, {
            dispatch
          });
        }
        if (location.pathname === baseUrl && location.search === '') {
          loadReportSchemasList(pagination, {
            dispatch
          });
        }
      }
    );

  }, []);

  const getLink = ({sortBy, sortDirection, limit, offset, baseUrl}) => 
  `${baseUrl}?limit=${limit}&offset=${offset}&sort_by=${sortBy}&sort_direction=${sortDirection}`;

  const onChangePage = (params) => {
    history.push(getLink(params));
  };

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
    <Pagination 
      {...pagination}
      count={count}
      baseUrl={baseUrl}
      onChangePage={onChangePage}
    />
  </div>;
};