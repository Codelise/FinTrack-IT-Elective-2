"use client";
import { useState, useEffect } from "react";
import Navbar from "@/app/components/Navbar";

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [isLoaded, setIsLoaded] = useState(false);

  const filters = ["All", "Income", "Expenses"];

  const transactions = [
    {
      date: "2024-07-15",
      category: "Food",
      description: "Grocery shopping",
      amount: "-$150",
    },
    {
      date: "2024-07-14",
      category: "Income",
      description: "Salary deposit",
      amount: "+$3,000",
    },
    {
      date: "2024-07-13",
      category: "Rent",
      description: "Monthly rent payment",
      amount: "-$1,500",
    },
    {
      date: "2024-07-12",
      category: "Utilities",
      description: "Electricity bill",
      amount: "-$200",
    },
    {
      date: "2024-07-11",
      category: "Entertainment",
      description: "Movie tickets",
      amount: "-$50",
    },
  ];

  const spendingData = [
    { month: "Jan", amount: 3200 },
    { month: "Feb", amount: 2800 },
    { month: "Mar", amount: 3500 },
    { month: "Apr", amount: 3100 },
    { month: "May", amount: 2900 },
    { month: "Jun", amount: 3200 },
  ];

  const categoryData = [
    { name: "Food", amount: 800, percentage: 25 },
    { name: "Rent", amount: 1500, percentage: 47 },
    { name: "Utilities", amount: 200, percentage: 6 },
    { name: "Entertainment", amount: 150, percentage: 5 },
    { name: "Transport", amount: 550, percentage: 17 },
  ];

  useEffect(() => {
    // Trigger animations after component mounts
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-[#171116] overflow-x-hidden">
      <Navbar />
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col flex-1 w-full">
            <div
              className={`flex flex-wrap justify-between gap-3 p-4 transition-all duration-700 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <div className="flex min-w-72 flex-col gap-3">
                <h1 className="text-white tracking-light text-2xl font-bold leading-tight md:text-[32px]">
                  Dashboard
                </h1>
                <p className="text-[#b79eb2] text-lg font-normal leading-normal">
                  Overview of your financial health
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 p-4">
              <div
                className={`flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 bg-[#382935] transition-all duration-700 delay-200 ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                <p className="text-white text-base font-medium leading-normal">
                  Total Income
                </p>
                <p className="text-white tracking-light text-2xl font-bold leading-tight">
                  $5,500
                </p>
                <p className="text-green-500 text-base font-medium leading-normal">
                  +10%
                </p>
              </div>
              <div
                className={`flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 bg-[#382935] transition-all duration-700 delay-300 ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                <p className="text-white text-base font-medium leading-normal">
                  Total Expenses
                </p>
                <p className="text-white tracking-light text-2xl font-bold leading-tight">
                  $3,200
                </p>
                <p className="text-orange-500 text-base font-medium leading-normal">
                  -5%
                </p>
              </div>
            </div>

            <div className="hidden lg:flex flex-col lg:flex-row gap-4 px-4 py-6">
              <div
                className={`flex min-w-72 flex-1 flex-col gap-2 rounded-lg border border-[#523d4d] p-6 transition-all duration-700 delay-400 ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                <p className="text-white text-base font-medium leading-normal">
                  Spending Over Time
                </p>
                <p className="text-white tracking-light text-2xl font-bold leading-tight truncate md:text-[32px]">
                  $3,200
                </p>
                <div className="flex gap-1">
                  <p className="text-[#b79eb2] text-base font-normal leading-normal">
                    Last 6 Months
                  </p>
                  <p className="text-[#fa7538] text-base font-medium leading-normal">
                    -5%
                  </p>
                </div>
                <div className="flex min-h-[180px] flex-1 flex-col gap-8 py-4">
                  <svg
                    width="100%"
                    height="148"
                    viewBox="-3 0 478 150"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    className="transition-all duration-1000 delay-600"
                  >
                    <path
                      d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H326.769H0V109Z"
                      fill="url(#paint0_linear_1131_5935)"
                    ></path>
                    <path
                      d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25"
                      stroke="#b79eb2"
                      strokeWidth="3"
                      strokeLinecap="round"
                    ></path>
                    <defs>
                      <linearGradient
                        id="paint0_linear_1131_5935"
                        x1="236"
                        y1="1"
                        x2="236"
                        y2="149"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#382935"></stop>
                        <stop
                          offset="1"
                          stopColor="#382935"
                          stopOpacity="0"
                        ></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="flex justify-around">
                    {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map(
                      (month, index) => (
                        <p
                          key={month}
                          className="text-[#b79eb2] text-[13px] font-bold leading-normal tracking-[0.015em] transition-all duration-500"
                          style={{ transitionDelay: `${600 + index * 100}ms` }}
                        >
                          {month}
                        </p>
                      )
                    )}
                  </div>
                </div>
              </div>

              <div
                className={`flex min-w-72 flex-1 flex-col gap-2 rounded-lg border border-[#523d4d] p-6 transition-all duration-700 delay-500 ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                <p className="text-white text-base font-medium leading-normal">
                  Spending by Category
                </p>
                <p className="text-white tracking-light text-2xl font-bold leading-tight truncate md:text-[32px]">
                  $3,200
                </p>
                <div className="flex gap-1">
                  <p className="text-[#b79eb2] text-base font-normal leading-normal">
                    This Month
                  </p>
                  <p className="text-[#fa7538] text-base font-medium leading-normal">
                    -10%
                  </p>
                </div>
                <div className="grid min-h-[180px] grid-flow-col gap-3 sm:gap-6 grid-rows-[1fr_auto] items-end justify-items-center px-3">
                  {[
                    { name: "Food", height: "80%" },
                    { name: "Rent", height: "60%" },
                    { name: "Utilities", height: "100%" },
                    { name: "Entertainment", height: "30%" },
                    { name: "Transport", height: "70%" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center gap-2 w-full"
                    >
                      <div
                        className="border-[#b79eb2] bg-gradient-to-t from-[#9c167f] to-[#382935] border-t-2 w-full max-w-[40px] sm:max-w-[50px] rounded-t-lg transition-all duration-1000 ease-out"
                        style={{
                          height: isLoaded ? item.height : "0%",
                          transitionDelay: `${700 + index * 150}ms`,
                        }}
                      ></div>
                      <p
                        className="text-[#b79eb2] text-xs sm:text-sm font-bold leading-normal tracking-[0.015em] text-center transition-all duration-500"
                        style={{ transitionDelay: `${700 + index * 150}ms` }}
                      >
                        {item.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:hidden flex flex-col gap-4 px-4 py-6">
              <div
                className={`flex flex-col gap-2 rounded-lg border border-[#523d4d] p-6 transition-all duration-700 delay-400 ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-white text-base font-medium leading-normal">
                      Monthly Spending
                    </p>
                    <p className="text-white tracking-light text-2xl font-bold leading-tight">
                      $3,200
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-[#b79eb2] text-sm">Last 6 Months</p>
                    <p className="text-[#fa7538] text-sm font-medium">-5%</p>
                  </div>
                </div>

                <div className="overflow-hidden rounded-lg border border-[#523d4d] bg-[#171116]">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-[#261c24]">
                        <th className="px-3 py-2 text-left text-white text-sm font-medium leading-normal">
                          Month
                        </th>
                        <th className="px-3 py-2 text-left text-white text-sm font-medium leading-normal">
                          Amount
                        </th>
                        <th className="px-3 py-2 text-left text-white text-sm font-medium leading-normal">
                          Trend
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {spendingData.map((item, index) => (
                        <tr
                          key={index}
                          className="border-t border-t-[#523d4d] transition-all duration-300 hover:bg-[#382935]/30"
                          style={{
                            animationDelay: `${500 + index * 100}ms`,
                            animation: isLoaded
                              ? `fadeInUp 0.6s ease-out ${
                                  500 + index * 100
                                }ms both`
                              : "none",
                          }}
                        >
                          <td className="px-3 py-3 text-[#b79eb2] text-sm font-normal">
                            {item.month}
                          </td>
                          <td className="px-3 py-3 text-white text-sm font-medium">
                            ${item.amount}
                          </td>
                          <td className="px-3 py-3">
                            <span
                              className={`text-xs font-medium px-2 py-1 rounded ${
                                index > 0 &&
                                item.amount > spendingData[index - 1].amount
                                  ? "bg-red-500/20 text-red-400"
                                  : "bg-green-500/20 text-green-400"
                              }`}
                            >
                              {index > 0 &&
                              item.amount > spendingData[index - 1].amount
                                ? "↑"
                                : "↓"}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div
                className={`flex flex-col gap-2 rounded-lg border border-[#523d4d] p-6 transition-all duration-700 delay-500 ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-white text-base font-medium leading-normal">
                      Category Spending
                    </p>
                    <p className="text-white tracking-light text-2xl font-bold leading-tight">
                      $3,200
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-[#b79eb2] text-sm">This Month</p>
                    <p className="text-[#fa7538] text-sm font-medium">-10%</p>
                  </div>
                </div>

                <div className="overflow-hidden rounded-lg border border-[#523d4d] bg-[#171116]">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-[#261c24]">
                        <th className="px-3 py-2 text-left text-white text-sm font-medium leading-normal">
                          Category
                        </th>
                        <th className="px-3 py-2 text-left text-white text-sm font-medium leading-normal">
                          Amount
                        </th>
                        <th className="px-3 py-2 text-left text-white text-sm font-medium leading-normal">
                          %
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {categoryData.map((item, index) => (
                        <tr
                          key={index}
                          className="border-t border-t-[#523d4d] transition-all duration-300 hover:bg-[#382935]/30"
                          style={{
                            animationDelay: `${600 + index * 100}ms`,
                            animation: isLoaded
                              ? `fadeInUp 0.6s ease-out ${
                                  600 + index * 100
                                }ms both`
                              : "none",
                          }}
                        >
                          <td className="px-3 py-3 text-[#b79eb2] text-sm font-normal">
                            {item.name}
                          </td>
                          <td className="px-3 py-3 text-white text-sm font-medium">
                            ${item.amount}
                          </td>
                          <td className="px-3 py-3">
                            <div className="flex items-center gap-2">
                              <div className="w-16 bg-[#382935] rounded-full h-2">
                                <div
                                  className="bg-gradient-to-r from-[#9c167f] to-[#fa7538] h-2 rounded-full transition-all duration-1000"
                                  style={{
                                    width: isLoaded
                                      ? `${item.percentage}%`
                                      : "0%",
                                    transitionDelay: `${700 + index * 150}ms`,
                                  }}
                                ></div>
                              </div>
                              <span className="text-[#b79eb2] text-xs font-medium w-8">
                                {item.percentage}%
                              </span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div
              className={`transition-all duration-700 delay-600 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <h2 className="text-white text-2xl font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5 md:text-[22px]">
                Recent Transactions
              </h2>

              <div className="px-4 py-3">
                <label className="flex flex-col min-w-40 h-12 w-full">
                  <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                    <div className="text-[#b79eb2] flex border-none bg-[#382935] items-center justify-center pl-4 rounded-l-lg border-r-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                      </svg>
                    </div>
                    <input
                      placeholder="Search transactions"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border-none bg-[#382935] focus:border-none h-full placeholder:text-[#b79eb2] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal transition-all duration-300 focus:ring-2 focus:ring-[#9c167f]/50"
                    />
                  </div>
                </label>
              </div>

              <div className="flex gap-3 p-3 flex-wrap pr-4">
                {filters.map((filter, index) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg px-4 transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                      activeFilter === filter
                        ? "bg-[#9c167f] text-white shadow-lg"
                        : "bg-[#382935] text-white hover:bg-[#4a3547]"
                    } ${
                      isLoaded
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: `${800 + index * 100}ms` }}
                  >
                    <p className="text-md font-medium leading-normal">
                      {filter}
                    </p>
                  </button>
                ))}
              </div>

              <div className="px-4 py-3">
                <div className="flex overflow-hidden rounded-lg border border-[#523d4d] bg-[#171116] transition-all duration-500 hover:shadow-xl hover:shadow-[#9c167f]/10">
                  <div className="flex-1 overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-[#261c24]">
                          <th className="px-4 py-3 text-left text-white text-sm font-medium leading-normal min-w-[120px]">
                            Date
                          </th>
                          <th className="px-4 py-3 text-left text-white text-sm font-medium leading-normal min-w-[120px]">
                            Category
                          </th>
                          <th className="px-4 py-3 text-left text-white text-sm font-medium leading-normal min-w-[200px]">
                            Description
                          </th>
                          <th className="px-4 py-3 text-left text-white text-sm font-medium leading-normal min-w-[100px]">
                            Amount
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {transactions.map((transaction, index) => (
                          <tr
                            key={index}
                            className="border-t border-t-[#523d4d] transition-all duration-500 hover:bg-[#382935]/50"
                            style={{
                              animationDelay: `${900 + index * 100}ms`,
                              animation: isLoaded
                                ? `fadeInUp 0.6s ease-out ${
                                    900 + index * 100
                                  }ms both`
                                : "none",
                            }}
                          >
                            <td className="h-[72px] px-4 py-2 text-[#b79eb2] text-md font-normal leading-normal">
                              {transaction.date}
                            </td>
                            <td className="h-[72px] px-4 py-2 text-[#b79eb2] text-md font-normal leading-normal">
                              {transaction.category}
                            </td>
                            <td className="h-[72px] px-4 py-2 text-[#b79eb2] text-md font-normal leading-normal">
                              {transaction.description}
                            </td>
                            <td
                              className={`h-[72px] px-4 py-2 text-md font-normal leading-normal transition-all duration-300 ${
                                transaction.amount.startsWith("+")
                                  ? "text-green-500 hover:text-green-400"
                                  : "text-red-500 hover:text-red-400"
                              }`}
                            >
                              {transaction.amount}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
