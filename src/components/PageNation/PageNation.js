import React from 'react';
import './PageNation.css'

const Pagination = (props) => {
  const { currentPage, totalPages, onPageChange } = props

  const onPreviousPage = () => {
    onPageChange(currentPage - 1)
  } 

  const onNextPage = () => {
    onPageChange(currentPage + 1)
  }

  return (
    <div className="pagination">
      <button
       disabled={currentPage === 1}
        onClick={onPreviousPage}
      >
        Previous
      </button>
      <span>{currentPage} of {totalPages}</span>
      <button
        disabled={currentPage === totalPages}
        onClick={onNextPage}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
