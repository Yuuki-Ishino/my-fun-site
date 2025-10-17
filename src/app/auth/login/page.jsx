"use client";

import { createClient } from "$/utils/supabase/client";

export default function LoginPage() {
  const supabase = createClient();

  const handleLogin = async () => {
    await supabase.auth.signOut();
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "http://bbooth.vercel.app/auth/callback",
      },
    });
  };

  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <p className="text-white pb-3">@toyo.jpでのログインが必要です。</p>
      <button
        onClick={handleLogin}
        className="bg-blue-500 hover:bg-blue-600 active:bg-blue-600 text-white px-4 py-2 rounded"
      >
        Sign in with Google
      </button>
    </section>
  );
}
