"use client";

import Link from "next/link";
import Navbar from "@/app/components/Navbar";
export default function BudgetPage() {
  const budgets = [
    {
      id: 1,
      name: "Groceries",
      icon: "shopping_cart",
      amount: "25,000.00",
      period: "/month",
    },
    {
      id: 2,
      name: "Utilities",
      icon: "lightbulb",
      amount: "7,500.00",
      period: "/month",
    },
    {
      id: 3,
      name: "Transportation",
      icon: "train",
      amount: "5,000.00",
      period: "/month",
    },
    {
      id: 4,
      name: "Entertainment",
      icon: "movie",
      amount: "10,000.00",
      period: "/month",
    },
    {
      id: 5,
      name: "Rent/Mortgage",
      icon: "home",
      amount: "75,000.00",
      period: "/month",
    },
    {
      id: 6,
      name: "Savings",
      icon: "savings",
      amount: "20,000.00",
      period: "/month",
    },
  ];

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-[#21121e] overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <Navbar />
        {/* Main Content */}
        <div className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-full max-w-[960px] flex-1">
            <main className="flex-1 mt-6 md:mt-10">
              {/* Page Header */}
              <div className="flex flex-wrap justify-between gap-4 p-4 items-center">
                <div className="flex min-w-72 flex-col gap-2">
                  <h1 className="text-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">
                    My Budgets
                  </h1>
                  <p className="text-[#c695bb] text-base font-normal leading-normal">
                    Here are your allocated budgets for the current period.
                  </p>
                </div>
                <button className="group flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-5 bg-[#9c167f] text-white text-sm font-bold leading-normal tracking-[0.015em] transition-all duration-300 hover:bg-[#b51a97] hover:shadow-lg hover:shadow-[#9c167f]/40 hover:-translate-y-0.5">
                  <span className="truncate relative z-10">Add New Budget</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </button>
              </div>

              {/* Budget List */}
              <div className="mt-6 md:mt-8 flex flex-col gap-3 px-4">
                {budgets.map((budget) => (
                  <div
                    key={budget.id}
                    className="group flex flex-col sm:flex-row items-center gap-4 bg-[#321b2d] p-4 min-h-[72px] justify-between rounded-xl border border-[#63365a] transition-all duration-300 hover:border-[#9c167f] hover:shadow-lg hover:shadow-[#9c167f]/20"
                  >
                    <div className="flex items-center gap-4 w-full">
                      <div className="text-white flex items-center justify-center rounded-lg bg-[#63365a] shrink-0 size-12 transition-all duration-300 group-hover:bg-[#9c167f] group-hover:scale-105">
                        <span className="material-symbols-outlined text-2xl">
                          {budget.icon}
                        </span>
                      </div>
                      <div className="flex flex-col justify-center flex-grow">
                        <p className="text-white text-base font-medium leading-normal line-clamp-1">
                          {budget.name}
                        </p>
                        <p className="text-[#c695bb] text-sm font-normal leading-normal line-clamp-2">
                          Allocated Budget
                        </p>
                      </div>
                      <div className="shrink-0 text-right">
                        <p className="text-white text-lg font-bold leading-normal">
                          PHP {budget.amount}
                          <span className="text-sm font-normal text-[#c695bb]">
                            {budget.period}
                          </span>
                        </p>
                      </div>
                    </div>
                    <button className="flex sm:ml-4 w-full sm:w-auto min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#321b2d] text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] transition-all duration-300 hover:bg-[#3d2245] border border-[#63365a] hover:border-[#9c167f]">
                      <span className="material-symbols-outlined text-lg">
                        edit
                      </span>
                      <span className="truncate">Edit Budget</span>
                    </button>
                  </div>
                ))}
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Material Icons CSS */}
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
        rel="stylesheet"
      />

      {/* Custom Styles for Material Icons */}
      <style jsx>{`
        .material-symbols-outlined {
          font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24;
        }
      `}</style>
    </div>
  );
}
