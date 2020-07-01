import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default ({ children }) => {
  const isLogged = useSelector(state => state.auth.isLogged);
  
  if (!isLogged) {
    return <Redirect to="/login" />
  }

  return <>
    {children}
  </>;
};