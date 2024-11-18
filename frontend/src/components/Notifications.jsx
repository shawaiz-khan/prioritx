import { Bell } from 'lucide-react';
import { useEffect, useState } from 'react';
import notifications from '../data/SampleNotifications';
import { useThemeContext } from '../contexts/ThemeContext';

export default function Notifications() {
    const [isOpen, setIsOpen] = useState(false);
    const { isDark } = useThemeContext();

    const handleClick = () => {
        setIsOpen((prev) => !prev);
    };

    const handleOutsideClick = (e) => {
        if (!e.target.closest("#notification-menu") && !e.target.closest("#notification-menu-btn")) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleOutsideClick);
        return () => document.removeEventListener("click", handleOutsideClick);
    }, []);

    return (
        <div className="relative">
            <button
                id="notification-menu-btn"
                className="bg-purple-600 font-sans border-2 shadow-md border-purple-600 py-2 px-3 rounded-lg text-white hover:bg-purple-700 hover:border-purple-700 flex justify-center items-center"
                onClick={handleClick}
                aria-expanded={isOpen}
                aria-controls="notification-menu"
            >
                <Bell size={20} />
            </button>

            {isOpen && (
                <ul
                    id="notification-menu"
                    className={`absolute border ${isDark ? 'bg-dark-container text-white border-gray-700' : 'bg-neutral-100 text-gray-800 border-gray-400'} top-10 right-0 mt-1 h-fit px-2 py-3 w-80 rounded-md shadow-md overflow-y-scroll max-h-64`}
                >
                    {notifications.map((notification) => {
                        const { id, title, description } = notification;
                        return (
                            <li
                                key={id}
                                className={`bg-transparent px-3 py-2 ${isDark ? 'hover:bg-dark-background/50' : 'hover:bg-purple-200'} rounded-md cursor-pointer`}
                            >
                                <div className="flex justify-between items-center">
                                    <p className="font-semibold">{title}</p>
                                </div>
                                <p className="text-sm">{description}</p>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
}
