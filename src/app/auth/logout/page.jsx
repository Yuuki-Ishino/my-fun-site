"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "$/utils/supabase/client";

export default function LogoutPage() {
  const supabase = createClient();
  const router = useRouter();

  useEffect(() => {
    const logout = async () => {
      // サインアウト
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error("サインアウト失敗:", error.message);
        return;
      }

      // ホームページにリダイレクト
      router.replace("/");
    };
    logout();
  }, [supabase, router]);

  return (
    <section className="flex items-center justify-center h-screen">
      <div className="text-white text-2xl">
        Logout...
      </div>
    </section>
  );
}
