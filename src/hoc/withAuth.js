import { Redirect } from "react-router";
import useAuth from "../hooks/useAuth";

const withAuth = (Component) => (props) => {
  const { user } = useAuth();

  if (!user) return <Redirect to="/" />;

  return <Component {...props} />;
};

export default withAuth;
