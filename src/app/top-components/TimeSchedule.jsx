export default function Schedule() {

  return (
    <section className="text-white pt-20 lg:py-20">
      <div className="w-[90%] mx-auto max-w-[1280px] pb-10 border-b">
        <h3 className="text-[20px] font-bold mb-5">SCHEDULE</h3>
        <h2 className="text-[30px] font-bold mb-[14px]">スケジュール</h2>
        
        {/* タイムツリー */}
        <div className="pt-10">
          <iframe
            title="カレンダー"
            src="https://timetreeapp.com/public_calendars/latte/embed/2weeks?calendar_name=true&frame_color=%2347b2f7"
            style={{
              width: "100%",
              minHeight: "200px",
              aspectRatio: "4/3",
              border: "none",
            }}
          ></iframe>
        </div>

        <p className="pl-4 pt-2 text-sm ">
          ※ アプリをまだ入れていない場合は、先にダウンロードしましょう!<br/>
          ※ ダウンロード済みの方はLatteカレンダーをフォローしましょう!
        </p>

      </div>
    </section>
  );
}
