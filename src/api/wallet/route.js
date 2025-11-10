import { supabase } from "@/lib/supabase";

export async function getUserWallets(userId) {
  const { data, error } = await supabase
    .from("wallets")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  return { data, error };
}

export async function createWallet(walletData) {
  const { data, error } = await supabase
    .from("wallets")
    .insert([walletData])
    .select();

  return { data, error };
}
