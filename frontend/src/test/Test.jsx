import { useLoginContext } from "../contexts/LoginContext";
import { useThemeContext } from "../contexts/ThemeContext";

export default function Test() {
    const { isLoggedIn, toggleLogin } = useLoginContext();
    const { isDark } = useThemeContext();

    return (
        <div className={`flex items-center justify-center min-h-screen ${isDark ? 'bg-dark-background' : 'bg-light-background'}`}>
            <div className={`p-8 rounded-lg shadow-lg max-w-sm w-full ${isDark ? 'bg-dark-container' : 'bg-light-container'}`}>
                <h1 className={`text-3xl font-semibold text-center mb-6 ${isDark ? 'text-neutral-50' : 'text-gray-900'}`}>
                    {isLoggedIn ? 'You are Logged In' : 'You are Logged Out'}
                </h1>
                <button
                    onClick={toggleLogin}
                    className="w-full py-2 px-4 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition duration-300"
                >
                    Click Me
                </button>
            </div>
        </div>
    );
}