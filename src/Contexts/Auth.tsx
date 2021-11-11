import React, { useState, useContext } from 'react';

let AuthContext = React.createContext<AuthContextType>(null!);

const { Provider, Consumer: AuthConsumer } = AuthContext;

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<boolean>(false);

  /**
   * 로그인 했을 때 실행
   */
  const signin = () => {
    setUser(true);
  };

  /**
   * 로그아웃했을 때 실행
   */
  const signout = () => {
    setUser(false);
  };

  return (
    <AuthContext.Provider value={{ user, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
interface AuthContextType {
  user: boolean;
  signin: () => void;
  signout: () => void;
};
export { AuthProvider, AuthConsumer };
export function useAuth() {
  return useContext(AuthContext);
}
