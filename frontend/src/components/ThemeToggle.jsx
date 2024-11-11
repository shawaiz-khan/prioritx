import { Moon, Sun } from "lucide-react";
import { useThemeContext } from "../contexts/ThemeContext";

export default function ThemeToggle() {
    const { isDark, toggleMode } = useThemeContext();

    return (
        <div className="">
            <button onClick={toggleMode} className="text-purple-primary">
                {isDark ? <Sun /> : <Moon />}
            </button>
        </div>
    )
}
