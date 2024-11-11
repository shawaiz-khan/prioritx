import { UserRound } from "lucide-react";
import { useState, useEffect } from "react";

export default function UserPfp() {
    const [isMenu, setIsMenu] = useState(false);

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
                className="m-0 relative rounded-full bg-white border-2 border-purple-500 text-purple-700 h-12 w-12 flex justify-center items-center"
                onClick={handleClick}
                aria-expanded={isMenu}
                aria-controls="user-pfp-menu"
            >
                <UserRound size={25} />
            </button>

            {isMenu && (
                <ul
                    id="user-pfp-menu"
                    className="absolute bg-neutral-100 border border-gray-400 top-10 mt-3 right-7 h-fit px-2 py-3 w-56 rounded-md shadow-md"
                >
                    <li className="bg-transparent px-3 text-purple-700 font-medium cursor-pointer text-lg">Username</li>
                    <hr className="border-gray-300 mx-3 my-2" />
                    <li className="bg-transparent px-3 py-2 hover:bg-purple-200 rounded-md cursor-pointer">Profile</li>
                    <li className="bg-transparent px-3 py-2 hover:bg-purple-200 rounded-md cursor-pointer">Settings</li>
                    <li className="bg-transparent px-3 py-2 hover:bg-purple-200 rounded-md cursor-pointer">Support</li>
                    <li className="bg-transparent px-3 py-2 hover:bg-purple-200 rounded-md cursor-pointer">Logout</li>
                </ul>
            )}
        </div>
    );
}