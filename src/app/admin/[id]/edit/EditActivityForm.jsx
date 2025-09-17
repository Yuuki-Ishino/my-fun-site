"use client";

import { useState } from "react";
import imageCompression from "browser-image-compression";
import { createClient } from "$/utils/supabase/client";
import { useFormStatus } from "react-dom";
import dayjs from "dayjs";
import { updateActivity } from "./updateActivity";

export default function EditActivityForm({ activity }) {
  const supabase = createClient();
  const [file, setFile] = useState();
  const { pending } = useFormStatus();
  const [previewUrl, setPreviewUrl] = useState(activity.imageUrl);

  const [formData, setFormData] = useState({
    title: activity.title,
    date: activity.date,
    location: activity.location,
    numPeople: activity.numPeople,
    description: activity.description,
    imageUrl: activity.imageUrl,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

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
      console.log("画像圧縮エラー", error);
      setFile(null);
    }
  };

  const handleSubmit = async (formData) => {
    let imageUrl = formData.get("imageUrl") || activity.imageUrl; // 既存の画像を維持
    const oldFilePath = activity.imageUrl?.split(
      "/storage/v1/object/public/activity-imgs/",
    )[1];

    if (file) {
      const fileName = `${dayjs().format("YYYYMMDD_HHmmss")}-${file.name}`;
      const { error } = await supabase.storage
        .from("activity-imgs")
        .upload(fileName, file, { contentType: file.type });
      if (error) throw error;

      const { data } = supabase.storage
        .from("activity-imgs")
        .getPublicUrl(fileName);
      imageUrl = data.publicUrl;

      if (oldFilePath && !oldFilePath.includes("nothing.jpg")) {
        await supabase.storage.from("activity-imgs").remove([oldFilePath]);
      }
    }

    // フォームデータを整理
    formData.delete("image"); // 生のファイルは送らない
    formData.set("imageUrl", imageUrl);

    // ここで update API / Server Action を呼ぶ
    await updateActivity(activity.id, formData);
  };

  return (
    <form
      action={handleSubmit}
      className="bg-[#181619] pt-20 text-white w-[100%] max-w-[800px] p-6 space-y-2 mx-auto"
    >
      <h2 className="text-2xl font-bold border-b border-white pb-2">
        投稿編集
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
          className="bg-transparent border border-white/20 rounded p-2 w-full text-white file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600 active:file:bg-blue-600"
        />
      </div>

      <div className="border-b border-white pb-2">
        {/* タイトル */}
        <input
          type="text"
          name="title"
          onChange={handleChange}
          value={formData.title ?? ""}
          placeholder="タイトル"
          className="bg-transparent border border-white/20 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div className="border-b border-white space-y-2 pb-2">
        {/* 日付 */}
        <input
          type="date"
          name="date"
          onChange={handleChange}
          value={formData.date ?? ""}
          className="bg-transparent border border-white/20 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        {/* 場所 */}
        <input
          type="text"
          name="location"
          onChange={handleChange}
          value={formData.location ?? ""}
          placeholder="場所"
          className="bg-transparent border border-white/20 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        {/* 参加人数 */}
        <input
          type="number"
          name="numPeople"
          onChange={handleChange}
          value={formData.numPeople ?? ""}
          placeholder="参加人数"
          className="bg-transparent border border-white/20 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div className="border-b border-white ">
        {/* 詳細説明 */}
        <textarea
          name="description"
          onChange={handleChange}
          value={formData.description ?? ""}
          placeholder="説明"
          className="bg-transparent border border-white/20 rounded p-2 w-full whitespace-pre-line focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={7}
          required
        />
      </div>

      {/* 送信ボタン */}
      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 active:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg transition"
      >
        更新
      </button>

      {/* 削除ボタン */}
      <button
        type=""
        className="w-full bg-red-500 hover:bg-red-600 active:bg-red-500 text-white font-semibold px-4 py-2 rounded-lg transition"
      >
        削除
      </button>
    </form>
  );
}
