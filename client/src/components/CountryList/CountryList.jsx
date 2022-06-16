import { useCountries } from "../../hooks/useCountries";
import { InfoSign } from "../InfoSign/InfoSign";
import { Loader } from "../Loader/Loader";
import { CountryCards } from "../CountryCards/CountryCards";
import { Pagination } from "../Pagination/Pagination";
import { useEffect, useState } from "react";

export function CountryList() {
  const { countries, error, loading } = useCountries();
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);

  useEffect(
    function () {
      setTotalPages(Math.ceil(countries.length / 10));
      setPage(1);
    },
    [countries]
  );

  return (
    <div>
      {error.state ? (
        <InfoSign message={error.msg} />
      ) : loading ? (
        <Loader />
      ) : countries.length > 0 ? (
        <div>
          <CountryCards countries={countries} page={page} />
          <Pagination total={totalPages} actual={page} setPage={setPage} />
        </div>
      ) : (
        <h1>Countries Not Found</h1>
      )}
    </div>
  );
}
