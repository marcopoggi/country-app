import { useEffect, useState } from "react";
//styles
import {
  container_pagination,
  containter_pagination_pages,
  prev_btn,
  next_btn,
} from "./Pagination.module.css";
import prev_icon from "../../assets/img/prev_page.png";
import next_icon from "../../assets/img/next_page.png";

export function Pagination({ actual, total, setPage }) {
  const [pages, setPages] = useState([]);

  useEffect(
    function () {
      let newPages = [];
      for (let i = 1; i <= total; i++) {
        newPages.push(i);
      }
      setPages(newPages);
    },
    [total]
  );

  const handleChangePage = (e) => {
    const value = e.target.value || e.target.parentNode.value;
    switch (value) {
      case "prev":
        return actual > 1 && setPage(actual - 1);
      case "next":
        console.log("next");
        return actual < total && setPage(actual + 1);
      default:
        const pageNumber = Number(value);
        return pageNumber >= 1 && pageNumber <= total && setPage(pageNumber);
    }
  };

  return (
    <div className={container_pagination}>
      <button
        key={"Previous"}
        value="prev"
        onClick={handleChangePage}
        className={prev_btn}
      >
        <img src={prev_icon} alt="Prev" value="prev" />
      </button>
      <button
        key={1}
        value={1}
        onClick={handleChangePage}
        disabled={1 === actual}
      >
        1
      </button>
      <div className={containter_pagination_pages}>
        {pages.map((page) => {
          if (page === 1 || page === pages.length) return null;
          return (
            <button
              key={page}
              value={page}
              onClick={handleChangePage}
              disabled={page === actual}
            >
              {page}
            </button>
          );
        })}
      </div>
      {pages.length > 1 ? (
        <button
          key={pages.length}
          value={pages.length}
          onClick={handleChangePage}
          disabled={pages.length === actual}
        >
          {pages.length}
        </button>
      ) : null}
      <button
        key={"Next"}
        value="next"
        onClick={handleChangePage}
        className={next_btn}
      >
        <img src={next_icon} alt="Next" value="next" />
      </button>
    </div>
  );
}
