import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setDetail } from "../redux/actions/details";

export function useDetail() {
  const dispatch = useDispatch();
  const { idOrName } = useParams();
  const { details, error } = useSelector((state) => state.details);
  const [loading, setLoading] = useState(false);
  const [countryDetail, setCountryDetail] = useState({});

  useEffect(
    function () {
      setLoading(true);
      let searchParam = idOrName.toLowerCase();
      let searchLocalDetail = details.find(
        ({ id, name }) => name === searchParam || id === searchParam
      );
      if (!searchLocalDetail) {
        dispatch(setDetail(idOrName));
      } else {
        setCountryDetail(searchLocalDetail);
        setLoading(false);
      }
    },
    [idOrName, details, dispatch]
  );

  return { countryDetail, error, loading };
}
