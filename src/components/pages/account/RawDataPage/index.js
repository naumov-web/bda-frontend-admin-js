import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
// Components
import Table from '../../../Table';
// Services
import { load } from '../../../../services/rawData';

import Pagination from '../../../Pagination';

import './styles.sass';

export default () => {

  const baseUrl = '/raw-data';

  const dispatch = useDispatch();
  const history = useHistory();
  const rawData = useSelector(state => state.rawData.rawData);
  const count = useSelector(state => state.rawData.count);
  const pagination = useSelector(
    state => ({
      limit: state.rawData.limit,
      offset: state.rawData.offset,
      sortBy: state.rawData.sortBy,
      sortDirection: state.rawData.sortDirection,
    })
  );
  const defaultPagination = useSelector(state => state.rawData.defaultPagination);

  const columns = [
    {
      field: 'date_time',
      title: 'Дата и время',
      sortable: true
    },
    {
      field: 'product.name',
      title: 'Наименование товара',
      sortable: false
    },
    {
      field: 'data_source.name',
      title: 'Источник данных',
      sortable: false
    },
    {
      field: 'micro_task.system_name',
      title: 'Наименование задачи',
      sortable: false
    },
    {
      title: '',
      sortable: false,
      render: (item) => {
        return <>
          <Link className="btn btn-sm btn-info" to={`/raw-data/${item.id}`}>
            Подробнее
          </Link>
        </>;
      }
    }
  ];

  useEffect(() => {
    if (history.location.search) {
      const params = queryString.parse(history.location.search);

      load(params, {
        dispatch
      });
    } else {
      load(pagination, {
        dispatch
      });
    }

    history.listen(
      location => {
        if (location.pathname === baseUrl && location.search !== '') {
          const params = queryString.parse(history.location.search);

          load(params, {
            dispatch
          });
        }
        if (location.pathname === baseUrl && location.search === '') {
          load(defaultPagination, {
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

  return <div className="raw-data-page wide-page page list-page">
    <h3>Собранная информация</h3>
    <Table 
      columns={columns}
      items={rawData}
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