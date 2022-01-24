import React, { useState, useEffect } from "react";
import RegisterForm from "../RegisterForm";
import { Link, Navigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "./Register.scss";

const Register = ({ errorMessage, isAuthenticated, register }) => {
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (errorMessage !== "") {
      let tempErrors = {};

      for (let newError in errorMessage) {
        if (newError === "non_field_errors") {
          tempErrors["re_password"] = errorMessage[newError];
        } else {
          tempErrors[newError] = errorMessage[newError];
        }
      }
      setErrors(tempErrors);
    }
  }, [errorMessage]);

  const Register = (details) => {
    register(details);
  };

  return (
    <div>
      {!isAuthenticated ? (
        <div className="register">
          <Link to="/" className="register__back-button">
            <span>
              <FaArrowLeft />
            </span>{" "}
            back
          </Link>
          <RegisterForm Register={Register} errors={errors} />
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </div>
  );
};
export default Register;
