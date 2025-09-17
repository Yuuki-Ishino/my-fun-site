"use client";
import { useState } from "react";
import { createClient } from "$/utils/supabase/client";

export default function ActivityForm({ initialData, onSubmit }) {
  const supabase = createClient();
  const [form, setForm] = useState(
    initialData || {
      title: "",
      date: "",
      location: "",
      content: "",
      image: "",
    },
  );
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let imageUrl = form.image;
    if (file) {
      // 1. Storage にアップロード
      const fileExt = file.name.split(".").pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const { error: uploadError } = await supabase.storage
        .from("activities") // ← Storage バケット名
        .upload(fileName, file);

      if (uploadError) {
        console.error("画像アップロード失敗:", uploadError);
        return;
      }

      // 2. 公開URLを取得
      const { data } = supabase.storage
        .from("activities")
        .getPublicUrl(fileName);

      imageUrl = data.publicUrl;
    }

    // 3. onSubmit に渡す
    onSubmit({ ...form, image: imageUrl });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="タイトル"
        className="border p-2 rounded"
      />
      <input
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
        className="border p-2 rounded"
      />
      <input
        name="location"
        value={form.location}
        onChange={handleChange}
        placeholder="場所"
        className="border p-2 rounded"
      />
      <textarea
        name="content"
        value={form.content}
        onChange={handleChange}
        placeholder="本文"
        className="border p-2 rounded"
      />
      <input type="file" onChange={handleFileChange} />

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        保存
      </button>
    </form>
  );
}
