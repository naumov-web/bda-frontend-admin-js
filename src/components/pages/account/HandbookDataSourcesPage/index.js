import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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

  const dispatch = useDispatch();
  const dataSources = useSelector(state => state.dataSources.dataSources);
  const pagination = useSelector(
    state => ({
      limit: state.dataSources.limit,
      offset: state.dataSources.offset,
      sortBy: state.dataSources.sortBy,
      sortDirection: state.dataSources.sortDirection,
    })
  );

  useEffect(() => {
    load({
      dispatch
    });
  }, []);

  const handleSort = (column, direction) => {

  };

  return <div className="handbook-data-sources-page wide-page page list-page">
    <HandbookMenu />
    <h3>Источники данных</h3>
    <Table 
      columns={columns}
      items={dataSources}
      onSortChange={handleSort}
      sortBy={pagination.sortBy}
      sortDirection={pagination.sortDirection}
    />
  </div>;
}