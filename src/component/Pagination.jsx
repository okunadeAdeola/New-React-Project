// Pagination.js
import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ pageCount, onPageChange }) => {
  return (
    <ReactPaginate
      pageCount={pageCount}
      onPageChange={onPageChange}
      containerClassName={'pagination'}
      activeClassName={'active'}
      pageClassName={'page-item'}
      pageLinkClassName={'page-link'}
      breakClassName={'page-item'}
      breakLinkClassName={'page-link'}
      previousClassName={'page-item'}
      previousLinkClassName={'page-link'}
      nextClassName={'page-item'}
      nextLinkClassName={'page-link'}
    />
  );
};

export default Pagination;
