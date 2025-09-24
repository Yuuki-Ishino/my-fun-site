"use client";

import { useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/ja";
import ActivityModal from "./ActivityModal";
import Image from "next/image";

dayjs.locale("ja");

export default function ActivityCardClient({ activity }) {
  const [selectedActivity, setSelectedActivity] = useState(null);

  return (
    <>
      <div
        className="relative mb-14"
        onClick={() => setSelectedActivity(activity)}
      >
        <div className="relative w-full h-[225px]">
          <Image
            src={activity.imageUrl}
            alt={activity.title}
            fill
            className="rounded-[20px] object-cover hover:opacity-70 active:opacity-70"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>
        <p className="bg-white/90 text-black font-bold inline-block border-black/90 border-1 absolute bottom-[6px] left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-[10px]">
          {activity.title}
        </p>
        <p className="bg-white/90 text-black font-bold inline-block border-black/90 border-1 absolute top-2 right-2 px-1.5 py-2 rounded-[10px]">
          {dayjs(activity.date).format("M月D日(ddd)")}
        </p>
        {activity.subdate && (
          <p className="bg-white/90 text-black font-bold inline-block border-black/90 border-1 absolute top-14 right-2 px-1.5 py-2 rounded-[10px]">
            {dayjs(activity.subdate).format("M月D日(ddd)")}
          </p>
        )}
      </div>

      {selectedActivity && (
        <ActivityModal
          activity={selectedActivity}
          onClose={() => setSelectedActivity(null)}
        />
      )}
    </>
  );
}
