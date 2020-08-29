import React from 'react';
import { Pagination } from 'react-bootstrap';

const currentPageOffset = 5;

export default ({ 
  count, 
  sortBy, 
  sortDirection, 
  limit, 
  offset, 
  baseUrl, 
  onChangePage,
  queryParams 
}) => {
  if (count <= limit) {
    return null;
  }

  const pagesCount = Math.ceil(count / limit);
  const currentPage = offset / limit + 1;
  const pageNumbers = [];

  for(let i = 1; i <= pagesCount; i += 1) {
    if (i >= (currentPage - currentPageOffset) && i <= (currentPage + currentPageOffset)) {
        pageNumbers.push(i);
    }
  }

  return <Pagination>
    {(currentPage - currentPageOffset > 2) && (
      <>
        <Pagination.First
          onClick={() => onChangePage({ ...queryParams, sortBy, sortDirection, limit, offset: 0, baseUrl })}
        />
        <Pagination.Ellipsis />
      </>
    )}

    {pageNumbers.map((number) => {  
      return <Pagination.Item
        key={`page-${number}`}
        onClick={() => onChangePage({ ...queryParams, sortBy, sortDirection, limit, offset: (number - 1) * limit, baseUrl })}
        active={number === currentPage}
      >{number}</Pagination.Item>
    })}

    {(currentPage + currentPageOffset < pagesCount - 2) && (
      <>
        <Pagination.Ellipsis />
        <Pagination.Last 
          onClick={
            () => onChangePage(
              { ...queryParams, sortBy, sortDirection, limit, offset: (pagesCount - 1) * limit, baseUrl }
            )
          }
        />
      </>
    )}
  </Pagination>;
};