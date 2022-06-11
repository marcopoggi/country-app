import searchIcon from "../../assets/img/search.svg";
import preferencesIcon from "../../assets/img/preferences.svg";
import {
  searcher_container,
  searcher_preferences,
  searcher_search,
  icons,
} from "./Searcher.module.css";
import { useRef, useState } from "react";

export function Searcher() {
  const searchInput = useRef(null);
  const [countryToSearch, setCountryToSearch] = useState("");

  const handleInput = (e) => {
    let value = e.target.value;
    setCountryToSearch(value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    searchInput.current.value = "";
    const trimValue = countryToSearch.trim();
    if (trimValue !== "") console.log("Buscar -> " + trimValue);
  };

  return (
    <form className={searcher_container}>
      <input
        type="text"
        onChange={handleInput}
        placeholder="Example: Argentina"
        ref={searchInput}
      />
      <button type="button" className={searcher_preferences}>
        <img src={preferencesIcon} alt="preference-icon" className={icons} />
      </button>
      <button type="submit" className={searcher_search} onClick={handleSearch}>
        <img src={searchIcon} alt="search-icon" className={icons} />
      </button>
    </form>
  );
}
