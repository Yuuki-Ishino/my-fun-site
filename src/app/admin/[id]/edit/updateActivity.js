"use server";

import { requireAdmin } from "$/utils/supabase/reqireAdmin";

const toNumberOrNull = (val) =>
  val === "" || val === undefined ? null : Number(val);

const toDateOrNull = (val) => (val == "" || val == undefined ? null : val);

export async function updateActivity(id, formDataObj) {
  const { supabase } = await requireAdmin();
  const updateValues = Object.fromEntries(formDataObj.entries());

  // ""をnullに変換
  if ("capacity" in updateValues) {
    updateValues.capacity = toNumberOrNull(updateValues.capacity);
  }
  if ("numPeople" in updateValues) {
    updateValues.numPeople = toNumberOrNull(updateValues.numPeople);
  }
  if ("date" in updateValues) {
    updateValues.date = toDateOrNull(updateValues.date);
  }
  if ("subdate" in updateValues) {
    updateValues.subdate = toDateOrNull(updateValues.subdate);
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
