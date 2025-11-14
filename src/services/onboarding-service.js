import { supabase } from "@/lib/supabase";

export class OnBoardingService {
  async checkOnboardingStatus(userId) {
    try {
      const { data, error } = await supabase
        .from("users")
        .select("is_onboarded")
        .eq("user_id", userId)
        .single();

      if (error) {
        console.error("Error checking onboarding status:", error);
        return { isOnboarded: false, error };
      }

      return { isOnboarded: data?.is_onboarded || false, error: null };
    } catch (error) {
      console.error("Exception checking onboarding status:", error);
      return { isOnboarded: false, error };
    }
  }

  async markAsOnboarded(userId) {
    try {
      console.log(
        "🔧 DEBUG: Attempting to mark user as onboarded, user_id:",
        userId
      );

      const { data, error } = await supabase
        .from("users")
        .update({ is_onboarded: true })
        .eq("user_id", userId)
        .select()
        .single();

      if (error) {
        console.error("❌ Error marking user as onboarded:", error);
        return { success: false, error };
      }

      console.log("✅ Successfully marked user as onboarded, data:", data);
      return { success: true, data, error: null };
    } catch (error) {
      console.error("❌ Exception marking user as onboarded:", error);
      return { success: false, error };
    }
  }

  async getOnboardingProgress(userId) {
    try {
      const { data, error } = await supabase
        .from("users")
        .select("is_onboarded")
        .eq("user_id", userId)
        .single();

      if (error) {
        return { isOnboarded: false, error };
      }

      return { isOnboarded: data?.is_onboarded || false, error: null };
    } catch (error) {
      return { isOnboarded: false, error };
    }
  }
}

export const onBoardingService = new OnBoardingService();
