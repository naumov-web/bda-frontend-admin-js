import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { logout } from '../../../../services/auth';

export default () => {

  const dispatch = useDispatch();

  useEffect(() => {
    logout({
      dispatch
    });
  });

  return <></>;
};