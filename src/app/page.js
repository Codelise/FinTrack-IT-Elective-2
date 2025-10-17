"use client";
import Link from "next/link";

export default function Home() {
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
                <g clipPath="url(#clip0_6_535)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z"
                    fill="currentColor"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_6_535">
                    <rect width="48" height="48" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
              FinTrack
            </h2>
          </div>
          <div className="flex flex-1 justify-end gap-4 sm:gap-8">
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#1383eb] text-white text-sm font-bold leading-normal tracking-[0.015em]">
              <Link href="/pages/signup">
                <span className="truncate">Sign Up</span>
              </Link>
            </button>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#1383eb] text-white text-sm font-bold leading-normal tracking-[0.015em]">
              <Link href="/pages/login">
                <span className="truncate">Login</span>
              </Link>
            </button>
          </div>
        </header>

        <div className="px-4 sm:px-8 lg:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="w-full">
              <div className="sm:p-4">
                <div
                  className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat sm:gap-8 sm:rounded-xl items-center justify-center p-4 rounded-lg"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDgWZRI2iqPP3N3Ptf_vp-CcPxv8YWmN4JrPn6_gQpuD0y3CPywcF-AseCRSD1MzK1Csai1U63aa41S-9KM4B2J6TM7VitTGWZaBDj-m5RCqjjhdcRAjWELsuU95LhwY6wyDD9ix_z-w5r8Qofp6XLulscAsV-hCvUBG2MsTON4W4WJYSlmUkZt7aIXdhD1YuLeMXqji8yketeBpErAieB_ZBJJrM9D_6rBL9lFP0RHDUWC4hntTztX90mQKH3SCGo7esZdzYOb9aM")',
                  }}
                >
                  <div className="flex flex-col gap-2 text-center">
                    <h1 className="text-white text-3xl sm:text-4xl font-black leading-tight tracking-[-0.033em]">
                      Take Control of Your Finances
                    </h1>
                    <h2 className="text-white text-sm sm:text-base font-normal leading-normal">
                      BudgetWise helps you track your spending, set financial
                      goals, and achieve financial freedom with ease.
                    </h2>
                  </div>
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 sm:h-12 px-4 sm:px-5 bg-[#1383eb] text-white text-sm sm:text-base font-bold leading-normal tracking-[0.015em]">
                    <Link href="/pages/login">
                      <span className="truncate">Get Started</span>
                    </Link>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-8 sm:gap-10 px-4 py-8 sm:py-10">
              <div className="flex flex-col gap-4">
                <h1 className="text-white text-2xl sm:text-[32px] font-bold leading-tight max-w-[720px]">
                  Key Features
                </h1>
                <p className="text-white text-base font-normal leading-normal max-w-[720px]">
                  Explore the powerful tools that BudgetWise offers to help you
                  manage your finances effectively.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-0">
                <div className="flex flex-1 gap-3 rounded-lg border border-[#324d67] bg-[#192733] p-4 flex-col">
                  <div className="text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V48a8,8,0,0,1,16,0v94.37L90.73,98a8,8,0,0,1,10.07-.38l58.81,44.11L218.73,90a8,8,0,1,1,10.54,12l-64,56a8,8,0,0,1-10.07.38L96.39,114.29,40,163.63V200H224A8,8,0,0,1,232,208Z"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-white text-base font-bold leading-tight">
                      Expense Tracking
                    </h2>
                    <p className="text-[#92aec9] text-sm font-normal leading-normal">
                      Easily monitor your daily expenses and categorize your
                      spending to understand where your money goes.
                    </p>
                  </div>
                </div>

                <div className="flex flex-1 gap-3 rounded-lg border border-[#324d67] bg-[#192733] p-4 flex-col">
                  <div className="text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M221.87,83.16A104.1,104.1,0,1,1,195.67,49l22.67-22.68a8,8,0,0,1,11.32,11.32l-96,96a8,8,0,0,1-11.32-11.32l27.72-27.72a40,40,0,1,0,17.87,31.09,8,8,0,0,1,16-.9,56,56,0,1,1-22.38-41.65L184.3,60.39a87.88,87.88,0,1,0,23.13,29.67,8,8,0,0,1,14.44-6.9Z"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-white text-base font-bold leading-tight">
                      Goal Setting
                    </h2>
                    <p className="text-[#92aec9] text-sm font-normal leading-normal">
                      Set personalized financial goals, track your progress, and
                      stay motivated to achieve your targets.
                    </p>
                  </div>
                </div>

                <div className="flex flex-1 gap-3 rounded-lg border border-[#324d67] bg-[#192733] p-4 flex-col">
                  <div className="text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M208,40H48A16,16,0,0,0,32,56v58.78c0,89.61,75.82,119.34,91,124.39a15.53,15.53,0,0,0,10,0c15.2-5.05,91-34.78,91-124.39V56A16,16,0,0,0,208,40Zm0,74.79c0,78.42-66.35,104.62-80,109.18-13.53-4.51-80-30.69-80-109.18V56H208ZM82.34,141.66a8,8,0,0,1,11.32-11.32L112,148.68l50.34-50.34a8,8,0,0,1,11.32,11.32l-56,56a8,8,0,0,1-11.32,0Z"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-white text-base font-bold leading-tight">
                      Secure & Private
                    </h2>
                    <p className="text-[#92aec9] text-sm font-normal leading-normal">
                      Your data is protected with top-notch security measures,
                      ensuring your financial information remains private and
                      safe.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full">
              <div className="flex flex-col justify-end gap-6 px-4 py-8 sm:py-10 sm:gap-8 sm:px-10">
                <div className="flex flex-col gap-2 text-center">
                  <h1 className="text-white text-2xl sm:text-[32px] font-bold leading-tight max-w-[720px] mx-auto">
                    Ready to Transform Your Financial Future?
                  </h1>
                  <p className="text-white text-base font-normal leading-normal max-w-[720px] mx-auto">
                    Join thousands of users who are already benefiting from
                    BudgetWise's intuitive and effective budgeting tools.
                  </p>
                </div>
                <div className="flex flex-1 justify-center">
                  <div className="flex justify-center w-full max-w-[200px]">
                    <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 sm:h-12 px-4 sm:px-5 bg-[#1383eb] text-white text-sm sm:text-base font-bold leading-normal tracking-[0.015em]">
                      <Link href="/pages/signup">
                        <span className="truncate">Sign Up Now</span>
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="flex justify-center">
          <div className="flex max-w-[960px] flex-1 flex-col">
            <div className="flex flex-col gap-6 px-5 py-8 sm:py-10 text-center">
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                <a
                  className="text-[#92aec9] text-sm sm:text-base font-normal leading-normal min-w-32 sm:min-w-40"
                  href="#"
                >
                  Privacy Policy
                </a>
                <a
                  className="text-[#92aec9] text-sm sm:text-base font-normal leading-normal min-w-32 sm:min-w-40"
                  href="#"
                >
                  Terms of Service
                </a>
                <a
                  className="text-[#92aec9] text-sm sm:text-base font-normal leading-normal min-w-32 sm:min-w-40"
                  href="#"
                >
                  Contact Us
                </a>
              </div>
              <p className="text-[#92aec9] text-sm sm:text-base font-normal leading-normal">
                © 2025 FinTrack. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
