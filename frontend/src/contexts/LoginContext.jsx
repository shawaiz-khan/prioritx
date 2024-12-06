/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const LoginContext = createContext();

const useLoginContext = () => {
    return useContext(LoginContext);
};

function LoginProvider({ children }) {
    const navigate = useNavigate();

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedLoginState = Cookies.get('isLoggedIn') === 'true';
        setIsLoggedIn(storedLoginState);
    }, []);

    const toggleLogin = () => {
        const newLoginState = !isLoggedIn;
        setIsLoggedIn(newLoginState);
        Cookies.set('isLoggedIn', newLoginState, { expires: 7, secure: true });
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        Cookies.remove('isLoggedIn');
        navigate('/');
    };

    return (
        <LoginContext.Provider value={{ isLoggedIn, toggleLogin, handleLogout }}>
            {children}
        </LoginContext.Provider>
    );
}

export { LoginProvider, useLoginContext };