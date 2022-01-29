import ContactForm from "../ContactForm";
import Navbar from "../../navigation/Navbar";
import emailjs from "emailjs-com";
import "./Contact.scss";

const Contact = () => {
  const sendMessage = async (details, onSuccess) => {
    try {
      await emailjs.sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        details,
        process.env.REACT_APP_USER_ID
      );
      onSuccess();
      alert("Message sent successfully!");
    } catch (err) {
      console.log("err", err);
      alert("Error occured! Try again");
    }
  };

  return (
    <div className="contact">
      <Navbar />
      <div className="contact__content" id="contact">
        <div className="contact__container">
          <h1>Contact</h1>
          <p>
            Please contact us if you want to cancel your order or have any
            questions!
          </p>

          <div className="contact__wrapper">
            <ContactForm sendMessage={sendMessage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
