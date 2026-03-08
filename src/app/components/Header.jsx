import Link from "next/link";
import Hamburger from "./Hamburger";

function Header() {
  const baseNavItems = [
    { href: "/firstTime", label: "🔰初めての方へ" },
    { href: "/members", label: "メンバー紹介" },
    { href: "/stage", label: "会場一覧" },
    { href: "/#contact", label: "お問い合わせ" },
  ];

  const navItems = baseNavItems;

  const renderNavItems = () =>
    navItems.map((item, index) => (
      <li key={index} className="ml-[50px]">
        <Link
          href={item.href}
          className="block text-white py-5 font-bold transition-opacity duration-200 hover:opacity-60"
        >
          {item.label}
        </Link>
      </li>
    ));

  return (
    <header className="fixed z-100 h-[70px] w-full overflow-visible">
      {/* 背景画像 */}
      <div
        className="absolute inset-0 z-0 bg-[url('/images/header-bg1.jpg')] bg-cover bg-center
          [mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)]
          [-webkit-mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)]
        "
      />

      {/* 中身 */}
      <div className="relative z-100 flex h-full justify-between items-center lg:w-[90%] mx-auto">
        {/* ロゴ */}
        <a href="/" className="logo h-full flex items-center">
          <img
            src="/images/header-logo1.png"
            alt="header-logo"
            className="h-[80%] object-contain ml-2"
          />
        </a>

        {/* ナビ */}
        <ul className="hidden lg:flex translate-y-[6px]">
          {renderNavItems()}
        </ul>

        {/* ハンバーガー */}
        <Hamburger navItems={navItems} />
      </div>
    </header>

  );
}

export default Header;
