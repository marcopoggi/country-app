export function Pagination({ actual, total, setPage }) {
  const createPages = (totalPages) => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

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
      {createPages(total).map((page, index) => (
        <button
          key={page}
          value={page}
          onClick={handleChangePage}
          disabled={index === actual - 1 ? true : false}
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
