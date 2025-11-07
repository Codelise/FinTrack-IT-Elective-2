"use client";
import Link from "next/link";
import { use, useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "@/utils/supabase-client";
import Header from "@/app/components/Header";
import AuthGuard from "@/app/components/AuthGuard";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!formData.email || !formData.password) {
      setError("Please fill in all fields");
      setLoading(false);
      return;
    }
    try {
      const { data, error } = await signIn(formData.email, formData.password);

      if (error) {
        setError(error.message);
      } else {
        console.log("Login successful: ", data.user);
        router.push("./dashboard");
      }
    } catch (err) {
      setError("An unexpected error occured");
      console.error("Login error: ", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthGuard requireAuth={false}>
      <div className="relative flex h-auto min-h-screen w-full flex-col bg-[#171116] dark group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <Header showLoginButton={false} />
          <div className="px-10 flex flex-1 justify-center align-center py-30">
            <div className="layout-content-container flex flex-col w-lg py-5 max-w-lg flex-1">
              <h2 className="text-white tracking-light text-4xl font-bold leading-tight px-4  text-center pb-10 ">
                Welcome back
              </h2>

              <form onSubmit={handleSubmit}>
                {error && (
                  <div className="bg-red-500/20 border border-red-500 text-white px-4 py-3 rounded text-sm">
                    {error}
                  </div>
                )}

                <div className="flex max-w-auto flex-wrap items-end gap-4 px-4 ">
                  <label
                    htmlFor="email"
                    className="flex flex-col min-w-40 flex-1"
                  >
                    <p className="text-white text-xl font-medium leading-normal pb-2">
                      Email
                    </p>
                    <div className="flex w-full flex-1 items-stretch rounded-lg">
                      <input
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border border-[#523d4c] bg-[#261c23] focus:border-[#523d4c] h-14 placeholder:text-[#b79eb0] p-[15px] rounded-r-none border-r-0 pr-2 text-lg font-normal leading-normal"
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
                  <label
                    htmlFor="password"
                    className="flex flex-col min-w-40 flex-1"
                  >
                    <p className="text-white text-xl font-medium leading-normal pb-2">
                      Password
                    </p>
                    <div className="flex w-full flex-1 items-stretch rounded-lg">
                      <input
                        name="password"
                        type={showPassword ? "text" : "password"}
                        value={formData.password}
                        onChange={handleChange}
                        required
                        placeholder="Enter your password"
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border border-[#523d4c] bg-[#261c23] focus:border-[#523d4c] h-14 placeholder:text-[#b79eb0] p-[15px] rounded-r-none border-r-0 pr-2 text-lg font-normal leading-normal"
                      />

                      <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="text-lightText flex border border-[#523d4c]  bg-[#261c23] text-white items-center justify-center px-4 rounded-r-lg border-l-0  transition-colors"
                      >
                        {showPassword ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            viewBox="0 0 256 256"
                          >
                            <path d="M53.92,34.62A8,8,0,1,0,42.08,45.38L61.32,66.55C25,88.84,9.38,123.2,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208a127.11,127.11,0,0,0,52.07-10.83l22,24.21a8,8,0,1,0,11.84-10.76Zm47.33,75.84,41.67,45.85a32,32,0,0,1-41.67-45.85ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.16,133.16,0,0,1,25,128c4.69-8.79,19.66-33.39,47.35-49.38l18,19.75a48,48,0,0,0,63.66,70l14.73,16.2A112,112,0,0,1,128,192Zm6-95.43a8,8,0,0,1,3-15.72,48.16,48.16,0,0,1,38.77,42.64,8,8,0,0,1-7.22,8.71,6.39,6.39,0,0,1-.75,0,8,8,0,0,1-8-7.26A32.09,32.09,0,0,0,134,96.57Zm113.28,34.69c-.35.79-8.82,19.57-27.65,38.4-1.18,1.18-2.38,2.34-3.59,3.47a8,8,0,0,1-10.93-11.67c1-1,2-2,3-3A133.16,133.16,0,0,0,231,128c-4.69-8.79-19.66-33.39-47.35-49.38a8,8,0,1,1,8.7-13.53C216.94,77.67,231.94,102.27,236.63,111.06A8,8,0,0,1,234.71,117,8.13,8.13,0,0,1,231,119.26Z" />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            viewBox="0 0 256 256"
                          >
                            <path d="M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.45,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </label>
                </div>
                <p className="text-[#b79eb0] text-lg font-normal leading-normal pb-1 pt-3 px-4 text-left cursor-pointer ">
                  Forgot password?
                </p>
                <div className="flex px-4 py-3">
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 flex-1 bg-[#9c1674] text-white text-base font-bold leading-normal tracking-[0.015em]"
                  >
                    <span className="truncate text-xl font-extrabold">
                      {loading ? "Signing in.." : "Log in"}
                    </span>
                  </button>
                </div>
                <p className="text-[#b79eb0] text-lg font-normal leading-normal pb-3 pt-1 px-4 text-center cursor-pointer ">
                  Don't have an account?
                  <Link href="./signup" className="text-blue-700">
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </AuthGuard>
  );
}
