import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import queryString from 'query-string';
// Components
import HandbookMenu from '../../../HandbookMenu';
import Table from '../../../Table';
// Services
import { load } from '../../../../services/products';
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
    },
    {
      field: 'external_id',
      title: 'Внешний ID',
      sortable: true
    },
    {
      field: 'external_code',
      title: 'Внешний код',
      sortable: true
    },
  ];
  const baseUrl = '/handbook/products';

  const dispatch = useDispatch();
  const history = useHistory();
  const products = useSelector(state => state.products.products);
  const pagination = useSelector(
    state => ({
      limit: state.products.limit,
      offset: state.products.offset,
      sortBy: state.products.sortBy,
      sortDirection: state.products.sortDirection,
    })
  );
  const defaultPagination = useSelector(state => state.products.defaultPagination);

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

  return <div className="handbook-products-page wide-page page list-page">
    <HandbookMenu />
    <h3>Товары</h3>
    <Table 
      columns={columns}
      items={products}
      {...pagination}
      baseUrl={baseUrl}
    />
  </div>;
};