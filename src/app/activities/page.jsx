import ActivitySection from "./ActivitySection";

export const metadata = {
  title: "Bbooth活動一覧ページ | 東洋大学ボランティアサークル",
  description: "Bboothは1年間に40回以上の活動があり、400人を超える大型サークルです。その活動一つ一つの詳細を一覧ページで確認することができます。",
  openGraph: {
    title: "Bbooth活動一覧ページ | 東洋大学ボランティアサークル",
    description: "東洋大学ボランティアサークルBboothの活動一覧ページ。",
    images: ["/images/logo01.jpg"],
  },
};

export const revalidate = 60; 

export default async function Page() {
  return (
    <>
      <section className="pt-[70px]">
        <ActivitySection />
      </section>
    </>
  );
}
