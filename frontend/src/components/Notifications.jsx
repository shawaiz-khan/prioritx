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
                className="bg-purple-primary border-2 shadow-md border-purple-primary py-2 px-3 rounded-lg text-white hover:bg-purple-secondary hover:border-purple-secondary flex justify-center items-center"
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
                        const { id, title, description, time } = notification;
                        return (
                            <li
                                key={id}
                                className="bg-transparent px-3 py-2 hover:bg-purple-accent/70 rounded-md cursor-pointer"
                            >
                                <div className="flex justify-between items-centers">
                                    <p className="font-medium">{title}</p>
                                    <p className="text-xs text-purple-primary">{time}</p>
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