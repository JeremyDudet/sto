// src/pages/index.tsx or src/components/Layout.tsx
import React, { useState } from "react";
import type { ReactNode, FC } from "react";
import Sidebar from "../components/Sidebar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex min-h-screen">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div>🌊</div>
          {isOpen && <button onClick={() => setIsOpen(false)}>Close</button>}
          {!isOpen && <button onClick={() => setIsOpen(true)}>Open</button>}
        </div>
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default Layout;
