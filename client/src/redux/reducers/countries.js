const initialState = {
  countries: [],
};

export function countriesReducer(state = initialState, action) {
  switch (action.type) {
    case "@countries/get":
      break;

    default:
      return { ...state };
  }
}
