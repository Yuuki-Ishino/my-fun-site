"use client";

import { useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/ja";
import ActivityModal from "./ActivityModal";

dayjs.locale("ja");

export default function ActivityCardClient({ activity }) {
  const [selectedActivity, setSelectedActivity] = useState(null);

  return (
    <>
      <div
        className="relative mb-14"
        onClick={() => setSelectedActivity(activity)}
      >
        <img
          src={activity.imageUrl}
          alt={activity.title}
          className="w-full h-[225px] rounded-[20px] object-cover hover:opacity-70 active:opacity-70"
        />
        <p className="bg-white/90 text-black font-bold inline-block border-black/90 border-1 absolute bottom-[6px] left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-[10px]">
          {activity.title}
        </p>
        <p className="bg-white/90 text-black font-bold inline-block border-black/90 border-1 absolute top-[10px] right-[10px] px-1.5 py-2 rounded-[10px]">
          {dayjs(activity.date).format("M月D日(ddd)")}
        </p>
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
