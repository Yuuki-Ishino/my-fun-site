"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "$/utils/supabase/client";

export default function CallbackPage() {
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    const handleLogin = async () => {
      // セッション取得
      const {
        data: { session },
        error: sessionError,
      } = await supabase.auth.getSession();
      if (sessionError || !session) {
        console.error("セッション取得失敗:", sessionError);
        return;
      }

      const user = session.user;

      if (!user.email.endsWith("@toyo.jp")) {
        router.replace("/auth/logout");
        return;
      }

      try {
        // profiles に存在するか確認
        const { data: profile, error: profileError } = await supabase
          .from("profiles")
          .select("*")
          .eq("uid", user.id)
          .single();

        if (profileError && profileError.code !== "PGRST116") {
          console.error("profiles 取得失敗:", profileError);
          return;
        }

        // 存在しなければ追加
        if (!profile) {
          const { error: insertError } = await supabase
            .from("profiles")
            .insert({
              uid: user.id,
              email: user.email,
              role: "visitor", // デフォルト role
            });

          if (insertError) {
            console.error("profiles 作成失敗:", insertError);
            return;
          }
        }

        // 成功したらトップページへ
        router.replace("/auth/logout");
      } catch (err) {
        console.error("ログイン後処理でエラー:", err);
      }
    };

    handleLogin();
  }, [router, supabase]);

  return (
    <section className="flex items-center justify-center h-screen">
      <div>Login...</div>
    </section>
  );
}
