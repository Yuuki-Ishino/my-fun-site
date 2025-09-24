import Section from "../components/section";

export const metadata = {
  title: "Bboothについて | 東洋大学ボランティアサークル",
  description:
    "Bboothは東洋大学公認のボランティアサークルです。2011年の東日本大震災をきっかけに発足し、「忘れないをカタチに。」をモットーに地域や他団体と連携した活動を続けています。ともしびプロジェクトや毎月11日のキャンドル活動など、学生主体の社会貢献活動を紹介します。",
  openGraph: {
    title: "Bboothについて | 東洋大学ボランティアサークル",
    description:
      "東洋大学ボランティアサークルBbooth。サークル発足理由、活動内容を紹介しています。",
    images: ["/images/logo02.jpg"],
  },
};

export default function AboutUs() {
  return (
    <section>
      <div className="py-16 px-6">
        {/* トップ */}
        <Section
          title="Bboothとは"
          description={`東洋大学公認ボランティアサークルBboothです。\n\n2011年3月11日の東日本大震災を機に発足し、「忘れないをカタチに。」をモットーに現在まで活動を続けています。\n\n震災、災害の悲惨さを風化させない。\n\n一人ひとりができることを考え、地域や他団体との連携を通じて、人と人との繋がりを大切にした活動を続けています。`}
          image="/images/logo02.jpg"
        />

        {/* ともしび */}
        <Section
          title="ともしびプロジェクト"
          description={`ともしび活動とは、毎月11日にキャンドルを灯し、想いを伝え、想いを繋いでいくプロジェクトです。\n\n「忘れないをカタチに」を合言葉に2011年11月11日からスタートし、Bboothもこのプロジェクトに自主的に参加しています。\n\n毎月11日にメンバーたちでその月の活動を振り返り、キャンドルを灯して黙祷しています。`}
          image="/images/candle01.jpg"
        />

        {/* セクション4: お問い合わせ */}
        <Section
          title="お問い合わせ"
          description="私たちの取り組みに関するご質問やご意見がありましたら、お気軽にご連絡ください。"
          image="/images/candle02.jpg"
          link="/#contact"
          linkText="お問い合わせ"
        />
      </div>
    </section>
  );
}
