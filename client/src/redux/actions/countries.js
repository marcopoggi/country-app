import { getAllCountries as countryService } from "../../services/countries";

export function setCountries() {
  return async function (dispatch) {
    const { response } = await countryService();
    return dispatch({
      type: "@countries/setCountries",
      payload: response,
    });
  };
}

export function setCountriesToView(countries = []) {
  return {
    type: "@countries/setView",
    payload: countries,
  };
}

export function setCountriesByFilters(filters) {
  return {
    type: "@countries/setFilter",
    payload: filters,
  };
}

export function setCountriesByOrder(order) {
  return {
    type: "@countries/setOrder",
    payload: order,
  };
}
