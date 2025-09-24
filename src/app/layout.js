import Header from "./top-components/Header";
import Footer from "./top-components/Footer";
import "../styles/globals.css";

export const metadata = {
  metadataBase: "https://bbooth.vercel.app",
  siteName: "Bbooth",
  locale: "ja_JP",
  type: "website",
  keywords: [
    "Bbooth",
    "東洋大学",
    "サークル",
    "ボランティアサークル",
    "学生ボランティア",
  ], // サイト共通キーワード
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
