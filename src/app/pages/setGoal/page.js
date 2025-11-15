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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const { user, markAsOnboarded } = useAuth();
  const {
    createMultipleGoals,
    mutations: { createMultipleGoals: createMutation },
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
    setIsModalOpen(true);
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
    setIsModalOpen(false);
  };

  const handleSetAllGoals = async () => {
    if (!user) {
      console.error("No user found");
      return;
    }

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
          return;
        } else {
          console.log("Goals saved successfully:", result.data);
        }
      }

      await markAsOnboarded(user.id);

      router.push("./dashboard");
    } catch (error) {
      console.error("Error in goal saving:", error);
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

  const saving = createMutation.isPending;

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-[#171116] overflow-x-hidden">
      <div className="absolute top-1/3 right-1/4 w-28 h-28 bg-[#9b177e]/10 rounded-full blur-xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-[#9b177e]/5 rounded-full blur-lg animate-pulse-slow animation-delay-1500"></div>

      <div className="layout-container flex h-full grow flex-col z-10">
        <div className="flex flex-1 justify-center px-5 py-50">
          <div className="flex flex-col w-full max-w-2xl mx-auto px-4">
            <h3 className="text-white tracking-light text-3xl font-bold leading-tight text-center pb-2 animate-fade-in-up">
              Step 2 of 2
            </h3>
            <h2 className="text-white tracking-light text-2xl font-medium leading-tight text-center pb-8 animate-fade-in-up animation-delay-200">
              Set Your Financial Goals
            </h2>

            {createMutation.error && (
              <div className="bg-red-500/20 border border-red-500 text-white px-4 py-3 rounded text-sm mb-4 animate-shake">
                Error saving goals: {createMutation.error.message}
              </div>
            )}

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {goalCategories.map((goal, index) => (
                <button
                  key={goal.name}
                  onClick={() => handleGoalSelect(goal)}
                  className={`group relative flex flex-col items-center justify-center p-4 rounded-lg border-2 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-[#9b177e]/20 ${
                    goals[goal.name]
                      ? "border-[#9b177e] bg-[#9b177e]/20 shadow-lg shadow-[#9b177e]/30"
                      : "border-[#382935] bg-[#382935] hover:border-[#9b177e]"
                  } animate-fade-in-up`}
                  style={{ animationDelay: `${index * 100 + 600}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#9b177e]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>

                  <span className="text-white mb-2 w-6 h-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    {goal.icon}
                  </span>
                  <span className="text-white text-sm font-medium text-center relative z-10">
                    {goal.name}
                  </span>
                  <span className="text-[#b79eb0] text-xs text-center mt-1 relative z-10">
                    {goal.description}
                  </span>
                  {goals[goal.name] && (
                    <div className="text-[#9b177e] text-xs mt-2 text-center font-semibold relative z-10 animate-pulse">
                      <div>Selected</div>
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

                  {goals[goal.name] && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#9b177e] rounded-full flex items-center justify-center animate-bounce">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  )}
                </button>
              ))}
            </div>

            <div className="flex justify-center gap-3 mt-8">
              <button
                onClick={handleSetAllGoals}
                disabled={Object.keys(goals).length === 0 || saving}
                className="group relative flex cursor-pointer items-center justify-center rounded-lg h-12 px-8 bg-[#9b177e] text-white text-base font-bold leading-normal tracking-[0.015em] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-[#9b177e]/40 overflow-hidden"
              >
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                <span className="relative z-10 flex items-center gap-2">
                  {saving ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Saving...
                    </>
                  ) : (
                    "Complete Setup"
                  )}
                </span>
              </button>

              <button
                onClick={handleSkip}
                disabled={saving}
                className="group flex cursor-pointer items-center justify-center rounded-lg h-12 px-8 bg-[#382935] text-white text-base font-bold leading-normal tracking-[0.015em] disabled:opacity-50 transition-all duration-300 transform hover:scale-105 hover:bg-[#4a3547] border border-transparent hover:border-[#9b177e]/30"
              >
                <span>Skip Goals</span>
              </button>
            </div>

            <p className="text-[#b79eb0] text-center mt-4 text-sm animate-fade-in animation-delay-1200">
              You can add more goals later in the goals section
            </p>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 animate-fade-in">
          <div
            className="bg-[#261c23] rounded-xl p-6 max-w-md w-full border border-[#523d4c] shadow-2xl shadow-black/50 transform animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center mb-4">
              <span className="text-white mb-3 block w-12 h-12 mx-auto transition-transform duration-300 hover:scale-110">
                {selectedGoal?.icon}
              </span>
              <h3 className="text-white text-xl font-bold mb-2">
                Set {selectedGoal?.name} Goal
              </h3>
              <p className="text-[#b79eb0]">{selectedGoal?.description}</p>
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
                  className="form-input flex w-full resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border border-[#523d4c] bg-[#382935] focus:border-[#9b177e] h-12 placeholder:text-[#b79eb2] p-4 text-lg font-normal leading-normal transition-all duration-300 focus:scale-105 focus:shadow-lg focus:shadow-[#9b177e]/20"
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
                  className="form-input flex w-full resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border border-[#523d4c] bg-[#382935] focus:border-[#9b177e] h-12 placeholder:text-[#b79eb2] p-4 text-lg font-normal leading-normal transition-all duration-300 focus:scale-105 focus:shadow-lg focus:shadow-[#9b177e]/20"
                />
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleConfirmGoal}
                disabled={!goalAmount || !goalDeadline}
                className="group flex-1 cursor-pointer items-center justify-center rounded-lg h-12 bg-[#9b177e] text-white text-base font-bold leading-normal tracking-[0.015em] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#9b177e]/30 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <span className="relative z-10">Save Goal</span>
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="flex-1 cursor-pointer items-center justify-center rounded-lg h-12 bg-[#382935] text-white text-base font-bold leading-normal tracking-[0.015em] transition-all duration-300 transform hover:scale-105 hover:bg-[#4a3547]"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes shake {
          0%,
          100% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-5px);
          }
          75% {
            transform: translateX(5px);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.2;
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in {
          animation: fadeIn 0.4s ease-out forwards;
          opacity: 0;
        }

        .animate-scale-in {
          animation: scaleIn 0.3s ease-out forwards;
        }

        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        .animation-delay-1200 {
          animation-delay: 1.2s;
        }

        .animation-delay-1500 {
          animation-delay: 1.5s;
        }
      `}</style>
    </div>
  );
}
