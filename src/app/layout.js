import Header from "./components/Header";
import Footer from "./components/Footer";
import "../styles/globals.css";

export const metadata = {
  title: "くう | Dream & Dream",
  description: "メンズ地下アイドル Dream & Dream「くう」の自作ファンサイト。ライブ情報、イベント、会場案内などを掲載。",
  metadataBase: new URL("https://kuu-fansite.vercel.app"),

  keywords: [
    "くう",
    "Dream & Dream",
    "メンズ地下アイドル",
    "メン地下",
    "地下アイドル",
    "ライブ情報",
  ],

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    title: "くう | Dream & Dream",
    description: "メンズ地下アイドル Dream & Dream「くう」の自作ファンサイト。",
    url: "https://kuu-fansite.vercel.app",
    siteName: "くう Fan Site",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/images/members/dredre_members.PNG",
        width: 1200,
        height: 630,
        alt: "くう Dream & Dream",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
