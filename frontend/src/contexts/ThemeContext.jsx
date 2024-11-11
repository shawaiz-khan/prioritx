/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react"

const ThemeContext = createContext();
const useThemeContext = () => useContext(ThemeContext);

function ThemeProvider({ children }) {
    const [isDark, setIsDark] = useState(false);

    const toggleMode = () => {
        setIsDark((prev) => !prev);
    }

    return (
        <ThemeContext.Provider value={{ isDark, toggleMode }}>
            {children}
        </ThemeContext.Provider>
    )
}

export { useThemeContext, ThemeProvider }