const filteringCountries = (country = {}, filters = {}) => {
  let willBeFiltered = false;
  try {
    if (Object.keys(filters).length === 0) return true;
    for (let key in filters) {
      let matches = 0;
      filters[key].forEach((val) => {
        if (Array.isArray(country[key])) {
          matches += country[key].includes(val) ? 1 : 0;
        } else matches += country[key] === val ? 1 : 0;
      });
      if (matches === 0) {
        willBeFiltered = false;
        break;
      }
      willBeFiltered = true;
    }
    return willBeFiltered;
  } catch (e) {
    return willBeFiltered;
  }
};

const orderingCountries = (value) => {
  return function (countryA, countryB) {
    try {
      if (countryA[value] < countryB[value]) return -1;
      if (countryA[value] > countryB[value]) return 1;
      return 0;
    } catch (e) {
      return 0;
    }
  };
};

export function getFilteredCountries(countries = [], filters = {}) {
  if (Object.keys(filters).length === 0) return countries;
  const filteredCountries = countries.filter((country) =>
    filteringCountries(country, filters)
  );
  return { countries: filteredCountries };
}

export function getOrderedCountries(
  countries = [],
  options = { sortValue: "", ascendant: false }
) {
  const { sortValue, ascendant } = options;

  if (sortValue === "" && ascendant === false) return countries;
  const sortFunction = () => orderingCountries(sortValue);
  const orderedCountries = countries.sort(sortFunction);
  return {
    countries: ascendant ? orderedCountries.reverse() : orderedCountries,
  };
}
