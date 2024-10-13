import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Context } from "../../contexts/Context";

type Props = {
  children: JSX.Element;
};

const RequireAuth = ({ children }: Props) => {
  const { isAuthenticated } = useContext(Context);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default RequireAuth;
