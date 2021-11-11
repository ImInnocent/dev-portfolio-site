import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from '../Contexts/Auth';

export default function RequireAuth({ children }: { children: JSX.Element }) {
  let auth = useAuth();
  let location = useLocation();

  if (auth.user === null) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
}
