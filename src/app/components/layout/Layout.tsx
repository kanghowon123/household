"use client";

import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div>
      <Header onClick={handleMenu} />
      <div className="flex flex-1">
        <Sidebar open={isOpen} />
        <main className="flex flex-1">{children}</main>
      </div>
    </div>
  );
}
