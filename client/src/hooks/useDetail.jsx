import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCountryDetail } from "../services/countries";

export function useDetail() {
  const { idOrName } = useParams();
  const [loading, setLoading] = useState(false);
  const [countryDetail, setCountryDetail] = useState({});
  const [error, setError] = useState({ state: false, msg: "" });

  useEffect(
    function () {
      setLoading(true);
      getCountryDetail(idOrName)
        .then(({ response }) => {
          response?.error
            ? setError({ state: true, msg: response.error })
            : setCountryDetail(response);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    },
    [idOrName]
  );

  return { countryDetail, error, loading, param: idOrName };
}
