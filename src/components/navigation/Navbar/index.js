import Navbar from "./Navbar";
import { connect } from "react-redux";
import { logout } from "../../../state/actions";

const mapStateToProps = ({ auth }) => {
  const { isAuthenticated, user } = auth;
  return {
    isAuthenticated,
    user,
  };
};

const mapActionsToProps = { logout };

export default connect(mapStateToProps, mapActionsToProps)(Navbar);
