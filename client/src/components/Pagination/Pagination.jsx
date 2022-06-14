export function Pagination({ total, handler }) {
  const createPages = (totalPages) => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div>
      <button key={"Previous"} value="prev" onClick={handler}>
        Previous
      </button>
      {createPages(total).map((page) => (
        <button key={page} value={page} onClick={handler}>
          {page}
        </button>
      ))}
      <button key={"Next"} value="next" onClick={handler}>
        Next
      </button>
    </div>
  );
}
