import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { goalService } from "@/services/goal-service";

export const goalKeys = {
  all: ["goals"],
  lists: () => [...goalKeys.all, "list"],
  list: (filters) => [...goalKeys.lists(), { filters }],
  details: () => [...goalKeys.all, "detail"],
  detail: (id) => [...goalKeys.details(), id],
};

export const useGoal = () => {
  const queryClient = useQueryClient();

  const getGoals = (userId) => {
    return useQuery({
      queryKey: goalKeys.list({ userId }),
      queryFn: () => goalService.getGoals(userId),
      enabled: !!userId,
      staleTime: 2 * 60 * 1000,
    });
  };

  const createGoalMutation = useMutation({
    mutationFn: goalService.createGoal,
    onSuccess: (result) => {
      if (result.data) {
        queryClient.invalidateQueries({ queryKey: goalKeys.lists() });
      }
    },
  });

  const createMultipleGoalsMutation = useMutation({
    mutationFn: goalService.createMultipleGoals,
    onSuccess: (result) => {
      if (result.data) {
        queryClient.invalidateQueries({ queryKey: goalKeys.lists() });
      }
    },
  });

  const updateGoalMutation = useMutation({
    mutationFn: ({ goalId, updates }) =>
      goalService.updateGoal(goalId, updates),
    onSuccess: (result, variables) => {
      if (result.data) {
        queryClient.setQueryData(goalKeys.lists(), (old) =>
          old?.map((goal) =>
            goal.id === variables.goalId ? result.data[0] : goal
          )
        );
      }
    },
  });

  const deleteGoalMutation = useMutation({
    mutationFn: goalService.deleteGoal,
    onSuccess: (result, variables) => {
      queryClient.setQueryData(goalKeys.lists(), (old) =>
        old?.filter((goal) => goal.id !== variables)
      );
    },
  });

  const createGoal = (goalData) => {
    return createGoalMutation.mutateAsync(goalData);
  };

  const createMultipleGoals = (goalsArray) => {
    return createMultipleGoalsMutation.mutateAsync(goalsArray);
  };

  const updateGoal = (goalId, updates) => {
    return updateGoalMutation.mutateAsync({ goalId, updates });
  };

  const deleteGoal = (goalId) => {
    return deleteGoalMutation.mutateAsync(goalId);
  };

  const clearError = () => {
    createGoalMutation.reset();
    createMultipleGoalsMutation.reset();
    updateGoalMutation.reset();
    deleteGoalMutation.reset();
  };

  return {
    // Query methods
    getGoals,

    // Mutation methods
    createGoal,
    createMultipleGoals,
    updateGoal,
    deleteGoal,
    clearError,

    // Mutation states
    mutations: {
      createGoal: createGoalMutation,
      createMultipleGoals: createMultipleGoalsMutation,
      updateGoal: updateGoalMutation,
      deleteGoal: deleteGoalMutation,
    },
  };
};
