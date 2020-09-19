import React from 'react';

export default ({ onClick }) => {
  return <button className="btn btn-danger btn-sm" onClick={onClick}>
    Удалить
  </button>;
}