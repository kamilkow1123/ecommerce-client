import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginForm.scss";

function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({ email: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();

    Login(details);
  };

  return (
    <form onSubmit={submitHandler} className="login-form">
      <h2>Login</h2>
      {error && <div className="login-form__error-login">{error}</div>}
      <div className="login-form__group">
        <label className="login-form__label" htmlFor="form-email">
          E-mail
        </label>
        <input
          className="login-form__input"
          type="text"
          name="email"
          id="email"
          onChange={(e) => setDetails({ ...details, email: e.target.value })}
          value={details.email}
        />
      </div>
      <div className="login-form__group">
        <label className="login-form__label" htmlFor="password">
          Password:
        </label>
        <input
          className="login-form__input"
          type="password"
          name="password"
          id="password"
          onChange={(e) =>
            setDetails({
              ...details,
              password: e.target.value,
            })
          }
          value={details.password}
        />
      </div>
      <input
        className="login-form__submit-button"
        type="submit"
        value="LOGIN"
      />
      <p>
        Don't have an account?
        <Link className="login-form__register-button" to="/register">
          Register
        </Link>
      </p>
    </form>
  );
}

export default LoginForm;
