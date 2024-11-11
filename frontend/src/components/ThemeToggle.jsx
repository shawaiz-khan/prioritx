import { Moon, Sun } from "lucide-react";
import { useThemeContext } from "../contexts/ThemeContext";

export default function ThemeToggle() {
    const { isDark, toggleMode } = useThemeContext();

    return (
        <div className="m-0">
            <button onClick={toggleMode} className="bg-purple-600 border-2 shadow-md border-purple-600 py-2 px-3 rounded-lg text-white hover:bg-purple-700 hover:border-purple-700 flex justify-center items-center">
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
        </div>
    )
}
