"use client";
import Link from "next/link";
import Header from "@/app/components/Header";
export default function SignUp() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-[#171116] dark group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <Header showLoginButton />
        <div className="px-10 flex flex-1 justify-center align-center py-30">
          <div className="layout-content-container flex flex-col w-lg py-5 max-w-lg  flex-1">
            <h2 className="text-white tracking-light text-4xl font-bold leading-tight px-4 text-center pb-10 pt-5">
              Create your account
            </h2>
            <div className="flex max-w-auto flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-white text-xl font-medium leading-normal pb-2">
                  First Name
                </p>
                <input
                  placeholder="Enter your first name"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border border-[#523d4c] bg-[#261c23] focus:border-[#523d4c] h-14 placeholder:text-[#b79eb0] p-[15px]  pr-2 text-lg font-normal leading-normal"
                  // value=""
                />
              </label>
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-white text-xl font-medium leading-normal pb-2">
                  Last Name
                </p>
                <input
                  placeholder="Enter your last name"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border border-[#523d4c] bg-[#261c23] focus:border-[#523d4c] h-14 placeholder:text-[#b79eb0] p-[15px]  pr-2 text-lg font-normal leading-normal"
                  // value=""
                />
              </label>
            </div>
            <div className="flex max-w-auto flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-white text-xl font-medium leading-normal pb-2">
                  Email
                </p>
                <input
                  placeholder="Enter your email"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border border-[#523d4c] bg-[#261c23] focus:border-[#523d4c] h-14 placeholder:text-[#b79eb0] p-[15px] pr-2 text-lg font-normal leading-normal"
                  // value=""
                />
              </label>
            </div>
            <div className="flex max-w-auto flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-white text-xl font-medium leading-normal pb-2">
                  Password
                </p>
                <input
                  placeholder="Enter your password"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border border-[#523d4c] bg-[#261c23] focus:border-[#523d4c] h-14 placeholder:text-[#b79eb0] p-[15px] pr-2 text-lg font-normal leading-normal"
                  // value=""
                />
              </label>
            </div>
            <div className="flex max-w-auto flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-white text-xl font-medium leading-normal pb-2">
                  Confirm Password
                </p>
                <input
                  placeholder="Confirm password"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border border-[#523d4c] bg-[#261c23] focus:border-[#523d4c] h-14 placeholder:text-[#b79eb0] p-[15px] pr-2 text-lg font-normal leading-normal"
                  // value=""
                />
              </label>
            </div>
            <div className="flex px-4 py-5">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 flex-1 bg-[#9c1676] text-white text-base font-bold leading-normal tracking-[0.015em]">
                <span className="truncate text-xl font-extrabold">
                  <Link href="./login">Create Account</Link>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
