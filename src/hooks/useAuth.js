import { useState } from "react";
import { authService } from "../services/auth-service";

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const signUp = async (formData) => {
    setLoading(true);
    setError(null);

    try {
      const result = await authService.signUp(formData);

      if (result.error) {
        setError(result.error.message);
        return { success: false, error: result.error, profileCreated: false };
      } else {
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
        return { success: true, data: result.data };
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
    signUp,
    signIn,
    signOut,
    clearError,

    loading,
    error,
  };
};
