import Image from "next/image";
import Button from "@/app/components/Button.jsx";

function FirstTime() {
  return (
    <section className="text-white pt-20">
      <div className="w-[90%] mx-auto max-w-[1280px] pb-15 border-b border-white">
        <div className="flex flex-col justify-between">
          {/* メッセージ */}
          <div className="w-[90%]">
            <p className="text-[20px] font-bold mb-5">For First-Time Visitors</p>
            <h2 className="text-[30px] font-bold mb-[14px]">初めての方へ</h2>
          </div>

          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
            <Image
              src="/images/events/stamp.jpg"
              alt=""
              fill
              className="object-cover"
            />
          </div>

          {/* サブメッセージ */}
          <div className="mt-4">
            <p className="text-[20px] leading-[1.8] mb-10">
              安心してライブを楽しめるように情報をまとめました。
            </p>
            <div className="flex justify-center">
              <Button href="/firstTime">READ MORE</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FirstTime;
