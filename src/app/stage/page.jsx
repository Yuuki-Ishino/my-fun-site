import Accordion from "@/app/components/Accordion";
import Button from "../components/Button";

export default async function Page({ searchParams }) {
  const {open} = await searchParams;

  return (
    <section className="bg-img no-bg min-h-screen text-white">
      <div className="max-w-2xl mx-auto bg-[#1e46a3ee] px-5 py-15 space-y-12">

        <div id="ticket" className="pt-10 text-center space-y-6">
          <h2 className="text-4xl font-bold">会場一覧</h2>
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

        {/* ② アコーディオンセクション */}
        <div className="space-y-4">

          <h2 className="font-bold">吉祥寺エリア</h2>
          <Accordion
            id="grandslam" 
            title="📍GRAND SLAM - グランドスラム"
            isOpen={open === "grandslam"}
          >
            <p className="mb-2">最寄駅：吉祥寺駅 （ 徒歩 5分 ）</p>
            <div className="w-full aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.862805179789!2d139.5801924!3d35.704993599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018ef005a408ad7%3A0x33579fd9f3159f07!2z77yn77yy77yh77yu77ykIO-8s--8rO-8oe-8re-8iOOCsOODqeOCueODqeODu-OCsOODqeODs-ODieOCueODqeODoO-8iQ!5e0!3m2!1sja!2sjp!4v1772574149228!5m2!1sja!2sjp"
                className="w-full h-full rounded-lg"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
              
              <div className="flex justify-center pt-5">
                <Button href="https://maps.app.goo.gl/j1C4rXwoygNtB9MK8?g_st=ic">地図アプリで見る</Button>
              </div>

            </div>
          </Accordion>

          <h2 className="font-bold">新宿エリア</h2>
          <Accordion 
            id="science"
            title="📍SCIENCE - サイエンス"
            isOpen={open === "science"}
          >
            <p className="mb-2">最寄駅：新宿駅 （ 徒歩 7分 ）</p>
            <div className="w-full aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.2492153270673!2d139.7035426!3d35.6954844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d6aab53fcbb%3A0x1e3203bb435cd9d8!2z5paw5a6_IGNsdWIgU0NJRU5DRQ!5e0!3m2!1sja!2sjp!4v1772617631868!5m2!1sja!2sjp"
                className="w-full h-full rounded-lg"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
              
              <div className="flex justify-center pt-5">
                <Button href="https://maps.app.goo.gl/RaCNmXWviuS2JGvy8?g_st=ic">地図アプリで見る</Button>
              </div>

            </div>
          </Accordion>
          
          <Accordion 
            id="catshole"
            title="📍Cat's hole - キャッツホール"
            isOpen={open === "catshole"}
            >
            <p className="mb-2">最寄駅：東新宿駅 （ 徒歩 5分 ）</p>
            <div className="w-full aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.988207679162!2d139.70782470000003!3d35.7019078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d211e614ee3%3A0x16779b195aa7542f!2z5paw5a6_Q2F0J3MgaG9sZQ!5e0!3m2!1sja!2sjp!4v1772617672805!5m2!1sja!2sjp"
                className="w-full h-full rounded-lg"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
              
              <div className="flex justify-center pt-5">
                <Button href="https://maps.app.goo.gl/9NTeUUe8sd3ZdTqe6?g_st=ic">地図アプリで見る</Button>
              </div>

            </div>
          </Accordion>

          <Accordion 
            id="headpower"
            title="📍HEAD POWER - ヘッドパワー"
            isOpen={open === "headpower"}
          >
            <p className="mb-2">最寄駅：東新宿駅 （ 徒歩 6分 ）</p>
            <div className="w-full aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.9445994954817!2d139.7081503!3d35.70298090000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d216c8dbb29%3A0xda3c20138bd1d45c!2z5paw5a6_44OY44OD44OJ44OR44Ov44O8!5e0!3m2!1sja!2sjp!4v1772617690843!5m2!1sja!2sjp"
                className="w-full h-full rounded-lg"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
              
              <div className="flex justify-center pt-5">
                <Button href="https://maps.app.goo.gl/5CyotTr2A7FRDJWCA?g_st=ic">地図アプリで見る</Button>
              </div>

            </div>
          </Accordion>

          <Accordion 
            id="atelier"
            title="📍Atelier - アトリエ"
            isOpen={open === "atelier"}
          >
            <p className="mb-2">最寄駅：若松河田駅 （ 徒歩 2分 ）</p>
            <div className="w-full aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.077692127926!2d139.7191871!3d35.69970569999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d0023520349%3A0xb720aaa092e53318!2z44Ki44OI44Oq44Ko!5e0!3m2!1sja!2sjp!4v1772617713876!5m2!1sja!2sjp"
                className="w-full h-full rounded-lg"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
              
              <div className="flex justify-center pt-5">
                <Button href="https://maps.app.goo.gl/JKuZhzS6LHr7kyoE9?g_st=ic">地図アプリで見る</Button>
              </div>

            </div>
          </Accordion>

          <Accordion 
            id="lotus"
            title="📍Lotus - 四谷ロータス"
            isOpen={open === "lotus"}
          >
            <p className="mb-2">最寄駅：四谷三丁目駅 （ 徒歩 3分 ）</p>
            <div className="w-full aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.5595035662423!2d139.7217255!3d35.687846900000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ced61ccfc2f%3A0x442158dd5310b4ea!2z5Zub6LC3TE9UVVM!5e0!3m2!1sja!2sjp!4v1772617729243!5m2!1sja!2sjp"
                className="w-full h-full rounded-lg"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
              
              <div className="flex justify-center pt-5">
                <Button href="https://maps.app.goo.gl/E4PCGAVyVWNsKY199?g_st=ic">地図アプリで見る</Button>
              </div>

            </div>
          </Accordion>

          <Accordion 
            id="ace"
            title="📍SHINJUKU ACE - 新宿ACE"
            isOpen={open === "ace"}
          >
            <p className="mb-2">最寄駅：新宿駅 （ 徒歩 10分 ）</p>
            <div className="w-full aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.2084662942416!2d139.70040269999998!3d35.69648730000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188db2e44519a3%3A0x12784441f8446d2f!2sLIVE%20HOUSE%20SHINJUKU%20ACE!5e0!3m2!1sja!2sjp!4v1772617745019!5m2!1sja!2sjp"
                className="w-full h-full rounded-lg"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
              
              <div className="flex justify-center pt-5">
                <Button href="https://maps.app.goo.gl/KK1H9Fjv46Gpz84D9?g_st=ic">地図アプリで見る</Button>
              </div>

            </div>
          </Accordion>

          <h2 className="font-bold">池袋エリア</h2>
          <Accordion 
            id="revoice"
            title="📍Re:voice - リヴォイス"
            isOpen={open === "revoice"}
          >
            <p className="mb-2">最寄駅：池袋駅 （ 徒歩 7分 ）</p>
            <div className="w-full aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.7473305259227!2d139.7066566!3d35.7324321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d3805011549%3A0x961122e77a960c8f!2z5rGg6KKL44Oq44O044Kp44Kk44K5!5e0!3m2!1sja!2sjp!4v1772617780894!5m2!1sja!2sjp"
                className="w-full h-full rounded-lg"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
              
              <div className="flex justify-center pt-5">
                <Button href="https://maps.app.goo.gl/RbHB7GTYqGjX6QbV7?g_st=ic">地図アプリで見る</Button>
              </div>

            </div>
          </Accordion>

          <Accordion 
            id="mono"
            title="📍mono - モノ"
            isOpen={open === "mono"}
          >
            <p className="mb-2">最寄駅：池袋駅 （ 徒歩 5分 ）</p>
            <div className="w-full aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.003087162984!2d139.712493!3d35.726142599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d69c9145555%3A0xbbbca306d23c19ad!2z5rGg6KKLIExpdmVIb3VzZSBtb25v!5e0!3m2!1sja!2sjp!4v1772617801995!5m2!1sja!2sjp"
                className="w-full h-full rounded-lg"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
              
              <div className="flex justify-center pt-5">
                <Button href="https://maps.app.goo.gl/AMyMvqZEcHQZxakP6?g_st=ic">地図アプリで見る</Button>
              </div>

            </div>
          </Accordion>

          <h2 className="font-bold">渋谷エリア</h2>
          <Accordion 
            id="ring"
            title="📍RING - リング"
            isOpen={open === "ring"}
          >
            <p className="mb-2">最寄駅：渋谷駅 （ 徒歩 10分 ）</p>
            <div className="w-full aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.732199655353!2d139.6956478!3d35.6589691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d827f9f409f%3A0xadc5ff2aad487306!2sSHIBUYA%20RING!5e0!3m2!1sja!2sjp!4v1772617817547!5m2!1sja!2sjp"
                className="w-full h-full rounded-lg"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
              
              <div className="flex justify-center pt-5">
                <Button href="https://maps.app.goo.gl/b67jQK1QSamJRMiX7?g_st=ic">地図アプリで見る</Button>
              </div>

            </div>
          </Accordion>

          <Accordion 
            id="camelot"
            title="📍CAMELOT - キャメロット"
            isOpen={open === "camelot"}
          >
            <p className="mb-2">最寄駅：渋谷駅 （ 徒歩 9分 ）</p>
            <div className="w-full aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.5823621089976!2d139.70003699999998!3d35.662659999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ca8eb5092bb%3A0xf534d01900e882c7!2sCLUB%20CAMELOT!5e0!3m2!1sja!2sjp!4v1772617833939!5m2!1sja!2sjp"
                className="w-full h-full rounded-lg"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
              
              <div className="flex justify-center pt-5">
                <Button href="https://maps.app.goo.gl/2tbSmuAzhN7vZQJdA?g_st=ic">地図アプリで見る</Button>
              </div>

            </div>
          </Accordion>

          <Accordion 
            id="milkyway"
            title="📍Milkyway - ミルキーウェイ"
            isOpen={open === "milyway"}
          >
            <p className="mb-2">最寄駅：渋谷駅 （ 徒歩 9分 ）</p>
            <div className="w-full aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.588662953552!2d139.6978734!3d35.6625048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ca93be90f91%3A0xa530e92cbf8aeb74!2sShibuya%20Milkyway%20LIVE%26BAR!5e0!3m2!1sja!2sjp!4v1772617857875!5m2!1sja!2sjp"
                className="w-full h-full rounded-lg"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
              
              <div className="flex justify-center pt-5">
                <Button href="https://maps.app.goo.gl/FdV2SP9EJP5vGrR58?g_st=ic">地図アプリで見る</Button>
              </div>

            </div>
          </Accordion>
          
          <h2 className="font-bold">秋葉原エリア</h2>
          <Accordion 
            id="zest"
            title="📍ZEST - ゼスト"
            isOpen={open === "zest"}
          >
            <p className="mb-2">最寄駅：秋葉原駅 （ 徒歩 7分 ）</p>
            <div className="w-full aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.047967453636!2d139.7698507!3d35.700437199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c1c311f60eb%3A0x586769cc5f1a8373!2z56eL6JGJ5Y6fWkVTVA!5e0!3m2!1sja!2sjp!4v1772617873301!5m2!1sja!2sjp"
                className="w-full h-full rounded-lg"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
              
              <div className="flex justify-center pt-5">
                <Button href="https://maps.app.goo.gl/yY6Wm8V6AEXcVmq4A?g_st=ic">地図アプリで見る</Button>
              </div>

            </div>
          </Accordion>
          
          <h2 className="font-bold">撮影会</h2>
          <Accordion 
            id="crvite"
            title="📍CR-VITEビル"
            isOpen={open === "crvite"}
          >
            <p className="mb-2">最寄駅：渋谷駅 （ 徒歩 4分 ）</p>
            <div className="w-full aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.68967621016!2d139.70385149999998!3d35.6600166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b5861ccfe0d%3A0xb9b56cb4fcfe7654!2zQ1ItVklUReODk-ODqw!5e0!3m2!1sja!2sjp!4v1772617895158!5m2!1sja!2sjp"
                className="w-full h-full rounded-lg"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
              
              <div className="flex justify-center pt-5">
                <Button href="https://maps.app.goo.gl/yJCUz2JfpG3JPcbg6?g_st=ic">地図アプリで見る</Button>
              </div>

            </div>
          </Accordion>

          <Accordion 
            id="udagawa"
            title="📍宇田川ビルディング"
            isOpen={open === "udagawa"}
          >
            <p className="mb-2">最寄駅：渋谷駅 （ 徒歩 9分 ）</p>
            <div className="w-full aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.6043094066877!2d139.6982346!3d35.6621194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d02a2227979%3A0xf3b993ed354acf39!2z5a6H55Sw5bed55S644OT44Or44OH44Kj44Oz44Kw!5e0!3m2!1sja!2sjp!4v1772617920207!5m2!1sja!2sjp"
                className="w-full h-full rounded-lg"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
              
              <div className="flex justify-center pt-5">
                <Button href="https://maps.app.goo.gl/XeaDeuiLeYucyvi16?g_st=ic">地図アプリで見る</Button>
              </div>

            </div>
          </Accordion>
        </div>


      </div>
    </section>
  );
}
