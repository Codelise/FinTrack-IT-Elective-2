import { useState, useEffect } from "react";
import { authService } from "../services/auth-service";
import { useOnboarding } from "./useOnboarding";
import { supabase } from "@/lib/supabase";
export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  const {
    checkOnboardingStatus,
    markAsOnboarded,
    loading: onboardingLoading,
    error: onboardingError,
  } = useOnboarding();

  useEffect(() => {
    const checkUserSession = async () => {
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession();
        if (session?.user) {
          setUser(session.user);
        }
      } catch (error) {
        console.error("Error checking user session:", error);
      }
    };

    checkUserSession();
  }, []);

  const signUp = async (formData) => {
    setLoading(true);
    setError(null);

    try {
      const result = await authService.signUp(formData);

      if (result.error) {
        setError(result.error.message);
        return { success: false, error: result.error, profileCreated: false };
      } else {
        // Set user state after successful signup
        if (result.data?.user) {
          setUser(result.data.user);
        }
        return {
          success: true,
          data: result.data,
          profileCreated: result.data?.profileCreated ?? false,
        };
      }
    } catch (err) {
      setError(err.message);
      return { success: false, error: err, profileCreated: false };
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (email, password) => {
    setLoading(true);
    setError(null);

    try {
      const result = await authService.signIn({ email, password });

      if (result.error) {
        setError(result.error.message);
        return { success: false, error: result.error };
      } else {
        // Set user state after successful login
        if (result.data?.user) {
          setUser(result.data.user);

          // Check onboarding status for this user
          const onboardingResult = await checkOnboardingStatus(
            result.data.user.id
          );

          return {
            success: true,
            data: result.data,
            isOnboarded: onboardingResult.isOnboarded,
          };
        }

        return { success: true, data: result.data, isOnboarded: false };
      }
    } catch (err) {
      setError(err.message);
      return { success: false, error: err };
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    setLoading(true);
    try {
      const result = await authService.signOut();
      setUser(null); // Clear user state on signout
      return { success: true, error: result.error };
    } catch (err) {
      return { success: false, error: err };
    } finally {
      setLoading(false);
    }
  };

  const clearError = () => {
    setError(null);
  };

  return {
    // Auth Methods
    signUp,
    signIn,
    signOut,
    clearError,

    // Onboarding Methods
    checkOnboardingStatus,
    markAsOnboarded,

    // State
    loading: loading || onboardingLoading,
    error: error || onboardingError,
    user,
  };
};
