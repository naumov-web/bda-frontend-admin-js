import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import HandbookMenu from '../../../HandbookMenu';
import Table from '../../../Table';

import { load } from '../../../../services/dataSources';

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

  useEffect(() => {
    load({
      dispatch
    });
  }, []);

  return <div className="handbook-data-sources-page wide-page page list-page">
    <HandbookMenu />
    <h3>Источники данных</h3>
    <Table 
      columns={columns}
      items={dataSources}
    />
  </div>;
}