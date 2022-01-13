import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ isAuthenticated, user, logout }) => {
  console.log("isAuthenticated", isAuthenticated);
  console.log("user", user);
  return (
    <nav>
      <Link to="/">Home</Link>
      {!isAuthenticated ? (
        <Link className="nav__link nav__link--login" to="/login">
          Login
        </Link>
      ) : (
        <ul className="nav__menu">
          <li>
            <button className="nav__link--logout" onClick={logout}>
              Logout
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
