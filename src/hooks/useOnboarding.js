import { useState, useCallback } from "react";
import { onBoardingService } from "@/services/onboarding-service";

export const useOnboarding = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [onboardingStatus, setOnboardingStatus] = useState(null);

  const checkOnboardingStatus = useCallback(async (userId) => {
    if (!userId) return { isOnboarded: false, error: "No user ID provided" };

    setLoading(true);
    setError(null);

    try {
      const result = await onBoardingService.checkOnboardingStatus(userId);

      if (result.error) {
        setError(result.error.message);
        return { isOnboarded: false, error: result.error };
      }

      setOnboardingStatus(result.isOnboarded);
      return { isOnboarded: result.isOnboarded, error: null };
    } catch (err) {
      setError(err.message);
      return { isOnboarded: false, error: err };
    } finally {
      setLoading(false);
    }
  }, []);

  const markAsOnboarded = useCallback(async (userId) => {
    if (!userId) return { success: false, error: "No user ID provided" };

    setLoading(true);
    setError(null);

    try {
      const result = await onBoardingService.markAsOnboarded(userId);

      if (result.error) {
        setError(result.error.message);
        return { success: false, error: result.error };
      }

      setOnboardingStatus(true);
      return { success: true, error: null };
    } catch (err) {
      setError(err.message);
      return { success: false, error: err };
    } finally {
      setLoading(false);
    }
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return {
    // Methods
    checkOnboardingStatus,
    markAsOnboarded,
    clearError,

    // State
    loading,
    error,
    onboardingStatus,
  };
};
