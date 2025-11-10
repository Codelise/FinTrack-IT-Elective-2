import { supabase } from "@/lib/supabase";

export async function getCategories(userId) {
  const { data, error } = await supabase
    .from("categories")
    .select("*")
    .eq("user_id", userId)
    .order("category_name");

  return { data, error };
}
