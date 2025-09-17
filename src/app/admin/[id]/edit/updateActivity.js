"use server";

import { requireAdmin } from "$/utils/supabase/reqireAdmin";

export async function updateActivity(id, formDataObj) {
  const { supabase } = await requireAdmin();
  const updateValues = Object.fromEntries(formDataObj.entries());

  const { data, error } = await supabase
    .from("activities")
    .update(updateValues)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error("updateActivity error:", error);
    throw new Error("投稿の更新に失敗しました。");
  }

  return data;
}
