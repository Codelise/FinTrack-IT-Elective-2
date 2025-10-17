"use client";
import Link from "next/link";
export default function SignUp() {
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
        </header>

        <div className="px-4 sm:px-8 lg:px-40 flex flex-1 justify-center items-center py-5">
          <div className="layout-content-container flex flex-col w-full max-w-[512px] py-5 flex-1">
            <div className="flex flex-col items-center w-full">
              <h2 className="text-white text-2xl sm:text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">
                Create your account
              </h2>

              <div className="flex flex-col w-full max-w-[400px] gap-4 px-4 py-3">
                <label className="flex flex-col w-full">
                  <input
                    placeholder="Full Name"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#233648] focus:border-none h-14 placeholder:text-[#92aec9] p-4 text-base font-normal leading-normal"
                  />
                </label>

                <label className="flex flex-col w-full">
                  <input
                    placeholder="Email"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#233648] focus:border-none h-14 placeholder:text-[#92aec9] p-4 text-base font-normal leading-normal"
                  />
                </label>

                <label className="flex flex-col w-full">
                  <input
                    placeholder="Password"
                    type="password"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#233648] focus:border-none h-14 placeholder:text-[#92aec9] p-4 text-base font-normal leading-normal"
                  />
                </label>

                <label className="flex flex-col w-full">
                  <input
                    placeholder="Confirm Password"
                    type="password"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#233648] focus:border-none h-14 placeholder:text-[#92aec9] p-4 text-base font-normal leading-normal"
                  />
                </label>
              </div>

              <div className="flex w-full max-w-[400px] px-4 py-3">
                <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 bg-[#1383eb] text-white text-base font-bold leading-normal tracking-[0.015em]">
                  <Link href="./login/">
                    <span className="truncate">Sign Up</span>
                  </Link>
                </button>
              </div>

              <p className="text-[#92aec9] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center">
                Already have an account?{" "}
                <Link href="./login" className="text-[#1383eb] hover:underline">
                  Log In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
