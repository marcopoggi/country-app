const LIMIT = 10;

const initialState = {
  countries: [],
  error: false,
  message: "",
};

export function countriesReducer(state = initialState, action) {
  switch (action.type) {
    case "@countries/setCountries":
      const { response, error, message } = action.payload;
      if (!response) return { ...state, error, message };
      return {
        ...state,
        countries: [...response],
        totalPages: Math.ceil(response.length / LIMIT),
      };
    default:
      return { ...state };
  }
}
