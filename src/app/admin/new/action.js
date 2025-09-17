"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "$/utils/supabase/server";

export async function addActivity(formData) {
  const supabase = createClient();

  const title = formData.get("title");
  const date = formData.get("date");
  const location = formData.get("location");
  const numPeople = formData.get("numPeople");
  const description = formData.get("description");
  const imageUrl = formData.get("imageUrl");

  const { error } = await supabase.from("activities").insert([
    {
      title,
      date,
      location,
      numPeople,
      description,
      imageUrl,
    },
  ]);

  if (error) throw error;

  // 新しいデータを反映するため再検証
  revalidatePath("/activities");
  redirect("/activities");
}
