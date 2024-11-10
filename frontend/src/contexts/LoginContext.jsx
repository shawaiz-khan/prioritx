/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext } from 'react';

const LoginContext = createContext();
const useLoginContext = () => useContext(LoginContext);

function LoginProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const toggleLogin = () => {
        setIsLoggedIn((prev) => !prev);
    };

    return (
        <LoginContext.Provider value={{ isLoggedIn, toggleLogin }}>
            {children}
        </LoginContext.Provider>
    );
}

export { LoginProvider, useLoginContext };