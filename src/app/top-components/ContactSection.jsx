import { FaXTwitter, FaInstagram, FaTiktok } from "react-icons/fa6";

function ContactSection() {
  return (
    <section id="contact" className="text-white pt-20">
      <div className="w-[90%] mx-auto max-w-[1280px] pb-20">
        <div className="flex flex-col justify-between">
          {/* メッセージ */}
          <div className="">
            <h3 className="text-[20px] font-bold mb-5">CONTACT</h3>
            <h2 className="text-[30px] font-bold mb-10">お問い合わせ</h2>
            <p className="leading-[1.8] mb-[20px]">
              個人的な質問等あれば、以下のInstagramのDMにてお申し付けください。（返信はスタンプのみとなっております。）
            </p>
          </div>

          {/* アイコンリンク */}
          <div className="flex space-x-8 mx-auto">
            {/* INSTAGRAM */}
            <a
              href="https://www.instagram.com/ku_dredre/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl hover:text-pink-400 active:text-pink-400 transition-colors"
            >
              <FaInstagram />
            </a>

            {/* X */}
            <a
              href="https://x.com/ku_dredre"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl hover:text-blue-400 active:text-blue-400 transition-colors"
            >
              <FaXTwitter />
            </a>

            {/* Tiktok */}
            <a
            href="https://www.tiktok.com/@ku_dredre"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl hover:text-red-400 active:text-red-400 transition-colors"
            >
            <FaTiktok />
            </a>

          </div>

          <p className="leading-[1.8] mt-[20px]">
              Instagram : 普段の生活や写真等
              <br/>
              X : スケジュール等の情報や個人的なつぶやき
              <br/>
              Tiktok : 配信等
          </p>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
