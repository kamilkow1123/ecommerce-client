import React, { useState } from "react";
import "./ContactForm.scss";

const ContactForm = ({ sendMessage }) => {
  const [details, setDetails] = useState({
    email: "",
    orderId: "",
    message: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (details.email !== "" && details.message !== "") {
      sendMessage(e.target, onSuccess);
    } else {
      setError("Email and message are required");
    }
  };

  const onSuccess = () => {
    setDetails({
      email: "",
      orderId: "",
      message: "",
    });
    setError("");
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      {error && <p className="contact-form__error">{error}</p>}
      <div className="contact-form__wrapper">
        <div className="contact-form__group">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
          />
        </div>
        <div className="contact-form__group">
          <label htmlFor="orderId">Order ID (optional)</label>
          <input
            type="text"
            name="orderId"
            id="orderId"
            onChange={(e) =>
              setDetails({ ...details, orderId: e.target.value })
            }
            value={details.orderId}
          />
        </div>
      </div>
      <div className="contact-form__group">
        <label>Message</label>
        <textarea
          id="message"
          name="message"
          type="text"
          autoComplete="off"
          onChange={(e) => setDetails({ ...details, message: e.target.value })}
          value={details.message}
        />
      </div>
      <div className="contact-form__button-wrapper">
        <button type="submit" className="contact-form__submit-button">
          SEND
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
