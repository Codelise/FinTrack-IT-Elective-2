"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import { useGoal } from "@/hooks/useGoal";

export default function SetGoals() {
  const [selectedGoal, setSelectedGoal] = useState(null);
  const [goalAmount, setGoalAmount] = useState("");
  const [goalDeadline, setGoalDeadline] = useState("");
  const [goals, setGoals] = useState({});
  const [saving, setSaving] = useState(false);
  const router = useRouter();
  const { user, markAsOnboarded } = useAuth();
  const {
    createMultipleGoals,
    loading: goalLoading,
    error: goalError,
  } = useGoal();

  const goalCategories = [
    {
      name: "Emergency Fund",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      description: "3-6 months of expenses",
    },
    {
      name: "New Car",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H8.4" />
          <path d="M18 8h1a1 1 0 0 1 1 1v1.15" />
          <rect x="2" y="16" width="6" height="4" rx="1" />
          <circle cx="7" cy="16" r="2" />
          <circle cx="18" cy="16" r="2" />
        </svg>
      ),
      description: "Vehicle purchase",
    },
    {
      name: "Vacation",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 1 3 1 2-2.3 3.3 3.3c.5.5 1.2.3 1.5-.3l.5-.7c.2-.5.1-1-.3-1.2Z" />
        </svg>
      ),
      description: "Travel and holidays",
    },
    {
      name: "Home Down Payment",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
          <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        </svg>
      ),
      description: "Buying a house",
    },
    {
      name: "Education",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c0 2 2 2 4 1 2 1 4 1 4-1v-5" />
        </svg>
      ),
      description: "School or courses",
    },
    {
      name: "Retirement",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="m4.93 4.93 4.24 4.24" />
          <path d="m14.83 9.17 4.24-4.24" />
          <path d="m14.83 14.83 4.24 4.24" />
          <path d="m9.17 14.83-4.24 4.24" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      ),
      description: "Long-term savings",
    },
    {
      name: "Debt Payoff",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2v20" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
      description: "Clear existing debts",
    },
    {
      name: "Investment",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 3v18h18" />
          <path d="m19 9-5 5-4-4-3 3" />
        </svg>
      ),
      description: "Grow your wealth",
    },
  ];

  const handleGoalSelect = (goal) => {
    setSelectedGoal(goal);
    setGoalAmount("");
    setGoalDeadline("");
  };

  const handleConfirmGoal = () => {
    if (selectedGoal && goalAmount && goalDeadline) {
      setGoals((prev) => ({
        ...prev,
        [selectedGoal.name]: {
          goal_name: selectedGoal.name,
          target_amount: parseFloat(goalAmount),
          deadline: goalDeadline,
        },
      }));
    }
    setSelectedGoal(null);
    setGoalAmount("");
    setGoalDeadline("");
  };

  const handleSetAllGoals = async () => {
    if (!user) {
      console.error("No user found");
      return;
    }

    setSaving(true);
    try {
      const goalsArray = Object.values(goals).map((goal) => ({
        user_id: user.id,
        goal_name: goal.goal_name,
        target_amount: goal.target_amount,
        current_amount: 0,
        deadline: goal.deadline,
        created_at: new Date().toISOString(),
      }));

      console.log("Goals data being saved:", goalsArray);

      if (goalsArray.length > 0) {
        const result = await createMultipleGoals(goalsArray);

        if (result.error) {
          console.error("Error saving goals:", result.error);
        } else {
          console.log("Goals saved successfully:", result.data);
        }
      }

      await markAsOnboarded(user.id);

      router.push("./dashboard");
    } catch (error) {
      console.error("Error in goal saving:", error);
    } finally {
      setSaving(false);
    }
  };

  const handleSkip = async () => {
    if (user) {
      await markAsOnboarded(user.id);
    }
    router.push("./dashboard");
  };

  const today = new Date().toISOString().split("T")[0];
  const maxDate = new Date(new Date().setFullYear(new Date().getFullYear() + 5))
    .toISOString()
    .split("T")[0];

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-[#171116] dark group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="flex flex-1 justify-center px-5 py-50">
          <div className="flex flex-col w-full max-w-2xl mx-auto px-4">
            <h3 className="text-white tracking-light text-3xl font-bold leading-tight text-center pb-2">
              Step 2 of 2
            </h3>
            <h2 className="text-white tracking-light text-2xl font-medium leading-tight text-center pb-8">
              Set Your Financial Goals
            </h2>

            {goalError && (
              <div className="bg-red-500/20 border border-red-500 text-white px-4 py-3 rounded text-sm mb-4">
                Error saving goals: {goalError}
              </div>
            )}

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {goalCategories.map((goal) => (
                <button
                  key={goal.name}
                  onClick={() => handleGoalSelect(goal)}
                  className={`flex flex-col items-center justify-center p-4 rounded-lg border-2 transition-all ${
                    goals[goal.name]
                      ? "border-[#9b177e] bg-[#9b177e]/20"
                      : "border-[#382935] bg-[#382935] hover:border-[#9b177e]"
                  }`}
                >
                  <span className="text-white mb-2 w-6 h-6">{goal.icon}</span>
                  <span className="text-white text-sm font-medium text-center">
                    {goal.name}
                  </span>
                  <span className="text-[#b79eb0] text-xs text-center mt-1">
                    {goal.description}
                  </span>
                  {goals[goal.name] && (
                    <div className="text-[#9b177e] text-xs mt-2 text-center">
                      <div>✓ Selected</div>
                      <div>
                        ₱{goals[goal.name].target_amount.toLocaleString()}
                      </div>
                      <div>
                        {new Date(
                          goals[goal.name].deadline
                        ).toLocaleDateString()}
                      </div>
                    </div>
                  )}
                </button>
              ))}
            </div>

            <div className="flex justify-center gap-3 mt-8">
              <button
                onClick={handleSetAllGoals}
                disabled={
                  Object.keys(goals).length === 0 || saving || goalLoading
                }
                className="flex cursor-pointer items-center justify-center rounded-lg h-12 px-8 bg-[#9b177e] text-white text-base font-bold leading-normal tracking-[0.015em] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>
                  {saving || goalLoading ? "Saving..." : "Complete Setup"}
                </span>
              </button>
              <button
                onClick={handleSkip}
                disabled={saving || goalLoading}
                className="flex cursor-pointer items-center justify-center rounded-lg h-12 px-8 bg-[#382935] text-white text-base font-bold leading-normal tracking-[0.015em] disabled:opacity-50"
              >
                <span>Skip Goals</span>
              </button>
            </div>

            <p className="text-[#b79eb0] text-center mt-4 text-sm">
              You can add more goals later in the goals section
            </p>
          </div>
        </div>
      </div>

      {selectedGoal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-[#261c23] rounded-lg p-6 max-w-md w-full border border-[#523d4c]">
            <div className="text-center mb-4">
              <span className="text-white mb-3 block w-12 h-12 mx-auto">
                {selectedGoal.icon}
              </span>
              <h3 className="text-white text-xl font-bold mb-2">
                Set {selectedGoal.name} Goal
              </h3>
              <p className="text-[#b79eb0]">{selectedGoal.description}</p>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <label className="text-white text-sm font-medium block mb-2">
                  Target Amount (₱)
                </label>
                <input
                  type="number"
                  placeholder="0"
                  value={goalAmount}
                  onChange={(e) => setGoalAmount(e.target.value)}
                  className="form-input flex w-full resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border border-[#523d4c] bg-[#382935] focus:border-[#9b177e] h-12 placeholder:text-[#b79eb2] p-4 text-lg font-normal leading-normal"
                  autoFocus
                />
              </div>

              <div>
                <label className="text-white text-sm font-medium block mb-2">
                  Target Date
                </label>
                <input
                  type="date"
                  value={goalDeadline}
                  onChange={(e) => setGoalDeadline(e.target.value)}
                  min={today}
                  max={maxDate}
                  className="form-input flex w-full resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border border-[#523d4c] bg-[#382935] focus:border-[#9b177e] h-12 placeholder:text-[#b79eb2] p-4 text-lg font-normal leading-normal"
                />
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleConfirmGoal}
                disabled={!goalAmount || !goalDeadline}
                className="flex-1 cursor-pointer items-center justify-center rounded-lg h-12 bg-[#9b177e] text-white text-base font-bold leading-normal tracking-[0.015em] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Save Goal
              </button>
              <button
                onClick={() => setSelectedGoal(null)}
                className="flex-1 cursor-pointer items-center justify-center rounded-lg h-12 bg-[#382935] text-white text-base font-bold leading-normal tracking-[0.015em]"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
