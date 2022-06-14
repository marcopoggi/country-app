import { useCountries } from "../../hooks/useCountries";
import { ErrorSign } from "../ErrorSign/ErrorSign";
import { Loader } from "../Loader/Loader";
import { CountryCard } from "../CountryCard/CountryCard";
import { Pagination } from "../Pagination/Pagination";
import { useEffect, useState } from "react";

export function CountryList() {
  const { countries, error, loading } = useCountries();
  const [countriesToView, setCountriesToView] = useState(countries);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const handleChangePage = (e) => {
    const value = e.target.value;
    switch (value) {
      case "prev":
        return currentPage > 1 && setCurrentPage(currentPage - 1);
      case "next":
        return currentPage < totalPages && setCurrentPage(currentPage + 1);
      default:
        const pageNumber = Number(value);
        return (
          pageNumber >= 1 &&
          pageNumber <= totalPages &&
          setCurrentPage(pageNumber)
        );
    }
  };

  useEffect(
    function () {
      setCountriesToView(countries);
      setTotalPages(Math.ceil(countries.length / 10));
      setCurrentPage(1);
    },
    [countries]
  );

  return loading ? (
    <Loader />
  ) : error.state ? (
    <ErrorSign message={error.msg} />
  ) : countriesToView.length === 0 ? (
    // add component for when no countries are found.
    <h2>No countries found</h2>
  ) : (
    <div>
      <div style={{ display: "flex" }}>
        {countriesToView
          .slice(currentPage * 10 - 10, currentPage * 10)
          .map((country) => (
            <CountryCard {...country} key={country.name} />
          ))}
      </div>
      <Pagination total={totalPages} handler={handleChangePage} />
    </div>
  );
}
