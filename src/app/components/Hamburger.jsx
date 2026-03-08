"use client";

import { useState } from "react";
import Link from "next/link";

export default function Hamburger({navItems}) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { label: "HOME", href: "/" },
    ...navItems,
  ];

  return (
    <div className="lg:hidden mr-5">
        <button
          onClick={toggleMenu}
          className="focus:outline-none"
        >
          <div className={`w-6 h-0.5 bg-white mb-2`}></div>
          <div className={`w-6 h-0.5 bg-white`}></div>
        </button>

      {/* 背景オーバーレイ（これが閉じる役） */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* スライドメニュー */}
      <div
        className={`fixed top-0 right-0 z-50 h-screen w-64 transition-transform ease-in-out duration-700
					${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="
          absolute inset-0
          bg-black
          bg-cover bg-center
          pointer-events-none
        "/>

        <div className="relative z-10 h-full flex flex-col">

      {/* 閉じるボタン（最上部固定） */}
      <button
        onClick={() => setIsOpen(false)}
        className="flex items-center justify-between w-full text-white px-5 h-[70px] border-b border-white/50 hover:bg-white/10"
      >
        <span className="ml-1 font-bold">BACK</span>
        <span className="text-xl font-bold">→</span>
      </button>

      {/* ナビ */}
      <ul className="flex-1 overflow-y-auto">
        {menuItems.map((item, index) => (
          <li key={index} className="border-b border-white/30">
            <Link
              href={item.href}
              className="block text-white px-6 py-5 font-bold hover:bg-white/10"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

    </div>
      </div>
    </div>
  );
}
