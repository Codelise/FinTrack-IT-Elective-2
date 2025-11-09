import { supabase } from "@/lib/supabase";

export async function getBudgets(userId) {
  const { data, error } = await supabase
    .from("budgets")
    .select(`*, categories(*)`)
    .eq("user_id", userId);

  return { data, error };
}
