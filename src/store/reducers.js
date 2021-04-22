const initialState = {
  categories: [],
  meals: [],
  recipe: [],
  loading: false,
  error: null,
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "SET_LOADING":
      return { ...state, loading: payload, error: null };
    case "SET_ERROR":
      return { ...state, error: payload, loading: false };
    case "FETCH_CATEGORIES":
      return { ...state, categories: payload.categories };
    case "FETCH_MEALS":
      return { ...state, meals: payload.meals };
    case "FETCH_RECIPE":
      return { ...state, recipe: payload.recipe };
    default:
      return state;
  }
}
