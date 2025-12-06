"use client";

import { FaBars } from "react-icons/fa6";

interface HeaderProps {
  onClick: () => void;
}

export default function Header({ onClick }: HeaderProps) {
  return (
    <header className="w-full border-b h-16 flex items-center px-4">
      <div className="flex items-center gap-5">
        <button onClick={onClick} className="cursor-pointer">
          <FaBars className="size-8" />
        </button>

        <p className="font-bold text-[20px]">편한 가계부</p>
      </div>
    </header>
  );
}
