import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import queryString from 'query-string';
// Components
import HandbookMenu from '../../../HandbookMenu';
import Table from '../../../Table';
// Services
import { load } from '../../../../services/dataSources';
// Styles
import './styles.sass';

export default () => {

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
    }
  ];
  const baseUrl = '/handbook/data-sources';

  const dispatch = useDispatch();
  const history = useHistory();
  const dataSources = useSelector(state => state.dataSources.dataSources);
  const pagination = useSelector(
    state => ({
      limit: state.dataSources.limit,
      offset: state.dataSources.offset,
      sortBy: state.dataSources.sortBy,
      sortDirection: state.dataSources.sortDirection,
    })
  );
  const defaultPagination = useSelector(state => state.dataSources.defaultPagination);

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

  return <div className="handbook-data-sources-page wide-page page list-page">
    <HandbookMenu />
    <h3>Источники данных</h3>
    <Table 
      columns={columns}
      items={dataSources}
      {...pagination}
      baseUrl={baseUrl}
    />
  </div>;
}