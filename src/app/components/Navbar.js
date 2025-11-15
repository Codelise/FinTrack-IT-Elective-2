"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Navbar() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();

      if (error) {
        alert("Logout error:", error);
        return;
      }

      sessionStorage.removeItem("fintrack_visited");
      sessionStorage.removeItem("supabase.auth.token");
      localStorage.removeItem("supabase.auth.token");

      setShowLogoutModal(false);
      router.push("/pages/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-darkBorder px-4 py-3 sm:px-6 md:px-10">
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
          <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] md:text-xl">
            FinTrack
          </h2>
        </div>

        <div className="hidden md:flex flex-1 justify-end gap-8">
          <nav className="flex items-center gap-9">
            <Link
              className="text-white text-base font-medium leading-normal hover:text-lightText transition-colors"
              href="/pages/dashboard"
            >
              Dashboard
            </Link>
            <Link
              className="text-white text-base font-medium leading-normal hover:text-lightText transition-colors"
              href="/pages/dashboard/transactions"
            >
              Transactions
            </Link>
            <Link
              className="text-white text-base font-medium leading-normal hover:text-lightText transition-colors"
              href="/pages/dashboard/reports"
            >
              Reports
            </Link>
            <Link
              className="text-white text-base font-medium leading-normal hover:text-lightText transition-colors"
              href="/pages/dashboard/budget"
            >
              Budget
            </Link>
            <Link
              className="text-white text-base font-medium leading-normal hover:text-lightText transition-colors"
              href="/pages/dashboard/goal"
            >
              Goal
            </Link>
            <button
              onClick={() => setShowLogoutModal(true)}
              className="flex min-w-[84px] cursor-pointer items-center justify-center outline-0 rounded-lg h-10 px-4 bg-[#9c167f] text-white text-sm font-bold leading-normal tracking-[0.015em] transition-colors hover:bg-[#8a156f]"
            >
              <span className="truncate">Logout</span>
            </button>
          </nav>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white p-2 rounded-lg hover:bg-[#382935] transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <>
          <div
            className="md:hidden fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsMenuOpen(false)}
          />

          <div className="md:hidden fixed top-0 right-0 h-full w-1/2 max-w-xs bg-[#171116] border-l border-[#523d4c] z-50 shadow-lg">
            <div className="p-6">
              <div className="flex justify-end mb-6">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white p-2 rounded-lg hover:bg-[#382935] transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>
              </div>

              <nav className="flex flex-col space-y-6">
                <Link
                  className="text-white text-base font-medium leading-normal hover:text-lightText transition-colors py-2 border-b border-[#382935]"
                  href="/pages/dashboard"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <Link
                  className="text-white text-base font-medium leading-normal hover:text-lightText transition-colors py-2 border-b border-[#382935]"
                  href="/pages/transactions"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Transactions
                </Link>
                <Link
                  className="text-white text-base font-medium leading-normal hover:text-lightText transition-colors py-2 border-b border-[#382935]"
                  href="/pages/reports"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Reports
                </Link>
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    setShowLogoutModal(true);
                  }}
                  className="flex w-full cursor-pointer items-center justify-center outline-0 rounded-lg h-12 bg-[#9c167f] text-white text-base font-bold leading-normal tracking-[0.015em] transition-colors hover:bg-[#8a156f] mt-4"
                >
                  <span>Logout</span>
                </button>
              </nav>
            </div>
          </div>
        </>
      )}

      {showLogoutModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-[#261c23] rounded-lg p-6 max-w-md w-full border border-[#523d4c]">
            <div className="text-center mb-6">
              <div className="mx-auto w-12 h-12 mb-4 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                  <polyline points="16,17 21,12 16,7" />
                  <line x1="21" y1="12" x2="9" y2="12" />
                </svg>
              </div>
              <h3 className="text-white text-xl font-bold mb-2">
                Confirm Logout
              </h3>
              <p className="text-[#b79eb0]">
                Are you sure you want to log out?
              </p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleLogout}
                className="flex-1 cursor-pointer items-center justify-center rounded-lg h-12 bg-[#9c167f] text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-[#8a156f] transition-colors"
              >
                Yes, Logout
              </button>
              <button
                onClick={() => setShowLogoutModal(false)}
                className="flex-1 cursor-pointer items-center justify-center rounded-lg h-12 bg-[#382935] text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-[#2d212a] transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
