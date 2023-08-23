// Pagination.js
import React from "react";
import style from "./pagination.module.css";

const Pagination = ({
  totalPosts,
  postPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className={style["page-bar"]}>
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            className={`${style["page-no"]} ${
              currentPage === page ? style["active"] : ""
            } `}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
