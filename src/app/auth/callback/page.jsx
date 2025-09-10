"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "$/utils/supabase/client";

export default function CallbackPage() {
  	const router = useRouter();
	const supabase = createClient();
  	useEffect(() => {
    const getSession = async () => {
    	const { data, error: sessionError } = await supabase.auth.getSession();
    	if (sessionError) {
    		console.error(error);
    		return;
    	}
      
		const user = data.session.user;

		const { data: udata, error: profileError } = await supabase
			.from("profiles")
			.select("*")
			.eq("uid", user.id)
			.single();

		console.log(user.id);
		console.log(udata);

		if (profileError && profileError.code !== "PGRST116") {
			console.error("profiles取得失敗", profileError);
			return;
		}

		if (!udata) {
			const {error} = await supabase.from("profiles").upsert([
			{
				uid: user.id,
				email: user.email,
				role: "visitor",
			}
			]);

			if (error) {
				console.error("profile作成失敗:", error);
				return;
			}
		}
      router.replace("https://bbooth.vercel.app/"); // ログイン後トップページへ
    };

    getSession();
  }, [router]);

  return <p>ログイン処理中…</p>;
}
