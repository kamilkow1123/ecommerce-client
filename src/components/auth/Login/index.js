import Login from "./Login";
import { login } from "../../../state/actions";
import { connect } from "react-redux";

const mapStateToProps = ({ auth }) => {
  const { isAuthenticated, error, user } = auth;
  return {
    isAuthenticated,
    errorMessage: error,
    user,
  };
};

const mapActionsToProps = {
  login,
};

export default connect(mapStateToProps, mapActionsToProps)(Login);
