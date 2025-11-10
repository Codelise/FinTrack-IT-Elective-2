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
