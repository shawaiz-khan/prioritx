import { Bell } from 'lucide-react';
import { useEffect, useState } from 'react';
import notifications from '../constants/SampleNotifications';

export default function Notifications() {
    const [isOpen, setIsOpen] = useState(false);

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
                className="bg-purple-600 border-2 shadow-md border-purple-600 py-2 px-3 rounded-lg text-white hover:bg-purple-700 hover:border-purple-700 flex justify-center items-center"
                onClick={handleClick}
                aria-expanded={isOpen}
                aria-controls="notification-menu"
            >
                <Bell size={20} />
            </button>
            {isOpen && (
                <ul
                    id="notification-menu"
                    className="absolute bg-neutral-100 border border-gray-400 top-10 right-0 mt-1 h-fit px-2 py-3 w-80 rounded-md shadow-md overflow-y-scroll max-h-64"
                >
                    {notifications.map((notification) => {
                        const { id, title, description } = notification;
                        return (
                            <li
                                key={id}
                                className="bg-transparent px-3 py-2 hover:bg-purple-200 rounded-md cursor-pointer"
                            >
                                <div className="flex justify-between items-centers">
                                    <p className="font-medium">{title}</p>
                                </div>
                                <p className="text-sm text-gray-600">{description}</p>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
}