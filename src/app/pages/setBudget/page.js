"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import { useBudget } from "@/hooks/useBudget";

export default function SetBudget() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [budgetAmount, setBudgetAmount] = useState("");
  const [budgets, setBudgets] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const router = useRouter();
  const { user, markAsOnboarded } = useAuth();
  const {
    createMultipleBudgets,
    mutations: { createMultipleBudgets: createMutation },
  } = useBudget();

  const categories = [
    {
      name: "Groceries",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
          <path d="M3 6h18" />
          <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
      ),
    },
    {
      name: "Rent",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
          <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        </svg>
      ),
    },
    {
      name: "Transportation",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
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
    },
    {
      name: "Entertainment",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
          <circle cx="12" cy="13" r="1" />
          <path d="m15 10-1 4" />
          <path d="m9 10 1 4" />
        </svg>
      ),
    },
    {
      name: "Utilities",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
          <path d="M9 18h6" />
          <path d="M10 22h4" />
        </svg>
      ),
    },
    {
      name: "Dining Out",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
          <path d="M7 2v20" />
          <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
        </svg>
      ),
    },
    {
      name: "Healthcare",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 8v8" />
          <path d="M16 12H8" />
          <rect x="2" y="4" width="20" height="16" rx="2" />
        </svg>
      ),
    },
    {
      name: "Shopping",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
          <path d="M3 6h18" />
          <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
      ),
    },
  ];

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setBudgetAmount(budgets[category] || "");
    setIsModalOpen(true);
  };

  const handleSaveBudget = () => {
    if (selectedCategory && budgetAmount) {
      setBudgets((prev) => ({
        ...prev,
        [selectedCategory]: budgetAmount,
      }));
    }
    setSelectedCategory(null);
    setBudgetAmount("");
    setIsModalOpen(false);
  };

  const handleSetAllBudgets = async () => {
    if (!user) {
      console.error("No user found");
      return;
    }

    try {
      const budgetsArray = Object.entries(budgets).map(
        ([category, amount]) => ({
          user_id: user.id,
          budget_name: category,
          amount: parseFloat(amount),
          period: "monthly",
          created_at: new Date().toISOString(),
        })
      );

      if (budgetsArray.length > 0) {
        const result = await createMultipleBudgets(budgetsArray);

        if (result.error) {
          console.error("Error saving budgets:", result.error);
          return;
        } else {
          console.log("Budgets saved successfully:", result.data);
        }
      }

      console.log("Setting budgets - marking user as onboarded");
      const onboardResult = await markAsOnboarded(user.id);
      console.log("markAsOnboarded result:", onboardResult);

      if (onboardResult.success) {
        console.log("User successfully marked as onboarded");
        router.push("./setGoal");
      } else {
        console.error("Failed to mark user as onboarded:", onboardResult.error);
        router.push("./setGoal");
      }
    } catch (error) {
      console.error("Error in budget saving:", error);
    }
  };

  const handleSkip = async () => {
    if (!user) {
      console.error("No user found");
      return;
    }

    console.log("Skipping budgets - marking user as onboarded");
    const onboardResult = await markAsOnboarded(user.id);
    console.log("markAsOnboarded result:", onboardResult);

    if (onboardResult.success) {
      console.log("User successfully marked as onboarded");
    } else {
      console.error("Failed to mark user as onboarded:", onboardResult.error);
    }

    router.push("./setGoal");
  };

  const saving = createMutation.isPending;

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-[#171116] overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#9b177e]/10 rounded-full blur-xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-[#9b177e]/5 rounded-full blur-lg animate-pulse-slow animation-delay-1000"></div>

      <div className="layout-container flex h-full grow flex-col z-10">
        <div className="flex flex-1 justify-center px-5 py-50">
          <div className="flex flex-col w-full max-w-2xl mx-auto px-4">
            {/* Animated Headers */}
            <h3 className="text-white tracking-light text-3xl font-bold leading-tight text-center pb-2 animate-fade-in-up">
              Step 1 of 2
            </h3>
            <h2 className="text-white tracking-light text-2xl font-medium leading-tight text-center pb-8 animate-fade-in-up animation-delay-200">
              Set Your Monthly Budgets
            </h2>

            {createMutation.error && (
              <div className="bg-red-500/20 border border-red-500 text-white px-4 py-3 rounded text-sm mb-4 animate-shake">
                Error saving budgets: {createMutation.error.message}
              </div>
            )}

            <p className="text-[#b79eb0] text-center mb-8 animate-fade-in-up animation-delay-400">
              Set spending limits for different categories (optional)
            </p>

            {/* Enhanced Category Grid with Animations */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {categories.map((category, index) => (
                <button
                  key={category.name}
                  onClick={() => handleCategorySelect(category.name)}
                  className={`group relative flex flex-col items-center justify-center p-4 rounded-lg border-2 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-[#9b177e]/20 ${
                    budgets[category.name]
                      ? "border-[#9b177e] bg-[#9b177e]/20 shadow-lg shadow-[#9b177e]/30"
                      : "border-[#382935] bg-[#382935] hover:border-[#9b177e]"
                  } animate-fade-in-up`}
                  style={{ animationDelay: `${index * 100 + 600}ms` }}
                >
                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#9b177e]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>

                  <span className="text-2xl mb-2 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    {category.icon}
                  </span>
                  <span className="text-white text-sm font-medium text-center relative z-10">
                    {category.name}
                  </span>
                  {budgets[category.name] && (
                    <span className="text-[#9b177e] text-xs mt-1 font-semibold relative z-10 animate-pulse">
                      ₱{budgets[category.name]}
                    </span>
                  )}

                  {/* Selection Indicator */}
                  {budgets[category.name] && (
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

            {/* Enhanced Action Buttons */}
            <div className="flex justify-center gap-3 mt-8 px-10">
              <button
                onClick={handleSetAllBudgets}
                disabled={Object.keys(budgets).length === 0 || saving}
                className="group relative flex cursor-pointer items-center justify-center rounded-lg h-12 px-8 bg-[#9b177e] text-white text-base font-bold leading-normal tracking-[0.015em] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-[#9b177e]/40 overflow-hidden"
              >
                {/* Button Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                <span className="relative z-10 flex items-center gap-2">
                  {saving ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Saving...
                    </>
                  ) : (
                    "Continue to Goals"
                  )}
                </span>
              </button>

              <button
                onClick={handleSkip}
                disabled={saving}
                className="group flex cursor-pointer items-center justify-center rounded-lg h-12 px-8 bg-[#382935] text-white text-base font-bold leading-normal tracking-[0.015em] disabled:opacity-50 transition-all duration-300 transform hover:scale-105 hover:bg-[#4a3547] border border-transparent hover:border-[#9b177e]/30"
              >
                <span>Skip Budgeting</span>
              </button>
            </div>

            <p className="text-[#b79eb0] text-center mt-4 text-sm animate-fade-in animation-delay-1200">
              You can always set budgets later in settings
            </p>
          </div>
        </div>
      </div>

      {/* Enhanced Modal with Animations */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 animate-fade-in">
          <div
            className="bg-[#261c23] rounded-xl p-6 max-w-md w-full border border-[#523d4c] shadow-2xl shadow-black/50 transform animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-white text-xl font-bold mb-2">
              Set Budget for {selectedCategory}
            </h3>
            <p className="text-[#b79eb0] mb-4">
              Enter your monthly budget amount
            </p>

            <div className="relative mb-6">
              <input
                type="number"
                placeholder="₱0"
                value={budgetAmount}
                onChange={(e) => setBudgetAmount(e.target.value)}
                className="form-input flex w-full resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border border-[#523d4c] bg-[#382935] focus:border-[#9b177e] h-14 placeholder:text-[#b79eb2] p-4 text-lg font-normal leading-normal transition-all duration-300 focus:scale-105 focus:shadow-lg focus:shadow-[#9b177e]/20"
                autoFocus
              />
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleSaveBudget}
                disabled={!budgetAmount}
                className="group flex-1 cursor-pointer items-center justify-center rounded-lg h-12 bg-[#9b177e] text-white text-base font-bold leading-normal tracking-[0.015em] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#9b177e]/30 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <span className="relative z-10">Save Amount</span>
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

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        .animation-delay-1200 {
          animation-delay: 1.2s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
}
