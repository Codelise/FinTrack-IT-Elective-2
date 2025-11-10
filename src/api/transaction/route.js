import { supabase } from "@/lib/supabase";

export async function getTransactions(userId, filters = {}) {
  let query = supabase
    .from("transactions")
    .select(`*, categories (*)`)
    .eq("user_id", userId);

  if (filters.wallet_id) {
    query = query.eq("wallet_id", filters.wallet_id);
  }

  if (filters.startDate && filters.endDate) {
    query = query.gte("date", filters.startDate).lte("date", filters.endDate);
  }

  const { data, error } = await query.order("date", { ascending: false });
  return { data, error };
}

export async function createTransaction(transactionData) {
  const { data, error } = await supabase
    .from("transactions")
    .insert([transactionData])
    .select();

  return { data, error };
}
