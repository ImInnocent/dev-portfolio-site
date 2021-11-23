import React, { useContext } from 'react';
import User from '../types/User';
import { useLocalStorage } from './LocalStorage';

let AuthContext = React.createContext<AuthContextType>(null!);

const { Provider, Consumer: AuthConsumer } = AuthContext;

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<User | null>(null);
  const storage = useLocalStorage();

  /**
   * 가입 신청 했을 때 실행
   * 
   * @param {string} username: 사용자 이름
   * @param {string} password: 비밀번호
   * @return {boolean} 가입 성공 여부
   */
  const signup = (username: string, password: string) => {
    if (username.length === 0) {
      return false;
    } else if (password.length === 0) {
      return false;
    }

    storage.addUser({ name: username, password });

    return true;
  };

  /**
   * 로그인 했을 때 실행
   * 
   * @param {string} username: 사용자 이름
   * @param {string} password: 비밀번호
   * @return {boolean} 로그인 성공 여부
   */
  const signin = (username: string, password: string): boolean => {
    const targetUser = storage.getUser(username);

    if (targetUser === null) {
      return false;
    } else if (targetUser.name !== username || targetUser.password !== password) {
      return false;
    }

    setUser(targetUser);

    return true;
  };

  /**
   * 로그아웃했을 때 실행
   */
  const signout = () => {
    setUser(null);
  };

  return (
    <Provider value={{ user, signin, signout, signup }}>
      {children}
    </Provider>
  );
}

export default AuthContext;
interface AuthContextType {
  user: User | null;
  signup: (username: string, password: string) => boolean;
  signin: (username: string, password: string) => boolean;
  signout: () => void;
};
export { AuthProvider, AuthConsumer };
export function useAuth() {
  return useContext(AuthContext);
}
