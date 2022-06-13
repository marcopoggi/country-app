import { useRef, useState } from "react";

export function Searcher() {
  const [countryToSearch, setCountryToSearch] = useState("");
  const searchInput = useRef(null);

  const handleInput = (e) => {
    let value = e.target.value;
    setCountryToSearch(value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <form>
      <input
        type="text"
        onChange={handleInput}
        placeholder="Example: Argentina"
        ref={searchInput}
      />
      <button type="button">
        <img src={null} alt="preferences" />
      </button>
      <button type="submit" onClick={handleSearch}>
        <img src={null} alt="search" />
      </button>
    </form>
  );
}
