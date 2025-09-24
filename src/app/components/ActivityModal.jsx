"use client";

import { getUserRole } from "$/utils/supabase/getUserRole";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { RemoveScroll } from "react-remove-scroll";
import dayjs from "dayjs";
import "dayjs/locale/ja";

dayjs.locale("ja");

export default function ActivityModal({ activity, onClose }) {
  const [role, setRole] = useState(null);

  useEffect(() => {
    const fetchRole = async () => {
      const role = await getUserRole();
      setRole(role);
    };
    fetchRole();
  }, []);

  if (!activity) return null;

  return (
    <RemoveScroll>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
        onClick={onClose} // 背景クリックで閉じる
      >
        <div
          className="bg-[#181619] text-white w-[95%] max-w-[800px] max-h-[80vh] overflow-auto rounded-lg p-4 relative"
          onClick={(e) => e.stopPropagation()} // 内側クリックは閉じない
        >
          {/* 編集ボタン */}
          {role === "admin" && (
            <Link
              href={`/admin/${activity.id}/edit`}
              className="absolute top-2 right-15 text-white text-2xl font-bold"
            >
              i
            </Link>
          )}

          {/* 閉じるボタン */}
          <button
            className="absolute top-2 right-5 text-white text-2xl font-bold"
            onClick={onClose}
          >
            X
          </button>

          {/* ヘッダー画像 */}
          <img
            src={activity.imageUrl}
            alt={activity.alt}
            className="w-full h-64 object-cover rounded-lg mt-8"
          />

          {/* タイトル */}
          <h1 className="text-2xl font-bold py-4 border-b border-white">
            {activity.title}
          </h1>

          {/* 投稿情報 */}
          <div className="py-4 space-y-3 border-b border-white">
            <div className="flex items-center gap-2">
              <p>
                活動日:{" "}
                {activity.date
                  ? activity.subdate
                    ? `${dayjs(activity.date).format("YYYY年M月D日(ddd)")} - ${dayjs(activity.subdate).format("M月D日(ddd)")}`
                    : dayjs(activity.date).format("YYYY年M月D日(ddd)")
                  : "未確定"}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <p>活動場所: {activity.location || "未確定"}</p>
            </div>
            <div className="flex items-center gap-2">
              <p>募集人数: {activity.capacity || "未確定"}</p>
            </div>
          </div>

          {/* 詳細説明 */}
          <p className="mt-6 leading-relaxed whitespace-pre-line">
            {activity.description}
          </p>
        </div>
      </div>
    </RemoveScroll>
  );
}
