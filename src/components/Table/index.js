import React from 'react';
import FAIcon from 'react-fontawesome';

import './styles.sass';

export default ({ columns, items, onSortChange, sortBy, sortDirection }) => {

  const rows = items.map(item => <tr key={`row-${item.id}`}>
    {columns.map((column, index) => <td key={`cell-${index}-${item.id}`}>
      {column.field ? item[column.field] : null}
    </td>)}
  </tr>);

  return <table className="table table-bordered">
    <thead>
      <tr>
        {columns.map((column, index) => <th key={`column-${index}`}>
          {column.title ? column.title : ''}
          {column.sortable ? 
            <FAIcon 
              className="sort-icon" 
              name="chevron-down" 
              onClick={
                () => onSortChange(
                  column.field, 
                  (column.field === sortBy && sortDirection === 'asc') ? 'desc' : 'asc'
                )
              }
            /> : 
            null}
        </th>)}
      </tr>
    </thead>
    <tbody>
      {rows}
    </tbody>
  </table>;
};