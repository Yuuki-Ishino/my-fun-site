"use client";

import { useState } from "react";
import imageCompression from "browser-image-compression";
import { addActivity } from "./action";
import { useFormStatus } from "react-dom";
import { createClient } from "$/utils/supabase/client";
import dayjs from "dayjs";

export default function AddActivityForm() {
	const [file, setFile] = useState(null);
	const { pending } = useFormStatus();
	const supabase = createClient();

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
		} catch (error) {
			alert("画像圧縮に失敗しました。別の画像を選んでください。");
			console.log("画像圧縮エラー", error);
			setFile(null);
		}
	};

	const handleSubmit = async (formData) => {
		let imageUrl = null;
		
		if (file) {
			const fileName = `${dayjs().format("YYYYMMDD_HHmmss")}-${file.name}`;
			const {error} = await supabase.storage
				.from("activity-imgs")
				.upload(fileName, file, { contentType: file.type});
			if (error) throw error;

			const {data} = supabase.storage.from("activity-imgs").getPublicUrl(fileName);
			imageUrl = data.publicUrl;
		}
		formData.delete("image");
		formData.set("imageUrl", imageUrl);
		await addActivity(formData);
	};

	return (
		<form action={handleSubmit} className="space-y-4 max-w-md mx-auto p-4 pt-20" >
			<input type="text" name="title" placeholder="タイトル" className="border p-2 w-full" required />
			<input type="date" name="date" className="border p-2 w-full" required />
			<input type="text" name="location" placeholder="場所" className="border p-2 w-full" />
			<input type="number" name="numPeople" placeholder="参加人数" className="border p-2 w-full" />
			<textarea name="description" placeholder="説明" className="border p-2 w-full whitespace-pre-line" rows={5} />
			<input type="file" name="image" className="border" accept="image/*" onChange={handleFileChange}/>
			<button type="submit" disabled={pending} className="bg-blue-500 text-white px-4 py-2 rounded">
				{pending ? "送信中..." : "追加"}
			</button>
		</form>
	);
}