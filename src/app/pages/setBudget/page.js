"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import { useBudget } from "@/hooks/useBudget";

export default function SetBudget() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [budgetAmount, setBudgetAmount] = useState("");
  const [budgets, setBudgets] = useState({});
  const [saving, setSaving] = useState(false);

  const router = useRouter();
  const { user, markAsOnboarded } = useAuth();
  const {
    createMultipleBudgets,
    loading: budgetLoading,
    error: budgetError,
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
  };

  const handleSetAllBudgets = async () => {
    if (!user) {
      console.error("No user found");
      return;
    }

    setSaving(true);

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
        } else {
          console.log("Budgets saved successfully:", result.data);
        }
      }

      console.log("🔧 Setting budgets - marking user as onboarded");
      const onboardResult = await markAsOnboarded(user.id);
      console.log("🔧 markAsOnboarded result:", onboardResult);

      if (onboardResult.success) {
        console.log("✅ User successfully marked as onboarded");
      } else {
        console.error(
          "❌ Failed to mark user as onboarded:",
          onboardResult.error
        );
      }

      router.push("./setGoal");
    } catch (error) {
      console.error("Error in budget saving:", error);
    } finally {
      setSaving(false);
    }
  };

  const handleSkip = async () => {
    if (!user) {
      console.error("No user found");
      return;
    }

    console.log("🔧 Skipping budgets - marking user as onboarded");
    const onboardResult = await markAsOnboarded(user.id);
    console.log("🔧 markAsOnboarded result:", onboardResult);

    if (onboardResult.success) {
      console.log("✅ User successfully marked as onboarded");
    } else {
      console.error(
        "❌ Failed to mark user as onboarded:",
        onboardResult.error
      );
    }

    router.push("./setGoals");
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-[#171116] dark group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="flex flex-1 justify-center px-5 py-50">
          <div className="flex flex-col w-full max-w-2xl mx-auto px-4">
            <h3 className="text-white tracking-light text-3xl font-bold leading-tight text-center pb-2">
              Step 1 of 2
            </h3>
            <h2 className="text-white tracking-light text-2xl font-medium leading-tight text-center pb-8">
              Set Your Monthly Budgets
            </h2>

            {budgetError && (
              <div className="bg-red-500/20 border border-red-500 text-white px-4 py-3 rounded text-sm mb-4">
                Error saving budgets: {budgetError}
              </div>
            )}

            <p className="text-[#b79eb0] text-center mb-8">
              Set spending limits for different categories (optional)
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => handleCategorySelect(category.name)}
                  className={`flex flex-col items-center justify-center p-4 rounded-lg border-2 transition-all ${
                    budgets[category.name]
                      ? "border-[#9b177e] bg-[#9b177e]/20"
                      : "border-[#382935] bg-[#382935] hover:border-[#9b177e]"
                  }`}
                >
                  <span className="text-2xl mb-2">{category.icon}</span>
                  <span className="text-white text-sm font-medium text-center">
                    {category.name}
                  </span>
                  {budgets[category.name] && (
                    <span className="text-[#9b177e] text-xs mt-1">
                      ₱{budgets[category.name]}
                    </span>
                  )}
                </button>
              ))}
            </div>

            <div className="flex justify-center gap-3 mt-8 px-10">
              <button
                onClick={handleSetAllBudgets}
                disabled={
                  Object.keys(budgets).length === 0 || saving || budgetLoading
                }
                className="flex cursor-pointer items-center justify-center rounded-lg h-12 px-8 bg-[#9b177e] text-white text-base font-bold leading-normal tracking-[0.015em] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>
                  {saving || budgetLoading ? "Saving..." : "Continue to Goals"}
                </span>
              </button>
              <button
                onClick={handleSkip}
                disabled={saving || budgetLoading}
                className="flex cursor-pointer items-center justify-center rounded-lg h-12 px-8 bg-[#382935] text-white text-base font-bold leading-normal tracking-[0.015em] disabled:opacity-50"
              >
                <span>Skip Budgeting</span>
              </button>
            </div>

            <p className="text-[#b79eb0] text-center mt-4 text-sm">
              You can always set budgets later in settings
            </p>
          </div>
        </div>
      </div>

      {/* Budget Amount Modal */}
      {selectedCategory && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-[#261c23] rounded-lg p-6 max-w-md w-full border border-[#523d4c]">
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
                className="form-input flex w-full resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border border-[#523d4c] bg-[#382935] focus:border-[#9b177e] h-14 placeholder:text-[#b79eb2] p-4 text-lg font-normal leading-normal"
                autoFocus
              />
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleSaveBudget}
                disabled={!budgetAmount}
                className="flex-1 cursor-pointer items-center justify-center rounded-lg h-12 bg-[#9b177e] text-white text-base font-bold leading-normal tracking-[0.015em] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Save Amount
              </button>
              <button
                onClick={() => setSelectedCategory(null)}
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
