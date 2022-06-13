import { useCountries } from "../../hooks/useCountries";
import { ErrorSign } from "../ErrorSign/ErrorSign";
import { Loader } from "../Loader/Loader";
import { CountryCard } from "../CountryCard/CountryCard";

export function CountryList() {
  const { loading, countries, error, message } = useCountries();

  return (
    <div>
      {error ? (
        <ErrorSign message={message} />
      ) : loading ? (
        <Loader />
      ) : (
        countries.map((country) => (
          <CountryCard {...country} key={country.name} />
        ))
      )}
    </div>
  );
}
