"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "$/utils/supabase/client";
import { getUserRole } from "$/utils/supabase/getUserRole";
import Hamburger from "./Hamburger";

function Header() {
  const supabase = createClient();

  const [session, setSession] = useState(null);
  const [admin, setAdmin] = useState(false);

  //session and role check
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await supabase.auth.getSession();
      setSession(data.session);

      const role = await getUserRole();
      if (role === "admin") setAdmin(true);
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
        <Hamburger navItems={navItems} session={session} />
      </div>
    </header>
  );
}

export default Header;
