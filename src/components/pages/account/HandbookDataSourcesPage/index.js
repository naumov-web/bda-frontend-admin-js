import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import HandbookMenu from '../../../HandbookMenu';

import { load } from '../../../../services/dataSources';

export default () => {

  const dispatch = useDispatch();

  useEffect(() => {
    load({
      dispatch
    });
  }, []);

  return <div className="handbook-data-sources-page wide-page page">
    <HandbookMenu />
    <h3>Источники данных</h3>
  </div>;
}