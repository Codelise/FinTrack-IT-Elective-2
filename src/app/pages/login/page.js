import Link from "next/link";
import Header from "@/app/components/Header";

export default function Login() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-[#171116] dark group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <div className="px-10 flex flex-1 justify-center align-center py-50">
          <div className="layout-content-container flex flex-col w-lg py-5 max-w-lg flex-1">
            <h2 className="text-white tracking-light text-4xl font-bold leading-tight px-4  text-center pb-10 ">
              Welcome back
            </h2>
            <div className="flex max-w-auto flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-white text-xl font-medium leading-normal pb-2">
                  Email
                </p>
                <div className="flex w-full flex-1 items-stretch rounded-lg">
                  <input
                    placeholder="Enter your email"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border border-[#523d4c] bg-[#261c23] focus:border-[#523d4c] h-14 placeholder:text-[#b79eb0] p-[15px] rounded-r-none border-r-0 pr-2 text-lg font-normal leading-normal"
                    // value=""
                  />
                  <div
                    className="text-[#b79eb0] flex border border-[#523d4c] bg-[#261c23] items-center justify-center pr-[15px] rounded-r-lg border-l-0"
                    data-icon="User"
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
                      <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path>
                    </svg>
                  </div>
                </div>
              </label>
            </div>
            <div className="flex max-w-auto flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-white text-xl font-medium leading-normal pb-2">
                  Password
                </p>
                <div className="flex w-full flex-1 items-stretch rounded-lg">
                  <input
                    placeholder="Enter your password"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border border-[#523d4c] bg-[#261c23] focus:border-[#523d4c] h-14 placeholder:text-[#b79eb0] p-[15px] rounded-r-none border-r-0 pr-2 text-lg font-normal leading-normal"
                    // value=""
                  />
                  <div
                    className="text-[#b79eb0] flex border border-[#523d4c] bg-[#261c23] items-center justify-center pr-[15px] rounded-r-lg border-l-0"
                    data-icon="Lock"
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
                      <path d="M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Zm-68-56a12,12,0,1,1-12-12A12,12,0,0,1,140,152Z"></path>
                    </svg>
                  </div>
                </div>
              </label>
            </div>
            <p className="text-[#b79eb0] text-lg font-normal leading-normal pb-1 pt-3 px-4 text-left cursor-pointer ">
              Forgot password?
            </p>
            <div className="flex px-4 py-3">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 flex-1 bg-[#9c1674] text-white text-base font-bold leading-normal tracking-[0.015em]">
                <span className="truncate text-xl font-extrabold">Log in</span>
              </button>
            </div>
            <p className="text-[#b79eb0] text-lg font-normal leading-normal pb-3 pt-1 px-4 text-center cursor-pointer ">
              Don't have an account? Sign up
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
