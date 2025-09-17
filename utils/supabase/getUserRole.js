"use client";

import { createClient } from "./client";

export async function getUserRole() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return null;

  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("uid", user.id)
    .single();

  return profile?.role ?? null;
}
