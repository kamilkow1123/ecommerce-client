import resultsAPI from "../../api/resultsAPI";
import { FETCH_PRODUCTS, FETCH_PRODUCT } from "./types";

export const fetchProducts = () => async (dispatch) => {
  try {
    const response = await resultsAPI.get("product/get-all/");

    dispatch({ type: FETCH_PRODUCTS, payload: response.data });
  } catch (err) {
    console.error(err);
  }
};

export const fetchProduct = (id) => async (dispatch) => {
  try {
    const response = await resultsAPI.get(`product/${id}/get/`);

    dispatch({ type: FETCH_PRODUCT, payload: response.data });
  } catch (err) {
    console.error(err);
  }
};
