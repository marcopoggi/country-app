import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setCountries, setCountriesToView } from "../redux/actions/countries";
//handlers
import {
  getFilteredCountries,
  getOrderedCountries,
} from "../handlers/countries";

export function useCountries(all = false, refresh = false) {
  const [loading, setLoading] = useState(false);
  const { countries, countriesToView, error, filters, order } = useSelector(
    (state) => state.countries
  );
  const dispatch = useDispatch();

  useEffect(
    function () {
      setLoading(true);
      if (countries.length === 0 || refresh) {
        dispatch(setCountries());
      } else setLoading(false);
      if (!all) {
        const filtered = getFilteredCountries(countries, filters);
        const ordered = getOrderedCountries(filtered, order);
        dispatch(setCountriesToView(ordered));
      }
    },
    [countries.length, dispatch, countries, filters, order, all, refresh]
  );

  return {
    countries: all ? getOrderedCountries(countries) : countriesToView,
    error,
    loading,
  };
}
