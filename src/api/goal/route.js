import { supabase } from "@/lib/supabase";

export async function getGoals(userId) {
  const { data, error } = await supabase
    .from("goals")
    .select("*")
    .eq("user_id", userId)
    .order("deadline");

  return { data, error };
}
