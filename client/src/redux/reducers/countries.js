const initialState = {
  countries: [],
  countriesToView: [],
  error: { state: false, msg: "" },
  filters: {},
  order: { sortBy: "name", descendent: false },
};

export function countriesReducer(state = initialState, action) {
  switch (action.type) {
    case "@countries/setCountries":
      const response = action.payload;
      if (response?.error)
        return { ...state, error: { state: true, msg: response.error } };
      return {
        ...state,
        countries: [...response],
        error: { state: false, msg: "" },
      };
    case "@countries/setView":
      return { ...state, countriesToView: action.payload };
    case "@countries/setFilter":
      return { ...state, filters: { ...state.filters, ...action.payload } };
    case "@countries/setOrder":
      return { ...state, order: { ...state.order, ...action.payload } };
    default:
      return { ...state };
  }
}
