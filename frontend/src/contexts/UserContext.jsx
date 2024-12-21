/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from 'react';

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

  const handleSetUserData = (data) => {
    setUserData(data);
    if (data) {
      localStorage.setItem('userData', JSON.stringify(data));
    } else {
      localStorage.removeItem('userData');
    }
  };

  return (
    <UserContext.Provider value={{ userData, setUserData: handleSetUserData }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, useUserContext };