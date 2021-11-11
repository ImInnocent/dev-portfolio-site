import React, { useState, useContext } from 'react';

let AuthContext = React.createContext<AuthContextType>(null!);

const { Provider, Consumer: AuthConsumer } = AuthContext;

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<boolean>(false);

  /**
   * 가입 신청 했을 때 실행
   */
  const signup = (username: string, password: string) => {
    if (username.length === 0) {
      return false;
    } else if (password.length === 0) {
      return false;
    }

    return true;
  };

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
    <AuthContext.Provider value={{ user, signin, signout, signup }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
interface AuthContextType {
  user: boolean;
  signup: (username: string, password: string) => boolean;
  signin: () => void;
  signout: () => void;
};
export { AuthProvider, AuthConsumer };
export function useAuth() {
  return useContext(AuthContext);
}
