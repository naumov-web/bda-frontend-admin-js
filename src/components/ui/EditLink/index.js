import React from 'react';
import { Link } from 'react-router-dom';

export default ({ link }) => {
  return <Link to={link} className="btn btn-warning btn-sm edit-link">
    Редактировать
  </Link>;
};