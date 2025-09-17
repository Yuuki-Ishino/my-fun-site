import AddActivityForm from "./AddActivityForm";

import { createClient } from "$/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function addActivityForm() {
  const supabase = createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect("/auth/login");
  }

  return (
    <>
      <AddActivityForm />
    </>
  );
}
