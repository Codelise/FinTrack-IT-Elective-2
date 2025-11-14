import {
  getGoals as getGoalsQuery,
  createGoal as createGoalQuery,
  createMultipleGoals as createMultipleGoalsQuery,
  updateGoal as updateGoalQuery,
  deleteGoal as deleteGoalQuery,
} from "../api/goal/route";

export class GoalService {
  async getGoals(userId) {
    try {
      const result = await getGoalsQuery(userId);
      return result;
    } catch (error) {
      console.error("Error fetching goals: ", error);
      return { data: null, error };
    }
  }

  async createGoal(goalData) {
    try {
      if (!goalData.user_id || !goalData.goal_name || !goalData.target_amount) {
        throw new Error("User ID, goal_name, and target_amount are required");
      }

      if (goalData.target_amount <= 0) {
        throw new Error("Target amount must be greater than 0");
      }

      const result = await createGoalQuery(goalData);
      return result;
    } catch (error) {
      console.error("Error creating goal: ", error);
      return { data: null, error };
    }
  }
  async createMultipleGoals(goalsArray) {
    try {
      for (const goal of goalsArray) {
        if (!goal.user_id || !goal.goal_name || !goal.target_amount) {
          throw new Error(
            "All goals must have user_id, goal_name, and target_amount"
          );
        }
        if (goal.target_amount <= 0) {
          throw new Error("All target amounts must be greater than 0");
        }
      }

      const result = await createMultipleGoalsQuery(goalsArray);
      return result;
    } catch (error) {
      console.error("Error creating multiple goals:", error);
      return { data: null, error };
    }
  }

  async updateGoal(goalId, updates) {
    try {
      const result = await updateGoalQuery(goalId, updates);
      return result;
    } catch (error) {
      console.error("Error updating goal:", error);
      return { data: null, error };
    }
  }

  async deleteGoal(goalId) {
    try {
      const result = await deleteGoalQuery(goalId);
      return result;
    } catch (error) {
      console.error("Error deleting goal:", error);
      return { error };
    }
  }
}

export const goalService = new GoalService();
