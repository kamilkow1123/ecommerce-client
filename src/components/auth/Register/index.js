import Register from "./Register";
import { register } from "../../../state/actions";
import { connect } from "react-redux";

const mapStateToProps = ({ auth }) => {
  const { isAuthenticated, error } = auth;
  return {
    isAuthenticated,
    errorMessage: error,
  };
};

const mapActionsToProps = { register };

export default connect(mapStateToProps, mapActionsToProps)(Register);
