import Image from "next/image";

export default function Events() {

  return (
    <section className="text-white pt-20 lg:py-20">
      <div className="w-[90%] mx-auto max-w-[1280px] pb-20 border-b">
        <h3 className="text-[20px] font-bold mb-5">EVENTS</h3>
        <h2 className="text-[30px] font-bold mb-[14px]">イベントカレンダー</h2>
        
        <div className="relative w-full aspect-[4.2/3] rounded-lg overflow-hidden">
					<Image
					  src="/images/events/202603.JPG"
					  alt="e_schedule"
					  fill
					  className="object-cover"
					/>
				</div>

				<h2 className="text-[30px] font-bold my-[14px]">イベント</h2>
				<div className="space-y-5">
				<div className="relative w-full aspect-[4.2/3] rounded-lg overflow-hidden">
					<Image
					  src="/images/events/e1.JPG"
					  alt="e_schedule"
					  fill
					  className="object-cover"
					/>
				</div>

				<div className="relative w-full aspect-[4.2/3] rounded-lg overflow-hidden">
					<Image
					  src="/images/events/e2.PNG"
					  alt="e_schedule"
					  fill
					  className="object-cover"
					/>
				</div>

				</div>

      </div>
    </section>
  );
}