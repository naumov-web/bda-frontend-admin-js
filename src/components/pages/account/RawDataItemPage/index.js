import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// Services
import { loadItem } from '../../../../services/rawData';

export default () => {

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    loadItem(id, { dispatch });
  }, []);

  return <div className="mined-data-item-page wide-page page list-page">

  </div>;
};