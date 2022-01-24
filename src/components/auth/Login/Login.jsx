import React, { useState, useEffect } from "react";
import LoginForm from "../LoginForm";
import { Link, Navigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "./Login.scss";

const Login = ({ login, errorMessage, isAuthenticated }) => {
  const [error, setError] = useState("");

  useEffect(() => {
    if (errorMessage !== "") {
      setError("Details do not match!");
    }
  }, [errorMessage]);

  const Login = ({ email, password }) => {
    login(email, password);
  };

  return (
    <div>
      {!isAuthenticated ? (
        <div className="login">
          <Link to="/" className="login__back-button login__back-button--top">
            <span>
              <FaArrowLeft />
            </span>{" "}
            back
          </Link>
          <LoginForm Login={Login} error={error} />
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </div>
  );
};

export default Login;
