import { createClient } from "./client";

export async function getSession() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getSession();
  if (error) {
    console.error("セッション獲得失敗", error.message);
    return null;
  }
  return data.session;
}

//dont be used
