import { ADD_PRODUCT_TO_FAV, REMOVE_PRODUCT_FROM_FAV } from "./types";

export const addProductToFav = (id) => (dispatch) => {
  dispatch({ type: ADD_PRODUCT_TO_FAV, payload: id });
};

export const removeProductFromFav = (id) => (dispatch) => {
  dispatch({ type: REMOVE_PRODUCT_FROM_FAV, payload: id });
};
