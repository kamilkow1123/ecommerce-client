import { fetchProducts, fetchProduct } from "./product";
import { loadUser, login, logout, register } from "./auth";
import {
  fetchCartProducts,
  addToCart,
  deleteFromCart,
  createOrder,
} from "./cart";
import { addProductToFav, removeProductFromFav } from "./favorites";

export {
  fetchProducts,
  fetchProduct,
  loadUser,
  login,
  logout,
  register,
  fetchCartProducts,
  addToCart,
  deleteFromCart,
  createOrder,
  addProductToFav,
  removeProductFromFav,
};
