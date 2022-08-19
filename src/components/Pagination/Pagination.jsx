import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';

export const Pagination = ({ page, setPage }) => {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={event => setPage(event.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={3}
      forcePage={page - 1}
    />
  );
};
