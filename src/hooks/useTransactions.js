import { useState, useEffect } from "react";
import {
  getTransactions,
  createTransaction,
} from "../services/database/transaction-queries";

export const useTransactions = (userId, filters = {}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTransactions = async () => {
    try {
      setLoading(true);
      const { data: transactions, error } = await getTransactions(
        userId,
        filters
      );
      if (error) setError(error);
      else setData(transactions);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userId) fetchTransactions();
  }, [userId, JSON.stringify(filters)]);

  const addTransaction = async (transactionData) => {
    const { data: newTransaction, error } = await createTransaction(
      transactionData
    );
    if (!error) {
      setData((prev) => [newTransaction, ...prev]);
    }
    return { data: newTransaction, error };
  };

  return {
    transactions: data,
    loading,
    error,
    refetch: fetchTransactions,
    addTransaction,
  };
};
