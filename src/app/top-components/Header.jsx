"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "$/utils/supabase/client";
import { getUserRole } from "$/utils/supabase/getUserRole";

function Header() {
  const supabase = createClient();

  const [isOpen, setIsOpen] = useState(false);
  const [session, setSession] = useState(null);
  const [admin, setAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  //session and role check
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await supabase.auth.getSession();
      setSession(data.session);

      const role = await getUserRole();
      if (role === "admin") setAdmin(true);

      setLoading(false);
    };
    fetchData();

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
      },
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, [supabase]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const barColor = session ? "bg-green-400" : "bg-white";

  if (loading) {
    return null;
  }

  const baseNavItems = [
    session
      ? { href: "/auth/logout", label: "ログアウト" }
      : { href: "/auth/login", label: "ログイン" },
    { href: "/aboutUs", label: "私たちについて" },
    { href: "/members", label: "メンバー紹介" },
    // { href: "/intro", label: "活動紹介" },
    { href: "/activities", label: "活動一覧" },
    { href: "/#contact", label: "お問い合わせ" },
  ];

  const adminNavItems = [{ href: "/admin/new", label: "記事作成" }];

  const navItems = [...baseNavItems, ...(admin ? adminNavItems : [])];

  const renderNavItems = () =>
    navItems.map((item, index) => (
      <li key={index} className="ml-[50px]">
        <Link
          href={item.href}
          className="block py-5 font-bold transition-opacity duration-200 hover:opacity-60"
        >
          {item.label}
        </Link>
      </li>
    ));

  return (
    <header className="fixed z-10 h-[70px] w-full bg-black text-white opacity-90">
      <div className="flex justify-between items-center w-[] py-3 lg:w-[90%] lg:max-auto">
        {/* ロゴ */}
        <a href="/" className="logo">
          <img
            src="/images/header-logo.jpg"
            alt="header-logo"
            className="h-[50px]"
          />
        </a>

        {/* ナビゲーション */}
        <ul className="hidden lg:flex">{renderNavItems()}</ul>

        {/* ハンバーガーアイコン */}
        <div className="lg:hidden mr-5">
          {isOpen ? (
            <button
              onClick={toggleMenu}
              className="focus:outline-none  active:bg-gray-700"
            >
              <div className="w-6 font-bold">X</div>
            </button>
          ) : (
            <button
              onClick={toggleMenu}
              className="focus:outline-none  active:bg-gray-700"
            >
              <div className={`w-6 h-0.5 ${barColor} mb-2`}></div>
              <div className={`w-6 h-0.5 ${barColor}`}></div>
            </button>
          )}

          {/* ドロップダウンメニュー */}
          <div
            className={`absolute right-0 mt-5 w-45 bg-black flex flex-col transition-transfform ease-in-out
				duration-700 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
          >
            <ul>
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="font-bold border-t border-gray-700 mx-2"
                >
                  <Link
                    href={item.href}
                    className="block px-5 py-5 hover:opacity-80 active:bg-gray-700"
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
    </header>
  );
}

export default Header;
