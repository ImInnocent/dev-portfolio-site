import React, { useEffect, useContext } from 'react';
import User from '../Types/User';

const KEY_USERS = "users";

let LocalStorageContext = React.createContext<LocalStorageContextType>(null!);

const { Provider, Consumer: LocalStorageConsumer } = LocalStorageContext;

function LocalStorageProvider({ children }: { children: React.ReactNode }) {
  const [users, setUsers] = React.useState<{ [key: string]: User }>({});

  useEffect(() => {
    const localUsers = localStorage.getItem(KEY_USERS);

    if (localUsers !== null) {
      setUsers(JSON.parse(localUsers));
    }
  }, []);

  const addUser = (user: User) => {
    const newUsers = { ...users, [user.name]: user };
    
    setUsers(newUsers);
    localStorage.setItem(KEY_USERS, JSON.stringify(newUsers));
  }

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