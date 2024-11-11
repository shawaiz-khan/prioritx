import { Moon, Sun } from "lucide-react";
import { useThemeContext } from "../contexts/ThemeContext";

export default function ThemeToggle() {
    const { isDark, toggleMode } = useThemeContext();

    return (
        <div className="m-0">
            <button onClick={toggleMode} className="bg-purple-primary border-2 shadow-md border-purple-primary py-2 px-3 rounded-lg text-white hover:bg-purple-secondary hover:border-purple-secondary flex justify-center items-center">
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
        </div>
    )
}
