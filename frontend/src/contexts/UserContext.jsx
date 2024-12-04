/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext } from "react"

const UserContext = createContext();
const useUserContext = () => useContext(UserContext);

export default function UserProvider({ userData, setUserData, children }) {
    return (
        <UserContext.Provider value={{ userData, setUserData }}>
            {children}
        </UserContext.Provider>
    )
};

export { UserContext, useUserContext }