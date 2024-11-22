import {
  CircleGauge,
  ClipboardList,
  PlusSquare,
  CheckCircle,
  Clock,
  LifeBuoy,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SideBar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  const handleSidebarClick = () => {
    setIsExpanded((prev) => !prev);
  };

  const menuItems = [
    { label: "Statistics", icon: <CircleGauge />, link: "statistics" },
    { label: "Tasks", icon: <ClipboardList />, link: "tasks" },
    { label: "Add Tasks", icon: <PlusSquare />, link: "add" },
    { label: "Completed Tasks", icon: <CheckCircle />, link: "completed" },
    { label: "Pending Tasks", icon: <Clock />, link: "pending" },
    { label: "Support", icon: <LifeBuoy />, link: "support" },
  ];

  return (
    <aside
      className={`flex flex-col bg-light-container h-screen border-r 
          ${isExpanded ? "w-60" : "w-16"} 
          transition-[width] duration-300 ease-in-out`}
      aria-expanded={isExpanded}
    >
      <ul className="flex flex-col h-full gap-8 font-sans">
        <li
          id="sidebar-menu"
          className={`py-3 px-4 flex ${
            isExpanded ? "justify-end" : "justify-center"
          }`}
        >
          <button
            onClick={handleSidebarClick}
            aria-label="Toggle Sidebar"
            className="cursor-pointer hover:text-purple-600 text-gray-900"
          >
            {isExpanded ? <X /> : <Menu />}
          </button>
        </li>
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`p-3 rounded-md hover:bg-purple-200 border-b flex items-center 
                      gap-2 cursor-pointer transition-all 
                      ${isExpanded ? "justify-start" : "justify-center"}`}
            onClick={() => navigate(item.link)}
          >
            <span className="text-gray-900 text-lg">{item.icon}</span>
            {isExpanded && (
              <span className="whitespace-nowrap text-lg font-medium text-gray-900">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
}
