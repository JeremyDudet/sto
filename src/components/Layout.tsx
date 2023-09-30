// src/pages/index.tsx or src/components/Layout.tsx
import React, { useState } from "react";
import type { ReactNode, FC } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex min-h-screen">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <main>
        <Header />
        <div className="flex-1">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
