import {
  FETCH_CART_PRODUCTS,
  ADD_TO_CART,
  DELETE_FROM_CART,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_ERROR,
} from "./types";
import { tokenConfig } from "./auth";
import resultsAPI from "../../api/resultsAPI";
import history from "../../utils/history";

export const fetchCartProducts = () => async (dispatch, getState) => {
  try {
    const response = await resultsAPI.get("cart/get/", tokenConfig(getState));

    // console.log(response.data);
    dispatch({
      type: FETCH_CART_PRODUCTS,
      payload: response.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const addToCart = (id) => async (dispatch, getState) => {
  try {
    const response = await resultsAPI.post(
      `cart/${id}/add/`,
      null,
      tokenConfig(getState)
    );

    // console.log(response);

    dispatch({
      type: ADD_TO_CART,
      payload: response.data,
    });
    alert("ADDED TO CART");
  } catch (err) {
    console.log(err?.response?.data);
    alert(`ERROR WHILE ADDING TO CART\n${err?.response?.data}`);
  }
};

export const deleteFromCart = (id) => async (dispatch, getState) => {
  try {
    const response = await resultsAPI.post(
      `cart/${id}/remove/`,
      null,
      tokenConfig(getState)
    );

    // console.log(response);

    dispatch({
      type: DELETE_FROM_CART,
      payload: response?.data,
    });
  } catch (err) {
    console.log(err?.response?.data);
    alert(`ERROR WHILE DELETING FROM CART\n${err?.response?.data}`);
  }
};

export const createOrder = () => async (dispatch, getState) => {
  try {
    const response = await resultsAPI.post(
      "order/create/",
      null,
      tokenConfig(getState)
    );

    console.log("createOrder", response?.data);
    dispatch({
      type: CREATE_ORDER_SUCCESS,
      payload: response?.data,
    });

    console.log("history", history);
    history.replace("/checkout");
  } catch (err) {
    console.log(err?.response?.data);
    dispatch({
      type: CREATE_ORDER_ERROR,
    });
    alert(`ERROR WHILE CREATING ORDER\n${err?.response?.data}`);
  }
};
