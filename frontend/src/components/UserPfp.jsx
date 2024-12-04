import { UserRound } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useLoginContext } from "../contexts/LoginContext";
import { useThemeContext } from "../contexts/ThemeContext";
import { useUserContext } from "../contexts/UserContext";

export default function UserPfp() {
    const [isMenu, setIsMenu] = useState(false);
    const navigate = useNavigate();
    const { handleLogout } = useLoginContext();
    const { isDark } = useThemeContext();
    const { userData } = useUserContext();

    const handleClick = () => {
        setIsMenu((prev) => !prev);
    };

    const handleOutsideClick = (e) => {
        if (!e.target.closest("#user-pfp-menu") && !e.target.closest("#user-pfp-btn")) {
            setIsMenu(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleOutsideClick);
        return () => document.removeEventListener("click", handleOutsideClick);
    }, []);

    return (
        <div className="relative">
            <button
                id="user-pfp-btn"
                className="m-0 relative rounded-full bg-white border border-gray-500 text-purple-700 h-10 w-10 flex justify-center items-center"
                onClick={handleClick}
                aria-expanded={isMenu}
                aria-controls="user-pfp-menu"
            >
                <UserRound size={25} />
            </button>

            {isMenu && (
                <ul
                    id="user-pfp-menu"
                    className={`absolute border ${isDark ? 'bg-dark-container text-white border-gray-700' : 'bg-neutral-100 text-gray-800 border-gray-400'} top-10 mt-3 right-5 h-fit px-2 py-3 w-56 rounded-md shadow-md`}
                >
                    <li className="bg-transparent px-3 font-semibold text-lg">{userData.name}</li>
                    <hr className="border-gray-300 mx-3 my-2" />
                    <li className={`bg-transparent px-3 py-2 ${isDark ? 'hover:bg-dark-background/50' : 'hover:bg-purple-200'} rounded-md cursor-pointer`} onClick={() => navigate('/dashboard')}>Dashboard</li>
                    <li className={`bg-transparent px-3 py-2 ${isDark ? 'hover:bg-dark-background/50' : 'hover:bg-purple-200'} rounded-md cursor-pointer`} onClick={() => navigate('/settings')}>Settings</li>
                    <li className={`bg-transparent px-3 py-2 ${isDark ? 'hover:bg-dark-background/50' : 'hover:bg-purple-200'} rounded-md cursor-pointer`} onClick={handleLogout}>Logout</li>
                </ul>
            )}
        </div>
    );
}