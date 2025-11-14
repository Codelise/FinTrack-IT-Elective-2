import { supabase } from "@/lib/supabase";

export async function getBudgets(userId) {
  const { data, error } = await supabase
    .from("budgets")
    .select(`*, categories(*)`)
    .eq("user_id", userId);

  return { data, error };
}

export async function createBudget(budgetData) {
  const { data, error } = await supabase
    .from("budgets")
    .insert([budgetData])
    .select();

  return { data, error };
}

export async function createMultipleBudgets(budgetsArray) {
  const { data, error } = await supabase
    .from("budgets")
    .insert(budgetsArray)
    .select();

  return { data, error };
}

export async function updateBudget(budgetId, updates) {
  const { data, error } = await supabase
    .from("budgets")
    .update(updates)
    .eq("id", budgetId)
    .select();

  return { data, error };
}

export async function deleteBudget(budgetId) {
  const { error } = await supabase.from("budgets").delete().eq("id", budgetId);

  return { error };
}
