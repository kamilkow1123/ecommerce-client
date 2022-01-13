import { FETCH_PRODUCTS, FETCH_PRODUCT } from "../actions/types";

const INITIAL_STATE = {
  listOfProducts: [],
  currentProduct: null,
};

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        listOfProducts: action.payload,
      };
    case FETCH_PRODUCT:
      return {
        ...state,
        currentProduct: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
