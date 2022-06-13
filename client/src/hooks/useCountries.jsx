import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setCountries } from "../redux/actions/countries";

export function useCountries() {
  //redux hooks
  const { countries, error, message } = useSelector((state) => state.countries);
  const dispatch = useDispatch();
  //component state

  useEffect(
    function () {
      if (countries.length === 0) {
        dispatch(setCountries());
      }
    },
    [countries.length, dispatch]
  );
  return { countries, error, message };
}
