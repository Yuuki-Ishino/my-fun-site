"use client";

import { useEffect, useState } from "react";
import { getLatestActivities } from "$/services/supabaseApi";
import dayjs from "dayjs";
import "dayjs/locale/ja";
import ActivityModal from "../components/ActivityModal";

dayjs.locale("ja");

export default function TimeSchedule() {
  const [latestItems, setLatestItems] = useState([]);
  const [selectedActivity, setSelectedActivity] = useState(null);

  useEffect(() => {
    const fetchActivities = async () => {
      const data = await getLatestActivities(10);
      setLatestItems(data);
    };
    fetchActivities();
  }, []);

  return (
    <section className="text-white pt-20 lg:py-20">
      <div className="w-[90%] mx-auto max-w-[1280px] pb-20 border-b">
        <h3 className="text-[20px] font-bold mb-5">SCHEDULE</h3>
        <h2 className="text-[30px] font-bold mb-[14px]">活動予定</h2>

        <ul className="w-[90%] mx-auto flex flex-col lg:flex-row justify-between">
          {latestItems.map((item) => (
            <li
              key={item.id}
              className="border-b border-gray-300 pb-2 mb-3 cursor-pointer"
              onClick={() => setSelectedActivity(item)}
            >
              <p className="text-sm text-gray-300">
                {item.date
                  ? item.subdate
                    ? `${dayjs(item.date).format("M月D日(ddd)")} - ${dayjs(item.subdate).format("M月D日(ddd)")}`
                    : dayjs(item.date).format("M月D日(ddd)")
                  : "未確定"}
              </p>
              <h3 className="text-lg font-semibold">{item.title}</h3>
            </li>
          ))}
        </ul>

        {selectedActivity && (
          <ActivityModal
            activity={selectedActivity}
            onClose={() => setSelectedActivity(null)}
          />
        )}
      </div>
    </section>
  );
}
