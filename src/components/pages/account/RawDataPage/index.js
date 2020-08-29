import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import httpBuildQuery from 'http-build-query';
import snakeCaseKeys from 'snakecase-keys';
// Components
import Table from '../../../Table';
import RawDataFilters from './Filters';
// Services
import { load } from '../../../../services/rawData';
// Utils
import { removeEmptyFields } from '../../../../utils/objects';

import Pagination from '../../../Pagination';

import './styles.sass';

export default () => {

  const baseUrl = '/raw-data';

  const [isShowFilters, setIsShowFilters] = useState(false);
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

  const getLink = ({baseUrl, ...params}) => 
    baseUrl + '?' + httpBuildQuery(
      snakeCaseKeys(
        removeEmptyFields(
          params
        )
      )
    );

  const onChangePage = (params) => {
    history.push(getLink(params));
  };

  return <div className="raw-data-page wide-page page list-page">
    <h3>Собранная информация</h3>
    <div className="filters-block">
      <div className="filter-buttons-row">
        {!isShowFilters && <button className="btn btn-sm btn-success" onClick={() => setIsShowFilters(true)}>
          Показать фильтры
        </button>}
        {isShowFilters && <button className="btn btn-sm btn-warning" onClick={() => setIsShowFilters(false)}>
          Скрыть фильтры
        </button>}
      </div>
      {isShowFilters && <RawDataFilters baseUrl={baseUrl} />}
    </div>
    <Table 
      columns={columns}
      items={rawData}
      {...pagination}
      baseUrl={baseUrl}
      queryParams={history.location.search ? queryString.parse(history.location.search) : {}}
    />
    <Pagination 
      {...pagination}
      count={count}
      baseUrl={baseUrl}
      onChangePage={onChangePage}
      queryParams={history.location.search ? queryString.parse(history.location.search) : {}}
    />
  </div>;
};