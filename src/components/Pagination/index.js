import React from 'react';
import { Pagination } from 'react-bootstrap';

const currentPageOffset = 5;

const getLink = ({sortBy, sortDirection, limit, offset, baseUrl}) => 
  `${baseUrl}?limit=${limit}&offset=${offset}&sort_by=${sortBy}&sort_direction=${sortDirection}`;

export default ({ count, sortBy, sortDirection, limit, offset, baseUrl, onChangePage }) => {
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
          link={getLink({ sortBy, sortDirection, limit, offset: 0, baseUrl })}  
          onClick={onChangePage}
        />
        <Pagination.Ellipsis />
      </>
    )}

    {pageNumbers.map((number) => {  
      const url = getLink({ sortBy, sortDirection, limit, offset: (number - 1) * limit, baseUrl });

      return <Pagination.Item
        link={url}
        onClick={onChangePage}
        active={number === currentPage}
      />
    })}

    {(currentPage + currentPageOffset < pagesCount - 2) && (
      <>
        <Pagination.Ellipsis />
        <Pagination.Last 
          link={getLink({ sortBy, sortDirection, limit, offset: (pagesCount - 1) * limit, baseUrl })}  
          onClick={onChangePage}
        />
      </>
    )}
  </Pagination>;
};