import TeamCard from "../components/teamCard";

export const metadata = {
  title: "Bbooth メンバー",
  description: "東洋大学ボランティアサークルBboothのメンバー紹介ページ。",
  openGraph: {
    title: "Bbooth メンバー",
    description: "東洋大学ボランティアサークルBboothのメンバー紹介ページ。",
    images: ["/images/10th_img.jpg"],
  },
};

export default function memberIntro() {
  return (
    <section className="py-25">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-white mb-8">
          PROFILE 
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          <TeamCard
            name="くう"
            subname="Kuu"
            color="青"
            birth="9月14日"
            brood="A"
            favo="パソコン"
            nfavo=""
            mbti="ENTP"
            image="/images/members/Kuu.JPG"
            description="ダンスボーカルビジュアル担当"
          />

          <TeamCard
            name="あやせ"
            subname="Ayase"
            color="赤"
            birth="9月14日"
            brood="A"
            favo="パソコン"
            nfavo=""
            mbti="ENTP"
            image="/images/members/Ayase.JPG"
            description="ダンスボーカルビジュアル担当"
          />

          <TeamCard
            name="ひなせ"
            subname="Hinase"
            color="白"
            birth="9月14日"
            brood="A"
            favo="パソコン"
            nfavo=""
            mbti="ENTP"
            image="/images/members/Hinase.JPG"
            description="ダンスボーカルビジュアル担当"
          />

          <TeamCard
            name="しの"
            subname="Shino"
            color="紫"
            birth="9月14日"
            brood="A"
            favo="パソコン"
            nfavo=""
            mbti="ENTP"
            image="/images/members/Shino.JPG"
            description="ダンスボーカルビジュアル担当"
          />

          <TeamCard
            name="たいよう"
            subname="Taiyou"
            color="黄"
            birth="9月14日"
            brood="A"
            favo="パソコン"
            nfavo=""
            mbti="ENTP"
            image="/images/members/Taiyou.JPG"
            description="ダンスボーカルビジュアル担当"
          />

          <TeamCard
            name="かなめ"
            subname="Kaname"
            color="緑"
            birth="9月14日"
            brood="A"
            favo="パソコン"
            nfavo=""
            mbti="ENTP"
            image="/images/members/Kaname.JPG"
            description="ダンスボーカルビジュアル担当"
          />

          <TeamCard
            name="とらまる"
            subname="Toramaru"
            color="橙"
            birth="9月14日"
            brood="A"
            favo="パソコン"
            nfavo=""
            mbti="ENTP"
            image="/images/members/Toramaru.JPG"
            description="ダンスボーカルビジュアル担当"
          />
        </div>
      </div>
    </section>
  );
}
