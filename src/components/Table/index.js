import React from 'react';

export default ({ columns, items }) => {

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
        </th>)}
      </tr>
    </thead>
    <tbody>
      {rows}
    </tbody>
  </table>;
};