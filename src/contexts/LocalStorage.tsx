import React, { useEffect, useContext } from 'react';
import User from '../types/User';

const KEY_USERS = 'users';

let LocalStorageContext = React.createContext<LocalStorageContextType>(null!);

const { Provider, Consumer: LocalStorageConsumer } = LocalStorageContext;

function LocalStorageProvider({ children }: { children: React.ReactNode }) {
  const [users, setUsers] = React.useState<{ [key: string]: User }>({});

  // 첫 실행 때 로컬 스토리지에서 정보 가져오기
  useEffect(() => {
    const localUsers = localStorage.getItem(KEY_USERS);

    if (localUsers !== null) {
      setUsers(JSON.parse(localUsers));
    }
  }, []);

  /**
   * 유저 추가
   * 
   * @param {User} user 추가할 유저
   */
  const addUser = (user: User) => {
    const newUsers = { ...users, [user.name]: user };
    
    setUsers(newUsers);
    localStorage.setItem(KEY_USERS, JSON.stringify(newUsers));
  }

  /**
   * 이름이 일치하는 유저를 반환
   * 
   * @param {string} key 가져올 유저의 이름
   * @returns {User | null} 유저가 있으면 User를, 없으면 null 반환
   */
  const getUser = (key: string): User | null => {
    if (users[key] === undefined) {
      return null;
    } else {
      return users[key];
    }
  }

  return (
    <Provider value={{ getUser, addUser }}>
      {children}
    </Provider>
  );
}

export default LocalStorageContext;
interface LocalStorageContextType {
  getUser: (key: string) => User | null;
  addUser: (user: User) => void;
};
export { LocalStorageProvider, LocalStorageConsumer };
export function useLocalStorage() {
  return useContext(LocalStorageContext);
}
