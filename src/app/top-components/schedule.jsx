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
  const [onClickTT, setOnClickTT] = useState(false);

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

        <ul className="w-[90%] max-w-[600px] pl-5 flex flex-col justify-between">
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

        <div className="pt-10  flex justify-center">
          <button
            onClick={() => setOnClickTT(!onClickTT)}
            className="
              inline-block w-[270px] h-[60px] text-[20px] font-bold 
              text-white border border-white rounded-full 
              text-center leading-[60px] transition-colors duration-200
              hover:bg-white hover:text-black active:bg-white active:text-black
            "
          >
            TimeTree
          </button>
        </div>

        {/* タイムツリー */}
        { onClickTT && (
          <div className="pt-10">
            <iframe
              title="カレンダー"
              src="https://timetreeapp.com/public_calendars/bbooth/embed/list?calendar_name=true&frame_color=%23212121"
              style={{
                width: '100%',
                minHeight: '700px',
                aspectRatio: '680 / 720',
                border: 'none'
              }}
            ></iframe>
          </div>
        )}
        
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
