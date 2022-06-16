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
        else if (continent.length === 0) matches++;
        break;
      case "activities":
        let { activities } = filters;
        if (activities.length === 0) {
          matches++;
          break;
        }
        for (let act of activities) {
          if (country[key].some(({ name }) => name === act)) {
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

function orderingCountries(sortBy = "name") {
  return function (a, b) {
    if (a[sortBy] > b[sortBy]) return 1;
    if (a[sortBy] < b[sortBy]) return -1;
    return 0;
  };
}

export function getFilteredCountries(countries = [], filters = {}) {
  if (Object.keys(filters).length === 0 || !validFilters(filters))
    return countries;
  return countries.filter((country) => filteringCountries(country, filters));
}

export function getOrderedCountries(
  countries = [],
  options = { sortBy: "name", descendent: false }
) {
  let { sortBy, descendent } = options;
  if (sortBy === "") sortBy = "name";
  const orderedCountries = [...countries].sort(orderingCountries(sortBy));
  return descendent ? orderedCountries.reverse() : orderedCountries;
}
