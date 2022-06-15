import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCountryDetail } from "../../services/countries";

export function CountryDetail() {
  const { idOrName } = useParams();
  const [info, setInfo] = useState(null);

  useEffect(
    function () {
      getCountryDetail(idOrName).then((data) => {
        setInfo(data.response);
        console.log(data.response);
      });
    },
    [idOrName]
  );
  return (
    <div>
      {info ? (
        info?.error ? (
          <h1>Error</h1>
        ) : (
          <>
            <h1>{info.name}</h1>
            <h2>Code:{info.id}</h2>
            <h2>Capital:{info.capital}</h2>
            <h2>Continent:{info.continent}</h2>
            <h2>Subregion:{info.subregion}</h2>
            <h2>
              Area:{info.area}km<sup>2</sup>
            </h2>
            <h2>Population:{info.population}</h2>
          </>
        )
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}
