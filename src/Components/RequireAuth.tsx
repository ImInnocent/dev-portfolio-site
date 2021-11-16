import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from '../Contexts/Auth';

/**
 * 유저 인증이 필요한 컴포넌트를 감쌀 때 사용.
 * 인증이 안 된 상태라면 /login 페이지로 리다이렉트
 * 
 * @param props 
 * @returns {JSX.Element}
 */
export default function RequireAuth({ children }: { children: JSX.Element }) {
  let auth = useAuth();
  let location = useLocation();

  if (auth.user === null) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
}

export function withRequireAuth(element: JSX.Element): JSX.Element {
  return <RequireAuth>{element}</RequireAuth>
}
