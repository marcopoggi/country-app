import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setCountriesByFilters } from "../../redux/actions/countries";

export function Searcher() {
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
    <form>
      <input
        type="text"
        onChange={handleInput}
        placeholder="Example: Argentina"
        ref={searchInput}
      />
    </form>
  );
}
