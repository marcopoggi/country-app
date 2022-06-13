import { useCountries } from "../../hooks/useCountries";
import { ErrorSign } from "../ErrorSign/ErrorSign";
import { Loader } from "../Loader/Loader";
import { CountryCard } from "../CountryCard/CountryCard";
import { useEffect, useState } from "react";

export function CountryList() {
  const { countries, error, loading } = useCountries();
  const [countriesToView, setCountriesToView] = useState(countries);

  useEffect(
    function () {
      setCountriesToView(countries);
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
    countriesToView.map((country) => (
      <CountryCard {...country} key={country.name} />
    ))
  );
}
