import { useEffect, useState } from "react";

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
    const value = e.target.value;
    switch (value) {
      case "prev":
        return actual > 1 && setPage(actual - 1);
      case "next":
        return actual < total && setPage(actual + 1);
      default:
        const pageNumber = Number(value);
        return pageNumber >= 1 && pageNumber <= total && setPage(pageNumber);
    }
  };

  return (
    <div>
      <button key={"Previous"} value="prev" onClick={handleChangePage}>
        Previous
      </button>
      {pages.map((page) => (
        <button
          key={page}
          value={page}
          onClick={handleChangePage}
          disabled={page === actual}
        >
          {page}
        </button>
      ))}
      <button key={"Next"} value="next" onClick={handleChangePage}>
        Next
      </button>
    </div>
  );
}
