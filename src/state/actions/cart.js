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

export const createOrder = (discountCode) => async (dispatch, getState) => {
  //Request body
  let discount_code = discountCode;
  const { config, body } = formConfig(getState, { discount_code });
  // const body = JSON.stringify({ discount_code: discountCode });
  try {
    const response = await resultsAPI.post(
      "order/create/",
      discountCode ? body : null,
      config
    );

    // console.log("createOrder", response?.data);
    dispatch({
      type: CREATE_ORDER_SUCCESS,
      payload: response?.data,
    });

    // console.log("history", history);
    history.replace("/checkout");
  } catch (err) {
    console.log(err?.response?.data);
    dispatch({
      type: CREATE_ORDER_ERROR,
    });
    alert(`ERROR WHILE CREATING ORDER\n${err?.response?.data}`);
  }
};

export const formConfig = (getState, formValues) => {
  //get token from state
  const token = getState().auth.auth_token;

  //headers
  const config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };

  //if token, add to headers config
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }

  let body = [];
  for (let property in formValues) {
    let encodedKey = encodeURIComponent(property);
    let encodedValue = encodeURIComponent(formValues[property]);
    body.push(encodedKey + "=" + encodedValue);
  }
  body = body.join("&");

  return { config, body };
};
