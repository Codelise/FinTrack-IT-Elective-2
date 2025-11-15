"use client";
import Link from "next/link";
import Header from "./components/Header";

export default function LandingPage() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-[#21121e] overflow-x-hidden">
      <div className="absolute top-[10%] left-[5%] w-24 h-24 rounded-full bg-gradient-to-r from-[#9c167f] to-[#63365a] opacity-10 blur-xl animate-float"></div>
      <div className="absolute top-[60%] right-[8%] w-24 h-24 rounded-full bg-gradient-to-r from-[#9c167f] to-[#63365a] opacity-10 blur-xl animate-float animation-delay-1000"></div>
      <div className="absolute bottom-[20%] left-[15%] w-24 h-24 rounded-full bg-gradient-to-r from-[#9c167f] to-[#63365a] opacity-10 blur-xl animate-float animation-delay-2000"></div>

      <div className="layout-container flex h-full grow flex-col z-10">
        <Header />
        <div className="px-10 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="@container">
              <div className="@[480px]:p-4">
                <div
                  className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-lg items-center justify-center p-4 transition-all duration-500 hover:scale-[1.005] hover:shadow-2xl hover:shadow-black/30 animate-fade-in-up"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("/money-background.jpeg")',
                  }}
                >
                  <div className="flex flex-col gap-2 text-center z-10">
                    <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                      Take Control of Your Finances
                    </h1>
                    <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal max-w-[600px]">
                      FinTrack helps you track your spending, set financial
                      goals, and achieve financial freedom. Start managing your
                      money effectively today.
                    </h2>
                  </div>
                  <Link href="/pages/login">
                    <button className="group flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#9c167f] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] relative transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#9c167f]/40 animate-pulse-slow">
                      <span className="truncate z-10 relative">
                        Get Started
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-10 px-4 py-10 @container">
              <div className="flex flex-col gap-4 animate-fade-in-up animation-delay-300">
                <h1 className="text-white tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
                  Key Features
                </h1>
                <p className="text-white text-base font-normal leading-normal max-w-[720px]">
                  FinTrack offers a range of features to help you manage your
                  finances effectively.
                </p>
              </div>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-0">
                <div className="group feature-card flex flex-1 gap-3 rounded-lg border border-[#63365a] bg-[#321b2d] p-4 flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/30 hover:border-[#9c167f] relative overflow-hidden animate-fade-in-up animation-delay-400">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#9c167f]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <div
                    className="text-white transition-transform duration-300 group-hover:scale-110 group-hover:text-[#e5a5d1] icon-hover"
                    data-icon="CurrencyDollar"
                    data-size="24px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M152,120H136V56h8a32,32,0,0,1,32,32,8,8,0,0,0,16,0,48.05,48.05,0,0,0-48-48h-8V24a8,8,0,0,0-16,0V40h-8a48,48,0,0,0,0,96h8v64H104a32,32,0,0,1-32-32,8,8,0,0,0-16,0,48.05,48.05,0,0,0,48,48h16v16a8,8,0,0,0,16,0V216h16a48,48,0,0,0,0-96Zm-40,0a32,32,0,0,1,0-64h8v64Zm40,80H136V136h16a32,32,0,0,1,0,64Z"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1 z-10">
                    <h2 className="text-white text-base font-bold leading-tight">
                      Expense Tracking
                    </h2>
                    <p className="text-[#c695bb] text-sm font-normal leading-normal">
                      Easily track your income and expenses with our intuitive
                      interface.
                    </p>
                  </div>
                </div>

                <div className="group feature-card flex flex-1 gap-3 rounded-lg border border-[#63365a] bg-[#321b2d] p-4 flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/30 hover:border-[#9c167f] relative overflow-hidden animate-fade-in-up animation-delay-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#9c167f]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <div
                    className="text-white transition-transform duration-300 group-hover:scale-110 group-hover:text-[#e5a5d1] icon-hover"
                    data-icon="ChartLine"
                    data-size="24px"
                    data-weight="regular"
                  >
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
                  <div className="flex flex-col gap-1 z-10">
                    <h2 className="text-white text-base font-bold leading-tight">
                      Goal Setting
                    </h2>
                    <p className="text-[#c695bb] text-sm font-normal leading-normal">
                      Set financial goals and monitor your progress in
                      real-time.
                    </p>
                  </div>
                </div>

                <div className="group feature-card flex flex-1 gap-3 rounded-lg border border-[#63365a] bg-[#321b2d] p-4 flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/30 hover:border-[#9c167f] relative overflow-hidden animate-fade-in-up animation-delay-600">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#9c167f]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <div
                    className="text-white transition-transform duration-300 group-hover:scale-110 group-hover:text-[#e5a5d1] icon-hover"
                    data-icon="ShieldCheck"
                    data-size="24px"
                    data-weight="regular"
                  >
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
                  <div className="flex flex-col gap-1 z-10">
                    <h2 className="text-white text-base font-bold leading-tight">
                      Secure &amp; Private
                    </h2>
                    <p className="text-[#c695bb] text-sm font-normal leading-normal">
                      Your data is encrypted and stored securely, ensuring your
                      privacy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="flex justify-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#9c167f] to-transparent"></div>
          <div className="flex max-w-[960px] flex-1 flex-col">
            <footer className="flex flex-col gap-6 px-5 py-10 text-center @container">
              <p className="text-[#c695bb] text-base font-normal leading-normal">
                © 2025 FinTrack. All rights reserved.
              </p>
            </footer>
          </div>
        </footer>
      </div>

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

        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }

        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
          opacity: 0;
        }

        .animate-pulse-slow {
          animation: pulse 3s infinite ease-in-out;
        }

        .animate-float {
          animation: float 5s infinite ease-in-out;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-500 {
          animation-delay: 0.5s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}
