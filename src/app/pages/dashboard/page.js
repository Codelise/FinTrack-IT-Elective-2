// app/dashboard/page.js
export default function Dashboard() {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#111a22] dark group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#233648] px-4 sm:px-6 lg:px-10 py-3">
          <div className="flex items-center gap-4 text-white">
            <div className="size-4">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M39.5563 34.1455V13.8546C39.5563 15.708 36.8773 17.3437 32.7927 18.3189C30.2914 18.916 27.263 19.2655 24 19.2655C20.737 19.2655 17.7086 18.916 15.2073 18.3189C11.1227 17.3437 8.44365 15.708 8.44365 13.8546V34.1455C8.44365 35.9988 11.1227 37.6346 15.2073 38.6098C17.7086 39.2069 20.737 39.5564 24 39.5564C27.263 39.5564 30.2914 39.2069 32.7927 38.6098C36.8773 37.6346 39.5563 35.9988 39.5563 34.1455Z"
                  fill="currentColor"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.4485 13.8519C10.4749 13.9271 10.6203 14.246 11.379 14.7361C12.298 15.3298 13.7492 15.9145 15.6717 16.3735C18.0007 16.9296 20.8712 17.2655 24 17.2655C27.1288 17.2655 29.9993 16.9296 32.3283 16.3735C34.2508 15.9145 35.702 15.3298 36.621 14.7361C37.3796 14.246 37.5251 13.9271 37.5515 13.8519C37.5287 13.7876 37.4333 13.5973 37.0635 13.2931C36.5266 12.8516 35.6288 12.3647 34.343 11.9175C31.79 11.0295 28.1333 10.4437 24 10.4437C19.8667 10.4437 16.2099 11.0295 13.657 11.9175C12.3712 12.3647 11.4734 12.8516 10.9365 13.2931C10.5667 13.5973 10.4713 13.7876 10.4485 13.8519ZM37.5563 18.7877C36.3176 19.3925 34.8502 19.8839 33.2571 20.2642C30.5836 20.9025 27.3973 21.2655 24 21.2655C20.6027 21.2655 17.4164 20.9025 14.7429 20.2642C13.1498 19.8839 11.6824 19.3925 10.4436 18.7877V34.1275C10.4515 34.1545 10.5427 34.4867 11.379 35.027C12.298 35.6207 13.7492 36.2054 15.6717 36.6644C18.0007 37.2205 20.8712 37.5564 24 37.5564C27.1288 37.5564 29.9993 37.2205 32.3283 36.6644C34.2508 36.2054 35.702 35.6207 36.621 35.027C37.4573 34.4867 37.5485 34.1546 37.5563 34.1275V18.7877ZM41.5563 13.8546V34.1455C41.5563 36.1078 40.158 37.5042 38.7915 38.3869C37.3498 39.3182 35.4192 40.0389 33.2571 40.5551C30.5836 41.1934 27.3973 41.5564 24 41.5564C20.6027 41.5564 17.4164 41.1934 14.7429 40.5551C12.5808 40.0389 10.6502 39.3182 9.20848 38.3869C7.84205 37.5042 6.44365 36.1078 6.44365 34.1455L6.44365 13.8546C6.44365 12.2684 7.37223 11.0454 8.39581 10.2036C9.43325 9.3505 10.8137 8.67141 12.343 8.13948C15.4203 7.06909 19.5418 6.44366 24 6.44366C28.4582 6.44366 32.5797 7.06909 35.657 8.13948C37.1863 8.67141 38.5667 9.3505 39.6042 10.2036C40.6278 11.0454 41.5563 12.2684 41.5563 13.8546Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
              FinTrack
            </h2>
          </div>
          <div className="flex flex-1 justify-end gap-4 sm:gap-8">
            <div className="flex items-center gap-4 sm:gap-9">
              <a
                className="text-white text-sm font-medium leading-normal"
                href="#"
              >
                Dashboard
              </a>
              <a
                className="text-white text-sm font-medium leading-normal"
                href="#"
              >
                Transactions
              </a>
              <a
                className="text-white text-sm font-medium leading-normal"
                href="#"
              >
                Budgets
              </a>
              <a
                className="text-white text-sm font-medium leading-normal"
                href="#"
              >
                Reports
              </a>
            </div>
            <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 bg-[#233648] text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
              <div className="text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"></path>
                </svg>
              </div>
            </button>
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBtSzSFuxAwoo3R2KmSujtnml82RPMAruHLxrh_iIpxPxtEMKmof6ofymD9GP5X-WsZ4ZGADtedd2kh55wHRU2mrpAyh-TGDZPF6B5zqsb3T8o93WWfr2QrHw0-LdYIoySaVT96wW5_3ShXD0tUSEYtV4vkuBCyIuzpO5pmYTMrM6RtNYgBE5yVnl6YLZEBzipiPK6XTyQSfuUwOsKU7wEnIa4VR0oCFn26nAdRF4VXRVJaMcAYr6AXUMQ7PHM2O86NGobtP-Qbitk")',
              }}
            ></div>
          </div>
        </header>

        <div className="px-4 sm:px-8 lg:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            {/* Dashboard Header */}
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-white text-2xl sm:text-[32px] font-bold leading-tight">
                  Dashboard
                </p>
                <p className="text-[#92aec9] text-sm font-normal leading-normal">
                  Your financial overview at a glance.
                </p>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="flex flex-wrap gap-4 p-4">
              <div className="flex min-w-[200px] flex-1 flex-col gap-2 rounded-xl p-6 bg-[#233648]">
                <p className="text-white text-base font-medium leading-normal">
                  Total Income
                </p>
                <p className="text-white text-2xl font-bold leading-tight">
                  $12,500
                </p>
                <p className="text-[#0bda5b] text-base font-medium leading-normal">
                  +15%
                </p>
              </div>
              <div className="flex min-w-[200px] flex-1 flex-col gap-2 rounded-xl p-6 bg-[#233648]">
                <p className="text-white text-base font-medium leading-normal">
                  Total Expenses
                </p>
                <p className="text-white text-2xl font-bold leading-tight">
                  $8,200
                </p>
                <p className="text-[#fa6238] text-base font-medium leading-normal">
                  -10%
                </p>
              </div>
              <div className="flex min-w-[200px] flex-1 flex-col gap-2 rounded-xl p-6 bg-[#233648]">
                <p className="text-white text-base font-medium leading-normal">
                  Net Savings
                </p>
                <p className="text-white text-2xl font-bold leading-tight">
                  $4,300
                </p>
                <p className="text-[#0bda5b] text-base font-medium leading-normal">
                  +25%
                </p>
              </div>
            </div>

            {/* Spending Patterns */}
            <h2 className="text-white text-xl sm:text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Spending Patterns
            </h2>
            <div className="flex flex-col lg:flex-row gap-4 px-4 py-6">
              {/* Expenses by Category */}
              <div className="flex min-w-72 flex-1 flex-col gap-2 rounded-xl border border-[#324d67] p-6">
                <p className="text-white text-base font-medium leading-normal">
                  Expenses by Category
                </p>
                <div className="grid min-h-[180px] grid-flow-col gap-6 grid-rows-[1fr_auto] items-end justify-items-center px-3">
                  <div
                    className="border-[#92aec9] bg-[#233648] border-t-2 w-full"
                    style={{ height: "30%" }}
                  ></div>
                  <p className="text-[#92aec9] text-[13px] font-bold leading-normal tracking-[0.015em]">
                    Food
                  </p>
                  <div
                    className="border-[#92aec9] bg-[#233648] border-t-2 w-full"
                    style={{ height: "50%" }}
                  ></div>
                  <p className="text-[#92aec9] text-[13px] font-bold leading-normal tracking-[0.015em]">
                    Rent
                  </p>
                  <div
                    className="border-[#92aec9] bg-[#233648] border-t-2 w-full"
                    style={{ height: "60%" }}
                  ></div>
                  <p className="text-[#92aec9] text-[13px] font-bold leading-normal tracking-[0.015em]">
                    Utilities
                  </p>
                  <div
                    className="border-[#92aec9] bg-[#233648] border-t-2 w-full"
                    style={{ height: "20%" }}
                  ></div>
                  <p className="text-[#92aec9] text-[13px] font-bold leading-normal tracking-[0.015em]">
                    Transportation
                  </p>
                  <div
                    className="border-[#92aec9] bg-[#233648] border-t-2 w-full"
                    style={{ height: "50%" }}
                  ></div>
                  <p className="text-[#92aec9] text-[13px] font-bold leading-normal tracking-[0.015em]">
                    Entertainment
                  </p>
                </div>
              </div>

              {/* Budget Adherence */}
              <div className="flex min-w-72 flex-1 flex-col gap-2 rounded-xl border border-[#324d67] p-6">
                <p className="text-white text-base font-medium leading-normal">
                  Budget Adherence Over Time
                </p>
                <div className="flex min-h-[180px] flex-1 flex-col gap-8 py-4">
                  <svg
                    width="100%"
                    height="148"
                    viewBox="-3 0 478 150"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H326.769H0V109Z"
                      fill="url(#paint0_linear_1131_5935)"
                    ></path>
                    <path
                      d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25"
                      stroke="#92aec9"
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
                        <stop stopColor="#233648"></stop>
                        <stop
                          offset="1"
                          stopColor="#233648"
                          stopOpacity="0"
                        ></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="flex justify-around">
                    <p className="text-[#92aec9] text-[13px] font-bold leading-normal tracking-[0.015em]">
                      Jan
                    </p>
                    <p className="text-[#92aec9] text-[13px] font-bold leading-normal tracking-[0.015em]">
                      Feb
                    </p>
                    <p className="text-[#92aec9] text-[13px] font-bold leading-normal tracking-[0.015em]">
                      Mar
                    </p>
                    <p className="text-[#92aec9] text-[13px] font-bold leading-normal tracking-[0.015em]">
                      Apr
                    </p>
                    <p className="text-[#92aec9] text-[13px] font-bold leading-normal tracking-[0.015em]">
                      May
                    </p>
                    <p className="text-[#92aec9] text-[13px] font-bold leading-normal tracking-[0.015em]">
                      Jun
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Transactions */}
            <h2 className="text-white text-xl sm:text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Recent Transactions
            </h2>
            <div className="px-4 py-3">
              <div className="flex overflow-hidden rounded-xl border border-[#324d67] bg-[#111a22]">
                <div className="w-full overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-[#192733]">
                        <th className="px-4 py-3 text-left text-white text-sm font-medium leading-normal">
                          Date
                        </th>
                        <th className="px-4 py-3 text-left text-white text-sm font-medium leading-normal">
                          Description
                        </th>
                        <th className="px-4 py-3 text-left text-white text-sm font-medium leading-normal">
                          Category
                        </th>
                        <th className="px-4 py-3 text-left text-white text-sm font-medium leading-normal">
                          Amount
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          date: "2024-07-15",
                          desc: "Grocery shopping at Local Market",
                          category: "Food",
                          amount: "-$150",
                        },
                        {
                          date: "2024-07-14",
                          desc: "Rent payment",
                          category: "Rent",
                          amount: "-$2,000",
                        },
                        {
                          date: "2024-07-13",
                          desc: "Salary deposit",
                          category: "Income",
                          amount: "+$5,000",
                        },
                        {
                          date: "2024-07-12",
                          desc: "Dinner at Bistro",
                          category: "Entertainment",
                          amount: "-$80",
                        },
                        {
                          date: "2024-07-11",
                          desc: "Gasoline",
                          category: "Transportation",
                          amount: "-$50",
                        },
                      ].map((transaction, index) => (
                        <tr key={index} className="border-t border-t-[#324d67]">
                          <td className="h-[72px] px-4 py-2 text-[#92aec9] text-sm font-normal leading-normal">
                            {transaction.date}
                          </td>
                          <td className="h-[72px] px-4 py-2 text-[#92aec9] text-sm font-normal leading-normal">
                            {transaction.desc}
                          </td>
                          <td className="h-[72px] px-4 py-2 text-sm font-normal leading-normal">
                            <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#233648] text-white text-sm font-medium leading-normal">
                              <span className="truncate">
                                {transaction.category}
                              </span>
                            </button>
                          </td>
                          <td className="h-[72px] px-4 py-2 text-[#92aec9] text-sm font-normal leading-normal">
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
  );
}
