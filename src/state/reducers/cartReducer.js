import {
  FETCH_CART_PRODUCTS,
  ADD_TO_CART,
  DELETE_FROM_CART,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_ERROR,
} from "../actions/types";

const INITIAL_STATE = {
  listOfCartProducts: [],
  totalCartPrice: 0,
  numOfCartProducts: 0,
  createdOrderSuccess: false,
  createdOrder: null,
  discountCode: null,
  orderNumber: null,
  status: "",
  totalOrderCost: 0,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_CART_PRODUCTS:
      return {
        ...state,
        listOfCartProducts: action.payload.products,
        totalCartPrice: action.payload.get_cart_total,
        numOfCartProducts: action.payload.get_products_quantity,
      };
    case ADD_TO_CART:
    case DELETE_FROM_CART:
      return {
        ...state,
        totalCartPrice: action.payload.get_cart_total,
        numOfCartProducts: action.payload.get_products_quantity,
      };
    case CREATE_ORDER_SUCCESS:
      return {
        ...state,
        listOfCartProducts: [],
        totalCartPrice: 0,
        numOfCartProducts: 0,
        createdOrderSuccess: true,
        createdOrder: action.payload.cart,
        discountCode: action.payload.new_discount,
        totalOrderCost: action.payload.total_cost_net,
        orderNumber: action.payload.order_number,
        status: action.payload.status,
      };
    case CREATE_ORDER_ERROR:
      return {
        ...state,
        createdOrderSuccess: false,
        createdOrder: null,
        discountCode: null,
        orderNumber: null,
        status: "",
        totalOrderCost: 0,
      };
    default:
      return state;
  }
};

export default cartReducer;
