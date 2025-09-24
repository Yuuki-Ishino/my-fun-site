"use server";

import { createClient } from "$/utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function addActivity(formData) {
  const supabase = createClient();

  let imageUrl = "/images/nothing.jpg";
  const imageFile = formData.get("image");

  if (imageFile && imageFile.size > 0) {
    const fileName = imageFile.name;
    const { error: uploadError } = await supabase.storage
      .from("activity-imgs")
      .upload(fileName, imageFile, { contentType: imageFile.type });
    if (uploadError) throw uploadError;

    const { data } = supabase.storage
      .from("activity-imgs")
      .getPublicUrl(fileName);
    imageUrl = data.publicUrl;
  }

  const { error } = await supabase.from("activities").insert([
    {
      title: formData.get("title"),
      date: formData.get("date") || null,
      subdate: formData.get("subdate") || null,
      location: formData.get("location"),
      capacity: formData.get("capacity") || null,
      numPeople: formData.get("numPeople") || null,
      description: formData.get("description"),
      imageUrl,
    },
  ]);

  if (error) throw error;

  revalidatePath("/activities");
}
