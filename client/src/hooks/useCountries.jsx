import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setCountries, setCountriesToView } from "../redux/actions/countries";
//handlers
import {
  getFilteredCountries,
  getOrderedCountries,
} from "../handlers/countries";

export function useCountries() {
  const { countries, countriesToView, error, filters, order } = useSelector(
    (state) => state.countries
  );
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(
    function () {
      setLoading(true);
      if (countries.length === 0) {
        dispatch(setCountries());
        dispatch(setCountriesToView(countries));
      }
      dispatch(setCountriesToView(countries));
      setLoading(false);
    },
    [countries.length, dispatch, countries]
  );

  useEffect(
    function () {
      setLoading(true);
      const filtered = getFilteredCountries(countries, filters);
      const ordered = getOrderedCountries(filtered, order);
      dispatch(setCountriesToView(ordered));
      setLoading(false);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [filters, order]
  );

  return { countries: countriesToView, error, loading };
}
