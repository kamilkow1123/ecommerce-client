import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
//action creators
import { logout } from "../../../state/actions";
//styles
import "./Navbar.scss";

const Navbar = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(({ auth }) => auth.isAuthenticated);
  return (
    <nav className="nav">
      <div className="nav__wrapper">
        <Link to="/" className="nav__item">
          Home
        </Link>

        <div className="nav__container">
          <Link to="/contact" className="nav__item">
            Contact
          </Link>

          <Link to="/favourites" className="nav__item">
            Favourites
          </Link>

          {!isAuthenticated ? (
            <Link className="nav__item" to="/login">
              Login
            </Link>
          ) : (
            <button className="nav__item" onClick={() => dispatch(logout())}>
              Logout
            </button>
          )}

          <Link to="/cart" className="nav__item">
            <FaShoppingCart />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
