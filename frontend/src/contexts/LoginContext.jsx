/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginContext = createContext();

const useLoginContext = () => {
    return useContext(LoginContext);
};

function LoginProvider({ children }) {
    const navigate = useNavigate();

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedLoginState = localStorage.getItem('isLoggedIn') === 'true';
        setIsLoggedIn(storedLoginState);
    }, []);

    const toggleLogin = () => {
        setIsLoggedIn((prev) => !prev);
        localStorage.setItem('isLoggedIn', !isLoggedIn);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.setItem('isLoggedIn', false);
        navigate('/');
    };

    return (
        <LoginContext.Provider value={{ isLoggedIn, toggleLogin, handleLogout }}>
            {children}
        </LoginContext.Provider>
    );
}

export { LoginProvider, useLoginContext };