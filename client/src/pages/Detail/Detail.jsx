import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCountryDetail } from "../../services/countries";
import { ErrorSign } from "../../components/ErrorSign/ErrorSign";
import { Loader } from "../../components/Loader/Loader";
import { CountryDetail } from "../../components/CountryDetail/CountryDetail";

export function Detail() {
  const { idOrName } = useParams();
  const [info, setInfo] = useState(null);

  useEffect(
    function () {
      getCountryDetail(idOrName).then((data) => {
        setInfo(data.response);
      });
    },
    [idOrName]
  );

  return (
    <div>
      {info ? (
        info?.error ? (
          <ErrorSign />
        ) : (
          <CountryDetail info={info} />
        )
      ) : (
        <Loader />
      )}
    </div>
  );
}
