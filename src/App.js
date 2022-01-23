import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { CustomRouter } from "./components/utils/CustomRouter";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Home from "./components/common/Home";
import Product from "./components/products/Product";
import { loadUser } from "./state/actions";
import Cart from "./components/cart/Cart";
import Favourites from "./components/common/Favourites";
import history from "./utils/history";
import PrivateRoute from "./components/utils/PrivateRoute";
import Checkout from "./components/cart/Checkout";
import Contact from "./components/contact/Contact";
import Navbar from "./components/navigation/Navbar";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  });

  return (
    <CustomRouter history={history}>
      <Routes>
        <Route exact path="/product/:id" element={<Product />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route
          exact
          path="/cart"
          element={<PrivateRoute component={Cart} />}
        ></Route>
        <Route exact path="/favourites" element={<Favourites />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </CustomRouter>
  );
}

export default App;
