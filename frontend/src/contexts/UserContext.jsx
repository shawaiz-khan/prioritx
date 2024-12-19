/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext();
const useUserContext = () => useContext(UserContext);

export default function UserProvider({ children }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedUserState = localStorage.getItem('userData');
    if (storedUserState) {
      try {
        const parsedUserData = JSON.parse(storedUserState);
        setUserData(parsedUserData);
      } catch (error) {
        console.error('Error parsing user data from localStorage:', error);
        setUserData(null);
      }
    }
  }, []);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, useUserContext };
