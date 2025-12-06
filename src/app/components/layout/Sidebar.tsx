"use client";

import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarProps {
  open: boolean;
}
const menuItems = [
  { label: "홈", icon: <IoHomeOutline className="size-6" />, href: "/" },
  {
    label: "달력",
    icon: <FaRegCalendarAlt className="size-6" />,
    href: "/calendar",
  },
  { label: "내역", icon: <FaBook className="size-6" />, href: "/breakdown" },
];

export default function Sidebar({ open }: SidebarProps) {
  const pathname = usePathname();
  return (
    // h-screen 넘치면 색이 안나옴
    <aside
      className={`
        group relative bg-gray-100 h-screen transition-all duration-300 lg:hover:w-48
        ${open ? "w-48" : "w-15"}
      `}
    >
      <nav className="flex flex-col">
        <nav className="flex flex-col">
          {menuItems.map((list) => (
            <Link key={list.href} href={list.href}>
              <MenuItem
                icon={list.icon}
                label={list.label}
                open={open}
                active={pathname === list.href}
              />
            </Link>
          ))}
        </nav>
      </nav>
    </aside>
  );
}

interface MenuItemProps {
  icon: React.ReactNode;
  label: string;
  open: boolean;
  active?: boolean;
}

function MenuItem({ icon, label, open, active }: MenuItemProps) {
  return (
    <div
      className={`flex items-center px-4 py-3 text-lg ${
        active ? "bg-blue-500 text-white" : "hover:bg-gray-200 text-gray-700"
      } `}
    >
      <span>{icon}</span>
      {/* {open && ( */}
      <span
        className={`ml-3 whitespace-nowrap overflow-hidden
          transition-all duration-300 ${
            open ? "opacity-100 max-w-[200px]" : "opacity-0 max-w-0"
          } group-hover:opacity-100 group-hover:max-w-[200px]`}
      >
        {label}
      </span>
      {/* )} */}
    </div>
  );
}
