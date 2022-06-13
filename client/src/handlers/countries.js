const AVAILABLE_FILTERS = ["continent", "name", "activities"];

const validFilters = (filters) => {
  for (let key in filters) {
    if (!AVAILABLE_FILTERS.includes(key)) return false;
  }
  return true;
};

const filteringCountries = (country = {}, filters = {}) => {
  let FILTERED = false;
  let matches = 0;

  for (let key in filters) {
    switch (key) {
      case "name":
        let name = filters[key];
        if (name === "" || country[key].startsWith(name)) matches++;
        break;
      case "continent":
        let { continent } = filters;
        if (continent.includes(country[key])) matches++;
        break;
      case "activities":
        let { activities } = filters;
        for (let act of activities) {
          if (country[key].includes(act)) {
            matches++;
            break;
          }
        }
        break;
      default:
        break;
    }
  }
  if (matches === Object.keys(filters).length) FILTERED = true;
  return FILTERED;
};

const orderingCountries = (value) => {
  return function (countryA, countryB) {
    if (countryA[value] < countryB[value]) return -1;
    if (countryA[value] > countryB[value]) return 1;
    return 0;
  };
};

export function getFilteredCountries(countries = [], filters = {}) {
  if (Object.keys(filters).length === 0 || !validFilters(filters))
    return countries;
  return countries.filter((country) => filteringCountries(country, filters));
}

export function getOrderedCountries(
  countries = [],
  options = { sortBy: "", ascendant: false }
) {
  const { sortBy, ascendant } = options;

  if (sortBy === "" && ascendant === false) return countries;
  const sortFunction = () => orderingCountries(sortBy);
  const orderedCountries = countries.sort(sortFunction);
  return ascendant ? orderedCountries.reverse() : orderedCountries;
}
