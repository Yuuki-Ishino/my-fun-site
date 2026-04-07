import Image from "next/image";

export default function Events() {

  return (
    <section className="text-white pt-20 lg:py-20">
      <div className="w-[90%] mx-auto max-w-[1280px] pb-20 border-b">
        <h3 className="text-[20px] font-bold mb-5">EVENTS</h3>
        <h2 className="text-[30px] font-bold mb-[14px]">イベントカレンダー</h2>
        
        <div className="relative w-full aspect-[4.2/3] rounded-lg overflow-hidden">
					<Image
					  src="/images/events/202604.JPG"
					  alt="イベントカレンダー"
					  fill
					  className="object-cover"
					/>
				</div>

				<p className="pl-4 pt-2 text-sm ">
          ※ 無銭イベントとは入場料が無料になっているイベントになります。<br/>
					（無銭ライブは別途ドリンク代が必要になります。）
        </p>

				<h2 className="text-[30px] font-bold my-[14px]">イベント</h2>
				<div className="space-y-5">

					<div className="relative w-full aspect-[4.2/3] rounded-lg overflow-hidden">
						<Image
							src="/images/events/e4.jpg"
							alt="e4_schedule"
							fill
							className="object-cover"
						/>
					</div>

					<div className="relative w-full aspect-[4.2/3] rounded-lg overflow-hidden">
						<Image
							src="/images/events/202604151.JPG"
							alt="202604151_schedule"
							fill
							className="object-cover"
						/>
					</div>

					<div className="relative w-full aspect-[4.2/3] rounded-lg overflow-hidden">
						<Image
							src="/images/events/202604152.JPG"
							alt="202604152_schedule"
							fill
							className="object-cover"
						/>
					</div>


				</div>

      </div>
    </section>
  );
}