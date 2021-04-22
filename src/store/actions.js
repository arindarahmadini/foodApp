function setLoading(payload) {
  return { type: "SET_LOADING", payload: payload };
}

function setError(payload) {
  return { type: "SET_ERROR", payload: payload };
}

export function fetchAllCategories(url) {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await fetch(url);
      const data = await response.json();
      dispatch({
        type: "FETCH_CATEGORIES",
        payload: { categories: data.categories },
      });
      dispatch(setLoading(false));
    } catch (err) {
      dispatch(setError(err));
    }
  };
}

export function fetchDataMeals(url) {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await fetch(url);
      const data = await response.json();
      dispatch({
        type: "FETCH_MEALS",
        payload: { meals: data.meals },
      });
      dispatch(setLoading(false));
    } catch (err) {
      dispatch(setError(err));
    }
  };
}

export function fetchDataRecipe(url) {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await fetch(url);
      const data = await response.json();
      dispatch({
        type: "FETCH_RECIPE",
        payload: { recipe: data.meals[0] },
      });
      dispatch(setLoading(false));
    } catch (err) {
      dispatch(setError(err));
    }
  };
}
