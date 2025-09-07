"use client";

import { useState } from "react";
import imageCompression from "browser-image-compression";
import { addActivity } from "./action";
import { useFormStatus } from "react-dom";

export default function AddActivityForm() {
	const [file, setFile] = useState(null);
	const { pending } = useFormStatus();

	const handleFileChange = async (e) => {
		const selectedFile = e.target.files[0];
		if (!selectedFile) return;

		try {
			const options = {
				maxSizeMB: 0.1,
				maxWidthOrHeight: 1920,
				useWebWorker: true,
			};

			const compressedFile = await imageCompression(selectedFile, options);
			setFile(compressedFile);
		} catch (error) {
			console.log("画像圧縮エラー", error);
			setFile(selectedFile);
		}
	};

	const handleSubmit = async (formData) => {
		if (file) {
			formData.set("image", file);
		}
		await addActivity(formData);
	};

	return (
		<form action={handleSubmit} className="space-y-4 max-w-md mx-auto p-4 pt-20" >
			<input type="text" name="title" placeholder="タイトル" className="border p-2 w-full" required />
			<input type="date" name="date" className="border p-2 w-full" required />
			<input type="text" name="location" placeholder="場所" className="border p-2 w-full" />
			<input type="number" name="numPeople" placeholder="参加人数" className="border p-2 w-full" />
			<textarea name="description" placeholder="説明" className="border p-2 w-full" rows={5} />
			<input type="file" name="image" className="border" accept="image/*" onChange={handleFileChange}/>
			<button type="submit" disabled={pending} className="bg-blue-500 text-white px-4 py-2 rounded">
				{pending ? "送信中..." : "追加"}
			</button>
		</form>
	);
}