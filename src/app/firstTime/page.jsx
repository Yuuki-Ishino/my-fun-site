import Accordion from "../components/Accordion";
import Button from "../components/Button";
import Image from "next/image";

export default function FirstPage() {
  return (
    <section className="bg-img no-bg min-h-screen text-white">
      <div className="max-w-2xl mx-auto bg-[#1e46a3ee] px-5 py-20 space-y-12">

        {/* ① ファーストビュー */}
        <div className="text-center space-y-6">
          <h1 className="text-2xl font-bold leading-relaxed">
            初めての方へ<br />
            ライブ参加ガイド📖
          </h1>

          <div className="space-y-2 text-sm opacity-80">
            <p>✅ 1人参加全然OK !</p>
            <p>✅ 初めての方大歓迎</p>
            <p>✅ 難しいルールなし</p>
          </div>

          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
            <Image
              src="/images/events/stamp.jpg"
              alt=""
              fill
              className="object-cover"
            />
          </div>

        </div>

        {/* ② アコーディオンセクション */}
        <div className="space-y-4">

          <Accordion title="🎟 チケット発行の仕方">
            <div className="mt-5">

              <p className="text-2xl font-bold mb-2">STEP 1</p>
              <p className="font-semibold mb-1">
                TimeTreeで行きたい日程を開く。
              </p>
              <div className="mb-2">
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
              
              <p className="pl-4 text-sm ">
                ※ アプリをまだ入れていない場合は、先にダウンロードしましょう!<br/>
                ※ ダウンロード済みの方、完了した方はLatteカレンダーをフォローしましょう!
              </p>

            </div>

            <div className="mt-10">

              <p className="text-2xl font-bold mb-2">STEP 2</p>
              <p className="font-semibold mb-1">
                チケットマーク🎟のURLからチケットサイトを開く。
              </p>

              <div className="relative w-full aspect-[4.2/3] rounded-lg overflow-hidden mb-2">
                <Image
                  src="/images/f1.jpg"
                  alt="e_schedule"
                  fill
                  className="object-cover"
                />
              </div>
              
              <p className="pl-4 text-sm ">
                ※ チケットサイトの新規登録は3分ほどで完了できます。<br/>
                ※ コンビニ払いよりもクレジットカード決済の方が安くなるのでおすすめ！
              </p>

            </div>

            <div className="mt-6">

              <p className="text-2xl font-bold mb-2">STEP 3</p>
              <p className="font-semibold mb-1">
                決済が完了してQRコードが表示されれば完了!!
              </p>
              <p className="pl-4 text-sm ">
                そのQRコードで入場するのでお忘れなく<br/>
                完了したら「くう」に伝えてくれるとめちゃ嬉しい☺️
              </p>

            </div>

          </Accordion>

          <Accordion title="📍 会場までの行き方">
            <div className="mt-6">

              <p className="text-2xl font-bold mb-2">STEP 1</p>
              
              <p className="font-semibold mb-1">
                会場一覧ページを開く。
              </p>

              <div className="relative w-full aspect-[3/5] rounded-lg overflow-hidden mb-2">
                <Image
                  src="/images/f2.jpg"
                  alt="e_schedule"
                  fill
                  className="object-cover"
                />
              </div>

              <p className="pl-4 text-sm ">
                TimeTreeで会場名を確認したら該当する場所をタップ!<br/>
                「地図アプリで見る」を押すと簡単に会場の場所を確認できます。
              </p>

              <div className="mt-5 flex justify-center">
                <Button href="/stage">会場一覧</Button>
              </div>

            </div>
          </Accordion>

          <Accordion title="💭 ライブまでってどんな流れ？雰囲気？">
            <ul className="space-y-4">
              <p className="text-xl font-bold mt-6 mb-4">主な流れ</p>
              <li className="font-semibold">① チケット発行</li>
              <p className="pl-4">⇨事前に発行しておくことで、入場がスムーズになり、お得に入場することができます。</p>
              <li className="font-semibold">② 会場へ向かう</li>
              <li className="font-semibold">③ QR提示で入場</li>
              <li className="font-semibold">④ ライブを楽しむ</li>
              <p className="pl-4">⇨各グループが順番に出演します。１グループあたり２〜３曲ほど披露するのが一般的です。</p>
              <li className="font-semibold">⑤ 特典会でお話できます</li>
              <p className="pl-4">⇨ライブ後にメンバーと写真を撮ったり話せる時間があります。</p>
              <br/>
              
              <p className="text-xl font-bold mt-6 mb-2">雰囲気</p>
              <li>・ ライブ開始までは比較的静かに待っている人が多いです。</li>
              <li>・ お目当てのグループのライブが始まると、前に出て近くで観る人もいれば、後ろでゆっくり観る人もいます。</li>
              <li>・ コールを一緒にすることでより一層楽しめます。</li>
              <li>・ 初めての方は後方で様子を見るのもOKです!</li>
            </ul>
          </Accordion>

          <Accordion title="👜 持ち物・マナー">
            <ul className="space-y-2">
              <p className="text-xl font-bold mb-4">持ち物</p>
              <li>・ スマホ（QR提示用）</li>
              <li>・ チケット代・ドリンク代</li>
              <li>・ ペンライト（任意）</li>
              <br/>
              <p className="text-xl font-bold mt-6 mb-4">マナー</p>
              <li>・同じ色のペンライトを振る際は縦もしくは横に連続して並ぶのをなるべく避けましょう</li>
              <li>・お目当てのグループを見終わったら、他の人に見やすい位置を譲りましょう</li>
            </ul>
          </Accordion>

          <Accordion title="💬 よくある質問">
            <div className="space-y-5">
              <div>
                <p className="font-bold">Q. 1人でも大丈夫？</p>
                <p>A. 一人で参加する人もよくいます。</p>
              </div>
              <div>
                <p className="font-bold">Q. コールできません</p>
                <p>A. 見るだけでも全然OK!</p>
              </div>
              <div>
                <p className="font-bold">Q. 当日券でもいい？</p>
                <p>A. もちろん大丈夫ですが、入場がスムーズに行えるのと金額的にお得なので、来場者の８割ほどが事前にチケット発行しています。</p>
              </div>
              <div>
                <p className="font-bold">Q. 撮影会とは？</p>
                <p>A. ライブは行いませんが、特典会（チェキ撮影会）のみの日程になっています。</p>
              </div>
              <div>
                <p className="font-bold">Q. 再入場可能？</p>
                <p>A. 会場によって再入場時にドリンク代がかかる場所もあるのでスタッフに確認しましょう。</p>
              </div>
            </div>
          </Accordion>

        </div>

        {/* ③ 下部CTA */}
        <div id="ticket" className="pt-10 text-center space-y-6">
          <h2 className="text-xl font-bold">↓ 次のライブはこちら ↓</h2>

          <div className="pt-">
            <iframe
              title="カレンダー"
              src="https://timetreeapp.com/public_calendars/latte/embed/list?calendar_name=true&frame_color=%2347b2f7"
              style={{
                width: "100%",
                minHeight: "400px",
                aspectRatio: "680 / 720",
                border: "none",
              }}
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
}
