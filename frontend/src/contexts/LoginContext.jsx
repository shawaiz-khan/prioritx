/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginContext = createContext();
const useLoginContext = () => useContext(LoginContext);

function LoginProvider({ children }) {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    const toggleLogin = () => {
        setIsLoggedIn((prev) => !prev);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        navigate('/');
    }

    return (
        <LoginContext.Provider value={{ isLoggedIn, toggleLogin, handleLogout }}>
            {children}
        </LoginContext.Provider>
    );
}

export { LoginProvider, useLoginContext };