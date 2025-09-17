"use server";

import { redirect } from "next/navigation";
import { requireAdmin } from "$/utils/supabase/reqireAdmin";
import EditActivityForm from "./EditActivityForm";

// サーバーコンポーネント
export default async function EditActivityPage({ params }) {
  const { supabase } = await requireAdmin();
  const { id } = await params;

  // 編集対象の投稿取得
  const { data: activity, error } = await supabase
    .from("activities")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !activity) redirect("/activities"); // 投稿がなければ一覧へ

  return <EditActivityForm activity={activity} />;
}
