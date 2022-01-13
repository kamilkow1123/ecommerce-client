import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Home from "./components/Home";
import Product from "./components/products/Product";
import { loadUser } from "./state/actions";

function App({ loadUser }) {
  useEffect(() => {
    loadUser();
  });
  return (
    <Router>
      <Routes>
        <Route exact path="/product/:id" element={<Product />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default connect(null, { loadUser })(App);
