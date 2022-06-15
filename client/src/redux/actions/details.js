import { getCountryDetail } from "../../services/countries";

export function setDetail(nameOrId) {
  return (dispatch) => {
    getCountryDetail(nameOrId).then(({ response }) => {
      return dispatch({
        type: "@details/setDetail",
        payload: response,
      });
    });
  };
}
