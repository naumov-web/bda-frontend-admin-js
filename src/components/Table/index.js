import React from 'react';
import { Link } from 'react-router-dom';
import FAIcon from 'react-fontawesome';

import './styles.sass';

const getLink = ({sortBy, sortDirection, limit, offset, baseUrl}) => 
  `${baseUrl}?limit=${limit}&offset=${offset}&sort_by=${sortBy}&sort_direction=${sortDirection}`;

const getFieldValue = (item, field) => {
  const parts = field.split('.');
  let citem = item;
  
  for(let i = 0, len = parts.length; i < len; i++) {
    if (!citem) {
      return '';
    }

    if (i === len - 1) {
      if (typeof citem[parts[i]] === 'undefined') {
        return '';
      }

      return citem[parts[i]];
    }

    if (typeof citem[parts[i]] === 'undefined') {
      return '';
    }

    citem = citem[parts[i]];
  }
};

export default ({ columns, items, onSortChange, sortBy, sortDirection, limit, offset, baseUrl }) => {

  const rows = items.map(item => <tr key={`row-${item.id}`}>
    {columns.map((column, index) => <td key={`cell-${index}-${item.id}`}>
      {column.field ? getFieldValue(item, column.field) : column.render(item)}
    </td>)}
  </tr>);

  return <table className="table table-bordered">
    <thead>
      <tr>
        {columns.map((column, index) => <th key={`column-${index}`}>
          {column.title ? column.title : ''}
          {column.sortable ? 
            <Link to={getLink({
              baseUrl,
              limit,
              offset,
              sortBy: column.field,
              sortDirection: (column.field === sortBy && sortDirection === 'asc') ? 'desc' : 'asc'
            })}>
              {(column.field === sortBy && sortDirection === 'asc') ? 
              <FAIcon 
              className={`sort-icon ${column.field === sortBy ? 'sort-icon_active' : ''}`}
                name="chevron-up" 
              /> : 
              <FAIcon 
                className={`sort-icon ${column.field === sortBy ? 'sort-icon_active' : ''}`} 
                name="chevron-down" 
              /> }
            </Link> : 
            null}
        </th>)}
      </tr>
    </thead>
    <tbody>
      {rows}
    </tbody>
  </table>;
};