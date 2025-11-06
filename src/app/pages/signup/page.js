"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signUp } from "@/utils/supabase-client";
import Header from "@/app/components/Header";

export default function SignUp() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!formData.firstName?.trim() || !formData.lastName?.trim()) {
      setError("First name and last name are required");
      setLoading(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await signUp(formData.email, formData.password, {
        firstName: formData.firstName,
        lastName: formData.lastName,
      });

      if (error) {
        setError(error.message);
      } else {
        if (data.profileCreated === false) {
          setError(`Account created successfully!`);
          setTimeout(() => router.push("./login"), 2000);
        } else {
          alert("Account created successfully! You can now login.");
          router.push("./login");
        }
      }
    } catch (err) {
      setError("An unexpected error occured");
      console.error("Signup error: ", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-[#171116] dark group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <Header showLoginButton />
        <div className="px-10 flex flex-1 justify-center align-center py-30">
          <div className="layout-content-container flex flex-col w-lg  max-w-lg  flex-1">
            <h2 className="text-white tracking-light text-4xl font-bold leading-tight px-4 text-center pb-10 pt-5">
              Create your account
            </h2>

            <form onSubmit={handleSubmit}>
              {error && (
                <div className="bg-red-500/20 border border-red-500 text-white px-4 py-3 rounded">
                  {error}
                </div>
              )}

              <div className="flex max-w-auto flex-wrap items-end gap-4 px-4 py-3">
                <label
                  htmlFor="firstName"
                  className="flex flex-col min-w-40 flex-1"
                >
                  <p className="text-white text-xl font-medium leading-normal pb-2">
                    First Name
                  </p>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter your first name"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border border-[#523d4c] bg-[#261c23] focus:border-[#523d4c] h-14 placeholder:text-[#b79eb0] p-[15px]  pr-2 text-lg font-normal leading-normal"
                  />
                </label>
                <label
                  htmlFor="lastName"
                  className="flex flex-col min-w-40 flex-1"
                >
                  <p className="text-white text-xl font-medium leading-normal pb-2">
                    Last Name
                  </p>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Enter your last name"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border border-[#523d4c] bg-[#261c23] focus:border-[#523d4c] h-14 placeholder:text-[#b79eb0] p-[15px]  pr-2 text-lg font-normal leading-normal"
                  />
                </label>
              </div>
              <div className="flex max-w-auto flex-wrap items-end gap-4 px-4 py-3">
                <label
                  htmlFor="email"
                  className="flex flex-col min-w-40 flex-1"
                >
                  <p className="text-white text-xl font-medium leading-normal pb-2">
                    Email
                  </p>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border border-[#523d4c] bg-[#261c23] focus:border-[#523d4c] h-14 placeholder:text-[#b79eb0] p-[15px] pr-2 text-lg font-normal leading-normal"
                  />
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
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border border-[#523d4c] bg-[#261c23] focus:border-[#523d4c] h-14 placeholder:text-[#b79eb0] p-[15px] pr-2 text-lg font-normal leading-normal"
                  />
                </label>
              </div>
              <div className="flex max-w-auto flex-wrap items-end gap-4 px-4 py-3">
                <label
                  htmlFor="confirmPassword"
                  className="flex flex-col min-w-40 flex-1"
                >
                  <p className="text-white text-xl font-medium leading-normal pb-2">
                    Confirm Password
                  </p>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    autoComplete="new-password"
                    required
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm password"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border border-[#523d4c] bg-[#261c23] focus:border-[#523d4c] h-14 placeholder:text-[#b79eb0] p-[15px] pr-2 text-lg font-normal leading-normal"
                  />
                </label>
              </div>
              <div className="flex px-4 py-5">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 flex-1 bg-[#9c1676] text-white text-base font-bold leading-normal tracking-[0.015em]"
                >
                  <span className="truncate text-xl font-extrabold">
                    {loading ? "Creating account..." : "Create Account"}
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
