const initialState = {
  details: [],
  error: { state: false, msg: "" },
};

export function detailsReducer(state = initialState, action) {
  switch (action.type) {
    case "@details/setDetail":
      const response = action.payload;
      if (response?.error) {
        return { ...state, error: { state: true, msg: response.error } };
      }
      return {
        ...state,
        details: [...state.details, response],
        error: { state: false, msg: "" },
      };
    default:
      return { ...state };
  }
}
