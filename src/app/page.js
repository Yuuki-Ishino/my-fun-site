// app/page.jsx
import MainVisual from "./top-components/MainVisual";
import FirstTime from "./top-components/FirstTime";
import Schedule from "./top-components/TimeSchedule";
import Events from "./top-components/Events";
import ContactSection from "./top-components/ContactSection";

export const metadata = {
  title: "くう | Dream & Dream",
  description: "メンズ地下アイドル Dream & Dream「くう」の自作ファンサイト。ライブ情報・イベント情報などを掲載しています。",
  openGraph: {
    title: "くう | Dream & Dream",
    description: "メンズ地下アイドル Dream & Dream「くう」の自作ファンサイト。",
    images: ["/images/members/dredre_members.PNG"],
  },
};

export const revalidate = 60;

export default function Page() {
  return (
    <div className="bg-img max-w-2xl mx-auto">
      <MainVisual />
      <FirstTime />
      <Schedule />
      <Events />
      <ContactSection imageSrc="/images/top-image.jpg" />
    </div>
  );
}
