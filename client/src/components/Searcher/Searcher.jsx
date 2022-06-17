import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setCountriesByFilters } from "../../redux/actions/countries";
//styles
import {
  searcher,
  searcher_input,
  searcher_prefs,
  searcher_functions,
} from "./Searcher.module.css";
import preferences_icon from "../../assets/img/preference.png";

export function Searcher({ handlePreferences }) {
  const disptach = useDispatch();
  const [countryToSearch, setCountryToSearch] = useState("");
  const searchInput = useRef(null);

  const handleInput = (e) => {
    let value = e.target.value;
    setCountryToSearch(value.toLowerCase());
  };

  useEffect(
    function () {
      disptach(setCountriesByFilters({ name: countryToSearch }));
    },
    [countryToSearch, disptach]
  );

  return (
    <form onSubmit={(e) => e.preventDefault()} className={searcher}>
      <div className={searcher_functions}>
        <input
          type="text"
          onChange={handleInput}
          placeholder="Example: Argentina"
          ref={searchInput}
          className={searcher_input}
        />
        <button className={searcher_prefs} onClick={handlePreferences}>
          <img src={preferences_icon} alt="preferences" />
        </button>
      </div>
    </form>
  );
}
