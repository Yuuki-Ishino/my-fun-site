"use server";

import { requireAdmin } from "$/utils/supabase/reqireAdmin";

const toNumberOrNull = (val) =>
  val === "" || val === undefined ? null : Number(val);

export async function updateActivity(id, formDataObj) {
  const { supabase } = await requireAdmin();
  const updateValues = Object.fromEntries(formDataObj.entries());

	if ("capacity" in updateValues) {
    updateValues.capacity = toNumberOrNull(updateValues.capacity);
  }
  if ("numPeople" in updateValues) {
    updateValues.numPeople = toNumberOrNull(updateValues.numPeople);
  }

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
