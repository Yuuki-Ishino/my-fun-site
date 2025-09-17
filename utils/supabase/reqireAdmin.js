"use server";

import { createClient } from "./server";
import { redirect } from "next/navigation";

export async function requireAdmin() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/auth/login");

  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("uid", user.id)
    .single();

  if (!profile || profile.role !== "admin") redirect("/");

  return { supabase, user, profile };
}
