const initialState = {
  details: [],
};

export function detailsReducer(state = initialState, action) {
  switch (action.type) {
    case "@details/add":
      break;

    default:
      return { ...state };
  }
}
