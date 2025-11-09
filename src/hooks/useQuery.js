import { useState, useEffect, useCallback } from "react";

export const useQuery = (queryFn, dependencies = []) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const executeQuery = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await queryFn();
      setData(result);
      return result;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [queryFn]);

  useEffect(() => {
    executeQuery();
  }, [executeQuery, ...dependencies]);

  return {
    data,
    loading,
    error,
    refetch: executeQuery,
  };
};
