import { useState, useCallback } from "react";
import { budgetService } from "@/services/budget-service";

export const useBudget = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [budgets, setBudgets] = useState([]);

  const getBudgets = useCallback(async (userId) => {
    if (!userId) return { data: null, error: "No user ID provided" };

    setLoading(true);
    setError(null);

    try {
      const result = await budgetService.getBudgets(userId);

      if (result.error) {
        setError(result.error.message);
        return { data: null, error: result.error };
      }

      setBudgets(result.data || []);
      return { data: result.data, error: null };
    } catch (err) {
      setError(err.message);
      return { data: null, error: err };
    } finally {
      setLoading(false);
    }
  }, []);

  const createBudget = useCallback(async (budgetData) => {
    setLoading(true);
    setError(null);

    try {
      const result = await budgetService.createBudget(budgetData);

      if (result.error) {
        setError(result.error.message);
        return { data: null, error: result.error };
      }

      if (result.data) {
        setBudgets((prev) => [...prev, result.data[0]]);
      }

      return { data: result.data, error: null };
    } catch (err) {
      setError(err.message);
      return { data: null, error: err };
    } finally {
      setLoading(false);
    }
  }, []);

  const createMultipleBudgets = useCallback(async (budgetsArray) => {
    setLoading(true);
    setError(null);

    try {
      const result = await budgetService.createMultipleBudgets(budgetsArray);

      if (result.error) {
        setError(result.error.message);
        return { data: null, error: result.error };
      }

      if (result.data) {
        setBudgets((prev) => [...prev, ...result.data]);
      }

      return { data: result.data, error: null };
    } catch (err) {
      setError(err.message);
      return { data: null, error: err };
    } finally {
      setLoading(false);
    }
  }, []);

  const updateBudget = useCallback(async (budgetId, updates) => {
    setLoading(true);
    setError(null);

    try {
      const result = await budgetService.updateBudget(budgetId, updates);

      if (result.error) {
        setError(result.error.message);
        return { data: null, error: result.error };
      }

      if (result.data) {
        setBudgets((prev) =>
          prev.map((budget) =>
            budget.id === budgetId ? result.data[0] : budget
          )
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

  const deleteBudget = useCallback(async (budgetId) => {
    setLoading(true);
    setError(null);

    try {
      const result = await budgetService.deleteBudget(budgetId);

      if (result.error) {
        setError(result.error.message);
        return { error: result.error };
      }

      setBudgets((prev) => prev.filter((budget) => budget.id !== budgetId));

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
    getBudgets,
    createBudget,
    createMultipleBudgets,
    updateBudget,
    deleteBudget,
    clearError,

    // State
    loading,
    error,
    budgets,
  };
};
