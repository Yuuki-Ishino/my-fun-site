"use client";

import { useState } from "react";
import imageCompression from "browser-image-compression";
import { addActivity } from "./action";
import { createClient } from "$/utils/supabase/client";
import dayjs from "dayjs";

export default function AddActivityForm() {
  const supabase = createClient();
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const handleFileChange = async (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    try {
      const options = {
        maxSizeMB: 0.1,
        maxWidthOrHeight: 1920,
        useWebWorker: false,
      };

      const compressedFile = await imageCompression(selectedFile, options);
      setFile(compressedFile);

      setPreviewUrl(URL.createObjectURL(compressedFile));
    } catch (error) {
      alert("画像圧縮に失敗しました。別の画像を選んでください。");
      setFile(null);
    }
  };

  const handleSubmit = async (e) => {
		e.preventDefault();
		if (submitting) return ;
		setSubmitting(true);

		try {
			const formData = new FormData(e.currentTarget);

			if (file) {
				const fileName = `${dayjs().format("YYYYMMDD_HHmmss")}-${file.name}`;
				const blobFile = new File([file], fileName, { type: file.type});
				formData.set("image", blobFile);
			}

			await addActivity(formData);
			window.location.href = "/activities";
		} catch (err) {
			console.error(err);
			alert("投稿に失敗しました。");
		} finally {
			setSubmitting(false);
		}
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#181619] pt-20 text-white w-[100%] max-w-[800px] p-6 space-y-2 mx-auto"
    >
      <h2 className="text-2xl font-bold border-b border-white pb-2">
        新規投稿
      </h2>

      <div className="border-b border-white pb-2">
        {/* 画像 */}
        <img
          src={previewUrl || "/images/nothing.jpg"}
          alt="プレビュー"
          className="w-full h-64 object-cover rounded-lg mb-2"
        />

        {/* 画像アップロード */}
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleFileChange}
          className="bg-transparent border border-white/20 rounded p-2 w-full text-white file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"
        />
      </div>

      <div className="border-b border-white pb-2">
        {/* タイトル */}
        <input
          type="text"
          name="title"
          placeholder="タイトル"
          className="bg-transparent border border-white/20 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 "
          required
        />
      </div>

      <div className="border-b border-white space-y-2 pb-2">
        {/* 日付 */}
        <input
          type="date"
          name="date"
					placeholder="日付"
          className="bg-transparent border border-white/20 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        {/* 場所 */}
        <input
          type="text"
          name="location"
          placeholder="場所"
          className="bg-transparent border border-white/20 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* 募集人数 */}
        <input
          type="number"
          name="capacity"
          placeholder="募集人数"
          className="bg-transparent border border-white/20 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* 参加人数 */}
        <input
          type="number"
          name="numPeople"
          placeholder="参加人数"
          className="bg-transparent border border-white/20 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="border-b border-white ">
        {/* 詳細説明 */}
        <textarea
          name="description"
          placeholder="説明"
          className="bg-transparent border border-white/20 rounded p-2 w-full whitespace-pre-line focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={7}
        />
      </div>

      {/* 送信ボタン */}
      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg transition"
      >
        {submitting ? "送信中..." : "追加"}
      </button>
    </form>
  );
}
