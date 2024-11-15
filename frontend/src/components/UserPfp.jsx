import { UserRound } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useLoginContext } from "../contexts/LoginContext";

export default function UserPfp() {
    const [isMenu, setIsMenu] = useState(false);
    const navigate = useNavigate();
    const { handleLogout } = useLoginContext();

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
                    className="absolute font-sans bg-neutral-100 border border-gray-400 top-10 mt-3 right-5 h-fit px-2 py-3 w-56 rounded-md shadow-md"
                >
                    <li className="bg-transparent px-3 text-purple-700 font-bold text-lg">Username</li>
                    <hr className="border-gray-300 mx-3 my-2" />
                    <li className="bg-transparent px-3 py-2 hover:bg-purple-200 rounded-md cursor-pointer" onClick={() => navigate('/profile')}>Profile</li>
                    <li className="bg-transparent px-3 py-2 hover:bg-purple-200 rounded-md cursor-pointer" onClick={() => navigate('/settings')}>Settings</li>
                    <li className="bg-transparent px-3 py-2 hover:bg-purple-200 rounded-md cursor-pointer" onClick={() => navigate('/dashboard/support')}>Support</li>
                    <li className="bg-transparent px-3 py-2 hover:bg-purple-200 rounded-md cursor-pointer" onClick={handleLogout}>Logout</li>
                </ul>
            )}
        </div>
    );
}