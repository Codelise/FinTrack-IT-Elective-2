import { useState, useEffect } from "react";
import { budgetService } from "../services/api/budget-service";

export const useBudgets = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBudgets = async () => {
    try {
      setLoading(true);
      setError(null);
      const budgets = await budgetService.getAllBudgets();
      setData(budgets);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBudgets();
  }, []);

  const refetch = () => {
    fetchBudgets();
  };

  const createBudget = async (budgetData) => {
    try {
      const newBudget = await budgetService.createBudget(budgetData);
      setData((prev) => [...prev, newBudget]);
      return newBudget;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  return {
    data,
    loading,
    error,
    refetch,
    createBudget,
  };
};
