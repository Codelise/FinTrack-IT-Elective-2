import { supabase } from "@/lib/supabase";

export async function getGoals(userId) {
  const { data, error } = await supabase
    .from("goals")
    .select("*")
    .eq("user_id", userId)
    .order("deadline");

  return { data, error };
}

export async function createGoal(goalData) {
  const { data, error } = await supabase
    .from("goals")
    .insert([goalData])
    .select();

  return { data, error };
}

export async function createMultipleGoals(goalsArray) {
  const { data, error } = await supabase
    .from("goals")
    .insert(goalsArray)
    .select();

  return { data, error };
}

export async function updateGoal(goalId, updates) {
  const { data, error } = await supabase
    .from("goals")
    .update(updates)
    .eq("id", goalId)
    .select();

  return { data, error };
}

export async function deleteGoal(goalId) {
  const { error } = await supabase.from("goals").delete().eq("id", goalId);

  return { error };
}
