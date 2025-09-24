"use server";

import { requireAdmin } from "$/utils/supabase/reqireAdmin";
import { redirect } from "next/navigation";

export async function deleteActivity(activity) {
  const { supabase } = await requireAdmin();

  // DBから削除
  const { error: dbError } = await supabase
    .from("activities")
    .delete()
    .eq("id", activity.id);

  if (dbError) throw dbError;

  // ストレージの古い画像削除（デフォルト画像は残す）
  const oldFilePath = activity.imageUrl?.split(
    "/storage/v1/object/public/activity-imgs/",
  )[1];
  if (oldFilePath && !oldFilePath.includes("nothing.jpg")) {
    await supabase.storage.from("activity-imgs").remove([oldFilePath]);
  }

  redirect("/activities");
}
