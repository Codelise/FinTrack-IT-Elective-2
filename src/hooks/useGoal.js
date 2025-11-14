import { useState, useCallback } from "react";
import { goalService } from "@/services/goal-service";

export const useGoal = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [goals, setGoals] = useState([]);

  const getGoals = useCallback(async (userId) => {
    if (!userId) return { data: null, error: "No user ID provided" };

    setLoading(true);
    setError(null);

    try {
      const result = await goalService.getGoals(userId);

      if (result.error) {
        setError(result.error.message);
        return { data: null, error: result.error };
      }

      setGoals(result.data || []);
      return { data: result.data, error: null };
    } catch (err) {
      setError(err.message);
      return { data: null, error: err };
    } finally {
      setLoading(false);
    }
  }, []);

  const createGoal = useCallback(async (goalData) => {
    setLoading(true);
    setError(null);

    try {
      const result = await goalService.createGoal(goalData);

      if (result.error) {
        setError(result.error.message);
        return { data: null, error: result.error };
      }

      if (result.data) {
        setGoals((prev) => [...prev, result.data[0]]);
      }

      return { data: result.data, error: null };
    } catch (err) {
      setError(err.message);
      return { data: null, error: err };
    } finally {
      setLoading(false);
    }
  }, []);

  const createMultipleGoals = useCallback(async (goalsArray) => {
    setLoading(true);
    setError(null);

    try {
      const result = await goalService.createMultipleGoals(goalsArray);

      if (result.error) {
        setError(result.error.message);
        return { data: null, error: result.error };
      }

      if (result.data) {
        setGoals((prev) => [...prev, ...result.data]);
      }

      return { data: result.data, error: null };
    } catch (err) {
      setError(err.message);
      return { data: null, error: err };
    } finally {
      setLoading(false);
    }
  }, []);

  const updateGoal = useCallback(async (goalId, updates) => {
    setLoading(true);
    setError(null);

    try {
      const result = await goalService.updateGoal(goalId, updates);

      if (result.error) {
        setError(result.error.message);
        return { data: null, error: result.error };
      }

      if (result.data) {
        setGoals((prev) =>
          prev.map((goal) => (goal.id === goalId ? result.data[0] : goal))
        );
      }

      return { data: result.data, error: null };
    } catch (err) {
      setError(err.message);
      return { data: null, error: err };
    } finally {
      setLoading(false);
    }
  }, []);

  const deleteGoal = useCallback(async (goalId) => {
    setLoading(true);
    setError(null);

    try {
      const result = await goalService.deleteGoal(goalId);

      if (result.error) {
        setError(result.error.message);
        return { error: result.error };
      }

      setGoals((prev) => prev.filter((goal) => goal.id !== goalId));

      return { error: null };
    } catch (err) {
      setError(err.message);
      return { error: err };
    } finally {
      setLoading(false);
    }
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return {
    // Methods
    getGoals,
    createGoal,
    createMultipleGoals,
    updateGoal,
    deleteGoal,
    clearError,

    // State
    loading,
    error,
    goals,
  };
};
