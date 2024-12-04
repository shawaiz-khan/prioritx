import { useState } from "react";
import { useLoginContext } from "../contexts/LoginContext";
import { useThemeContext } from "../contexts/ThemeContext";
import axios from "axios";

export default function Test() {
    const [deleted, setDeleted] = useState(false);

    const { isLoggedIn, toggleLogin } = useLoginContext();
    const { isDark } = useThemeContext();

    const deleteAllUsers = async () => {
        try {
            const response = await axios.post('http://localhost:3000/api/users/delete-all');
            setDeleted(true);
            console.log('Deleted all users', response);
        } catch (err) {
            setDeleted(false);
            console.log(err.message);
        }
    }

    return (
        <div className={`flex flex-wrap items-center justify-center gap-5 min-h-screen ${isDark ? 'bg-dark-background' : 'bg-light-background'}`}>
            <div className={`p-8 flex flex-col items-center justify-center rounded-lg shadow-lg w-56 h-56 ${isDark ? 'bg-dark-container' : 'bg-light-container'}`}>
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
            <div className={`p-8 flex flex-col items-center justify-center rounded-lg shadow-lg w-56 h-56 ${isDark ? 'bg-dark-container' : 'bg-light-container'}`}>
                <h1 className={`text-3xl font-semibold text-center mb-6 ${isDark ? 'text-neutral-50' : 'text-gray-900'}`}>
                    {deleted ? 'Deleted' : 'Not Deleted'}
                </h1>
                <button
                    onClick={deleteAllUsers}
                    className="w-full py-2 px-4 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition duration-300"
                >
                    Delete DB Users
                </button>
            </div>
            <div className={`p-8 flex flex-col items-center justify-center rounded-lg shadow-lg w-56 h-56 ${isDark ? 'bg-dark-container' : 'bg-light-container'}`}>
                <h1 className={`text-3xl font-semibold text-center mb-6 ${isDark ? 'text-neutral-50' : 'text-gray-900'}`}>
                    I am a Username
                </h1>
            </div>
        </div>
    );
}