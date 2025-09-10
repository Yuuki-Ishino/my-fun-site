"use client";
import { createClient } from "$/utils/supabase/client";

export default function LoginPage() {
  const supabase = createClient();
  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: '/auth/callback', // OAuth完了後に戻るページ
      },
    });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <button
        onClick={handleLogin}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Sign in with Google
      </button>
    </div>
  );
}
