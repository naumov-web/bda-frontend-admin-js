import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import queryString from 'query-string';
import { Form } from 'react-bootstrap';
// Components
import HandbookMenu from '../../../HandbookMenu';
import Table from '../../../Table';
// Services
import { load, setPriority } from '../../../../services/products';
// Styles
import './styles.sass';
import Pagination from '../../../Pagination';

export default () => {

  const baseUrl = '/handbook/products';

  const dispatch = useDispatch();
  const history = useHistory();
  const productPriorities = useSelector(state => state.handbooks.productPriorities);
  const products = useSelector(state => state.products.products);
  const count = useSelector(state => state.products.count);
  const pagination = useSelector(
    state => ({
      limit: state.products.limit,
      offset: state.products.offset,
      sortBy: state.products.sortBy,
      sortDirection: state.products.sortDirection,
    })
  );
  const defaultPagination = useSelector(state => state.products.defaultPagination);

  const onChangePriority = (item, priorityId) => {
    setPriority(item.id, priorityId, { dispatch });
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
      field: 'external_id',
      title: 'Внешний ID',
      sortable: true
    },
    {
      field: 'external_code',
      title: 'Внешний код',
      sortable: true
    },
    {
      title: 'Приоритет обработки',
      sortable: false,
      render: (item) => {
        return <>
          <Form.Control 
            as="select" 
            className={item.priority_id > 1 ? 'bg-success' : ''} 
            onChange={e => onChangePriority(item, e.target.value)}
            defaultValue={item.priority_id}
          >
            {productPriorities.map(
              productPriority => <option 
                key={item.id + '-' + productPriority.id} 
                value={productPriority.id}
              >
                {productPriority.name}
              </option>
            )}
          </Form.Control>
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

  return <div className="handbook-products-page wide-page page list-page">
    <HandbookMenu />
    <h3>Товары</h3>
    <Table 
      columns={columns}
      items={products}
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