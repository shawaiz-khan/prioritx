import {
    CircleGauge,
    ClipboardList,
    PlusSquare,
    CheckCircle,
    Clock,
    LifeBuoy,
    PanelLeftClose,
} from "lucide-react";
import { useState } from "react";

export default function SideBar() {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleSidebarClick = () => {
        setIsExpanded((prev) => !prev);
    };

    const menuItems = [
        { label: "Statistics", icon: <CircleGauge /> },
        { label: "Tasks", icon: <ClipboardList /> },
        { label: "Add Tasks", icon: <PlusSquare /> },
        { label: "Completed Tasks", icon: <CheckCircle /> },
        { label: "Pending Tasks", icon: <Clock /> },
        { label: "Support", icon: <LifeBuoy /> },
    ];

    return (
        <div
            className={`flex flex-col bg-light-container h-screen p-5 border-r ${isExpanded ? "w-80" : "w-fit"} transition-all duration-200 ease-in-out`}
            aria-expanded={isExpanded}
        >
            <ul className="flex flex-col h-full gap-8">
                <li
                    id="sidebar-menu"
                    className={`py-2 px-3 flex ${isExpanded ? "justify-end" : "justify-start"}`}
                >
                    <button
                        onClick={handleSidebarClick}
                        aria-label="Toggle Sidebar"
                        className="cursor-pointer hover:text-purple-600"
                    >
                        <PanelLeftClose className={`transform transition-transform ${isExpanded ? "rotate-0" : "rotate-180"}`} />
                    </button>
                </li>
                {menuItems.map((item, index) => (
                    <li
                        key={index}
                        className="p-3 rounded-md hover:bg-purple-200 border-b flex items-center gap-2 cursor-pointer"
                    >
                        <span className="text-purple-700">{item.icon}</span>
                        {isExpanded && item.label}
                    </li>
                ))}
            </ul>
        </div>
    );
}