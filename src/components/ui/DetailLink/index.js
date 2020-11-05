import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

export default ({ link, text, size }) => {
  const classNamesObj = {
    'btn': true,
    'btn-info': true,
    'detail-link': true
  };

  if (typeof size !== 'undefined') {
    classNamesObj['btn-' + size] = true;
  }

  return <Link to={link} className={classnames(classNamesObj)}>
    { text }
  </Link>;
};