import { getAllCountries as countryService } from "../../services/countries";

export function setCountries() {
  return async function (dispatch) {
    const { response, error, message } = await countryService();
    return dispatch({
      type: "@countries/setCountries",
      payload: { response, error, message },
    });
  };
}
