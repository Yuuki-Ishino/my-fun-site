// app/page.jsx
import MainVisual from "./top-components/MainVisual";
import MessageSection from "./top-components/MessageSection";
import ActivitySection from "./top-components/ActivitySection";
import ContactSection from "./top-components/ContactSection";
import TimeSchedule from "./top-components/schedule";

export const metadata = {
  title: "Bboothトップページ | 東洋大学ボランティアサークル",
  description: "Bboothは東洋大学の学生が運営するボランティアサークルです。",
  openGraph: {
    title: "Bboothについて | 東洋大学ボランティアサークル",
    description: "Bboothは東洋大学の学生が運営するボランティアサークルです。",
    images: ["/images/top-image.jpg"],
  },
};

export const revalidate = 60;

export default function Page() {
  return (
    <div className="bg-img">
      <MainVisual />
      <MessageSection />
      <TimeSchedule />
      <ActivitySection />
      <ContactSection imageSrc="/images/top-image.jpg" />
    </div>
  );
}
