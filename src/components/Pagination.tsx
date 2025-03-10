import React from "react";
import styles from "./Pagination.module.css";

type pagination_props= {
  current_page: number;
  total_pages: number;
  on_page_change: (page: number) => void;
};

const Pagination: React.FC<pagination_props> = ({ current_page, total_pages, on_page_change }) => {
  const handle_previous = () => {
    if (current_page > 1) on_page_change(current_page - 1);
  };

  const handle_next = () => {
    if (current_page < total_pages) on_page_change(current_page + 1);
  };

  return (
    <div className={styles.pagination}>
      <button
        className={styles.button}
        onClick={handle_previous}
        disabled={current_page === 1}
      >
        Previous
      </button>

      <span className={styles.pageInfo}>
        Page {current_page} of {total_pages}
      </span>

      <button
        className={styles.button}
        onClick={handle_next}
        disabled={current_page === total_pages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
