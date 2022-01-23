import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated, auth_token, isLoading } = useSelector(
    ({ auth }) => auth
  );

  if (isLoading) {
    return <h2>Loading...</h2>;
  } else if (!isAuthenticated && auth_token == null) {
    return <Navigate replace to="/login" />;
  } else {
    return <Component {...rest} />;
  }
};

export default PrivateRoute;
