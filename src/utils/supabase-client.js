import { supabase } from "@/lib/supabase";

export async function signUp(email, password, userData) {
  try {
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          first_name: userData.firstName,
          last_name: userData.lastName,
        },
      },
    });

    if (authError) {
      return { data: null, error: authError };
    }

    if (authData.user) {
      const { data: profileResult, error: profileError } = await supabase
        .from("users")
        .insert([
          {
            user_id: authData.user.id,
            first_name: userData.firstName,
            last_name: userData.lastName,
            email: email,
          },
        ])
        .select();

      if (profileError) {
        console.warn(
          "Profile creation had issues, but auth user created:",
          profileError
        );
        return {
          data: {
            user: authData.user,
            profileCreated: false,
          },
          error: null,
        };
      }

      return {
        data: {
          user: authData.user,
          profile: profileResult[0],
          profileCreated: true,
        },
        error: null,
      };
    }

    return { data: authData, error: null };
  } catch (error) {
    console.error("Signup error:", error);
    return { data: null, error };
  }
}
export async function signIn(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { data, error };
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  return { error };
}

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

export async function getCategories(userId) {
  const { data, error } = await supabase
    .from("categories")
    .select("*")
    .eq("user_id", userId)
    .order("category_name");

  return { data, error };
}

export async function getBudgets(userId) {
  const { data, error } = await supabase
    .from("budgets")
    .select(`*, categories(*)`)
    .eq("user_id", userId);

  return { data, error };
}

export async function getGoals(userId) {
  const { data, error } = await supabase
    .from("goals")
    .select("*")
    .eq("user_id", userId)
    .order("deadline");

  return { data, error };
}
