// src/components/Sidebar.tsx
import type { FC } from "react";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (bool: boolean) => void;
}

const Sidebar: FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={`bg-gray-900 text-white ${
        isOpen ? "w-64" : "w-0"
      } transition-all duration-300`}
    >
      <ul className="space-y-2">
        {/* Sample menu items */}
        <li className="px-4 py-2 hover:bg-gray-700">
          <div className="flex items-center space-x-4">
            <span>🏠</span>
            {isOpen && <span>Dashboard</span>}
          </div>
        </li>
        {/* ... add other menu items similarly */}
      </ul>

      {isOpen && (
        <div className="border-t p-4">
          {/* User profile */}
          <div className="flex items-center space-x-4">
            <img
              src="/path/to/avatar.jpg"
              alt="User Avatar"
              className="h-10 w-10 rounded-full"
            />
            <div>Tom Cook</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
