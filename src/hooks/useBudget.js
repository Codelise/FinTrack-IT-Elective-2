import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { budgetService } from "@/services/budget-service";

export const budgetKeys = {
  all: ["budgets"],
  lists: () => [...budgetKeys.all, "list"],
  list: (filters) => [...budgetKeys.lists(), { filters }],
  details: () => [...budgetKeys.all, "detail"],
  detail: (id) => [...budgetKeys.details(), id],
};

export const useBudget = () => {
  const queryClient = useQueryClient();

  const getBudgets = (userId) => {
    return useQuery({
      queryKey: budgetKeys.list({ userId }),
      queryFn: () => budgetService.getBudgets(userId),
      enabled: !!userId,
      staleTime: 2 * 60 * 1000, // 2 minutes
    });
  };

  const createBudgetMutation = useMutation({
    mutationFn: budgetService.createBudget,
    onSuccess: (result) => {
      if (result.data) {
        queryClient.invalidateQueries({ queryKey: budgetKeys.lists() });
      }
    },
    onError: (error) => {
      console.error("Error creating budget:", error);
    },
  });

  const createMultipleBudgetsMutation = useMutation({
    mutationFn: budgetService.createMultipleBudgets,
    onSuccess: (result) => {
      if (result.data) {
        queryClient.invalidateQueries({ queryKey: budgetKeys.lists() });
      }
    },
  });

  const updateBudgetMutation = useMutation({
    mutationFn: ({ budgetId, updates }) =>
      budgetService.updateBudget(budgetId, updates),
    onSuccess: (result, variables) => {
      if (result.data) {
        queryClient.setQueryData(budgetKeys.lists(), (old) =>
          old?.map((budget) =>
            budget.id === variables.budgetId ? result.data[0] : budget
          )
        );
      }
    },
  });

  const deleteBudgetMutation = useMutation({
    mutationFn: budgetService.deleteBudget,
    onSuccess: (result, variables) => {
      queryClient.setQueryData(budgetKeys.lists(), (old) =>
        old?.filter((budget) => budget.id !== variables)
      );
    },
  });

  const createBudget = (budgetData) => {
    return createBudgetMutation.mutateAsync(budgetData);
  };

  const createMultipleBudgets = (budgetsArray) => {
    return createMultipleBudgetsMutation.mutateAsync(budgetsArray);
  };

  const updateBudget = (budgetId, updates) => {
    return updateBudgetMutation.mutateAsync({ budgetId, updates });
  };

  const deleteBudget = (budgetId) => {
    return deleteBudgetMutation.mutateAsync(budgetId);
  };

  const clearError = () => {
    createBudgetMutation.reset();
    createMultipleBudgetsMutation.reset();
    updateBudgetMutation.reset();
    deleteBudgetMutation.reset();
  };

  return {
    // Query methods
    getBudgets,

    // Mutation methods
    createBudget,
    createMultipleBudgets,
    updateBudget,
    deleteBudget,
    clearError,

    mutations: {
      createBudget: createBudgetMutation,
      createMultipleBudgets: createMultipleBudgetsMutation,
      updateBudget: updateBudgetMutation,
      deleteBudget: deleteBudgetMutation,
    },
  };
};
