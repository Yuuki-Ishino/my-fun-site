"use client";

import { FaShareFromSquare } from "react-icons/fa6";

export default function ShareButton({ id }) {
  const handleClick = async () => {
    const url = `${location.origin}/stage?open=${id}`;

    // Web Share API対応してるかチェック
    if (navigator.share) {
      try {
        await navigator.share({
          title: "会場情報",
          text: "この会場チェックして！",
          url: url,
        });
      } catch (err) {
        console.log("シェアキャンセル");
      }
    } else {
      // 非対応（PCとか）はコピー
      await navigator.clipboard.writeText(url);
      alert("リンクをコピーしました！");
    }
  };

  return (
    <button
      onClick={handleClick}
      className="py-1 text-lg rounded-lg"
    >
      <FaShareFromSquare/>
    </button>
  );
}