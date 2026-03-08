import Image from "next/image";
import { FaXTwitter, FaInstagram , FaTiktok} from "react-icons/fa6";

const members = {
  Kuu: {
    name: "くう",
		subname: "Kuu",
		color: "blue",
		old: "23",
		birth: "9月14日",
		height: "174cm",
		weight: "秘密",
		brood: "A",
		favo: "パソコン",
		nfavo: "スカさないこと",
		mbti: "ENTP",
		image: "/images/members/Kuu.JPG",
		description: "お家のワンちゃんの名前もくうです。",
		instagram: "https://www.instagram.com/ku_dredre/",
		X: "https://x.com/ku_dredre",
		tiktok: "https://www.tiktok.com/@ku_dredre"
  },
  Ayase: {
    name: "あやせ",
		subname: "Ayase",
		color: "red",
		old: "",
		birth: "",
		height: "",
		weight: "",
		brood: "",
		favo: "",
		nfavo: "",
		mbti: "",
		image: "/images/members/Ayase.JPG",
		description: "",
		instagram: "https://www.instagram.com/ayase_dredre/",
		X: "https://x.com/ayase_dredre",
		tiktok: "https://www.tiktok.com/@ayase_dredre"
  },
  Hinase: {
    name: "ひなせ",
		subname: "Hinase",
		color: "white",
		old: "23",
		birth: "3月17日",
		height: "178",
		weight: "だいたい🍎193個分",
		brood: "O",
		favo: "牛乳！",
		nfavo: "牛乳><",
		mbti: "ENTP",
		image: "/images/members/Hinase.JPG",
		description: "そういうこと",
		instagram: "https://www.instagram.com/hinase__dredre/",
		X: "https://x.com/hinase_dredre",
		tiktok: "https://www.tiktok.com/@hinase_dredre"
  },
  Shino: {
    name: "しの",
		subname: "Shino",
		color: "purple",
		old: "",
		birth: "",
		height: "",
		weight: "",
		brood: "",
		favo: "",
		nfavo: "",
		mbti: "",
		image: "/images/members/Shino.JPG",
		description: "",
		instagram: "https://www.instagram.com/sino_dredre/",
		X: "https://x.com/sino_dredre",
		tiktok: "https://www.tiktok.com/@sino_dredre"
  },
  Taiyou: {
    name: "たいよう",
		subname: "Taiyou",
		color: "yellow",
		old: "",
		birth: "",
		height: "",
		weight: "",
		brood: "",
		favo: "",
		nfavo: "",
		mbti: "",
		image: "/images/members/Taiyou.JPG",
		description: "",
		instagram: "https://www.instagram.com/taiyou_dredre/",
		X: "https://x.com/taiyou_dredre",
		tiktok: "https://www.tiktok.com/@taiyou_dredre"
  },
  Kaname: {
    name: "かなめ",
		subname: "Kaname",
		color: "green",
		old: "",
		birth: "",
		height: "",
		weight: "",
		brood: "",
		favo: "",
		nfavo: "",
		mbti: "",
		image: "/images/members/Kaname.JPG",
		description: "",
		instagram: "https://www.instagram.com/kaname_dredre/",
		X: "https://x.com/kaname_dredre",
		tiktok: "https://www.tiktok.com/@kaname_dredre"
  },
  Toramaru: {
    name: "とらまる",
		subname: "Toramaru",
		color: "orange",
		old: "",
		birth: "",
		height: "",
		weight: "",
		brood: "",
		favo: "",
		nfavo: "",
		mbti: "",
		image: "/images/members/Toramaru.JPG",
		description: "",
		instagram: "https://www.instagram.com/toramaru_dredre/",
		X: "https://x.com/toramaru_dredre",
		tiktok: "https://www.tiktok.com/@toramaru_dredre"
  },
};

export default async function MemberPage({ params }) {
	const { name } = await params;
  const member = await members[name];

  if (!member) {
    return <div className="p-10">Member not found</div>;
  }

  return (
	<section className="py-20">
    <div className="text-white max-w-2xl w-[90%] mx-auto">

      {/* アー写 */}
      <div className="relative aspect-[3/4.5]">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover"
        />
      </div>

      {/* 名前 */}
      <div className="text-center my-6">
        <h1 className="text-3xl font-bold">{member.name}</h1>
        <p className="text-white">{member.subname}</p>
      </div>

	  	<div className="flex justify-center space-x-8 mx-auto ">
				{/* INSTAGRAM */}
				<a
				href={member.instagram}
				target="_blank"
				rel="noopener noreferrer"
				className="text-4xl hover:text-pink-400 active:text-pink-400 transition-colors"
				>
				<FaInstagram />
				</a>
				
				{/* X */}
				<a
				href={member.X}
				target="_blank"
				rel="noopener noreferrer"
				className="text-4xl hover:text-blue-400 active:text-blue-400 transition-colors"
				>
				<FaXTwitter />
				</a>

				{/* Tiktok */}
				<a
				href={member.X}
				target="_blank"
				rel="noopener noreferrer"
				className="text-4xl hover:text-red-400 active:text-red-400 transition-colors"
				>
				<FaTiktok />
				</a>
			</div>

      {/* プロフィール */}
      <div className="mt-16 space-y-4 text-lg">

        <div className="flex">
          <span className="w-40 font-semibold">担当カラー</span>
          <span>{member.color}</span>
        </div>

				<div className="flex">
          <span className="w-40 font-semibold">年齢</span>
          <span>{member.old}</span>
        </div>

        <div className="flex">
          <span className="w-40 font-semibold">誕生日</span>
          <span>{member.birth}</span>
        </div>

				<div className="flex">
          <span className="w-40 font-semibold">身長</span>
          <span>{member.height}</span>
        </div>

				<div className="flex">
          <span className="w-40 font-semibold">体重</span>
          <span>{member.weight}</span>
        </div>

        <div className="flex">
          <span className="w-40 font-semibold">血液型</span>
          <span>{member.brood}</span>
        </div>

        <div className="flex">
          <span className="w-40 font-semibold">MBTI</span>
          <span>{member.mbti}</span>
        </div>

        <div className="flex">
          <span className="w-40 font-semibold">好きなもの・こと</span>
          <span>{member.favo}</span>
        </div>

        
        <div className="flex">
          <span className="w-40 font-semibold">苦手なもの・こと</span>
          <span>{member.nfavo}</span>
        </div>

				<div className="flex">
          <span className="w-40 font-semibold">一言</span>
          <span>{member.description}</span>
        </div>

      </div>

    </div>
	</section>
  );
}