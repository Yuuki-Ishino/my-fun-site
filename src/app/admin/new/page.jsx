import AddActivityForm from "./AddActivityForm";

import { requireAdmin } from "$/utils/supabase/reqireAdmin";
import { redirect } from "next/navigation";

export default async function addActivityForm() {
  const { supabase } = await requireAdmin();
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
