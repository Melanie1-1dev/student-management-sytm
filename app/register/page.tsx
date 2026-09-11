"use client";

import { useState } from "react";
import Link from "next/link";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "student", // default role
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    setIsLoading(true);

    // Simulate network request (real registration later)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Register data:", formData);
    alert(
      `Account created successfully (simulated)!\nRole: ${formData.role}\n\nReal registration will be added later.`
    );

    setIsLoading(false);
  };

  return (
    <main
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center p-6"
      style={{ backgroundImage: "url('/images/background1.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-indigo-900/40"></div>

      {/* Register Card */}
      <div className="relative z-10 w-full max-w-md">
        <div className="bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/20 p-8 md:p-10">
          
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
              Create Account
            </h1>
            <p className="text-white/70 text-sm">
              Join the Student Management Platform
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-white/80 mb-1.5">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="John Doe"
                required
                disabled={isLoading}
                className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 
                           text-white placeholder:text-white/40
                           focus:outline-none focus:ring-2 focus:ring-blue-400/60 focus:border-transparent
                           transition-all duration-300 disabled:opacity-50"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-white/80 mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                disabled={isLoading}
                className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 
                           text-white placeholder:text-white/40
                           focus:outline-none focus:ring-2 focus:ring-blue-400/60 focus:border-transparent
                           transition-all duration-300 disabled:opacity-50"
              />
            </div>

            {/* Role Selection */}
            <div>
              <label className="block text-sm font-medium text-white/80 mb-1.5">
                I am a...
              </label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                disabled={isLoading}
                className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 
                           text-white
                           focus:outline-none focus:ring-2 focus:ring-blue-400/60 focus:border-transparent
                           transition-all duration-300 disabled:opacity-50"
              >
                <option value="student" className="text-gray-800">Student</option>
                <option value="teacher" className="text-gray-800">Teacher</option>
                <option value="admin" className="text-gray-800">Admin</option>
              </select>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-white/80 mb-1.5">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                  disabled={isLoading}
                  className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 
                             text-white placeholder:text-white/40
                             focus:outline-none focus:ring-2 focus:ring-blue-400/60 focus:border-transparent
                             transition-all duration-300 pr-14 disabled:opacity-50"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={isLoading}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white text-sm font-medium transition disabled:opacity-50"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-white/80 mb-1.5">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                  disabled={isLoading}
                  className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 
                             text-white placeholder:text-white/40
                             focus:outline-none focus:ring-2 focus:ring-blue-400/60 focus:border-transparent
                             transition-all duration-300 pr-14 disabled:opacity-50"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  disabled={isLoading}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white text-sm font-medium transition disabled:opacity-50"
                >
                  {showConfirmPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 mt-2 bg-gradient-to-r from-blue-600 to-indigo-600 
                         hover:from-blue-500 hover:to-indigo-500
                         text-white font-semibold rounded-xl 
                         shadow-lg shadow-blue-500/25
                         transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]
                         disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100
                         flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Creating account...
                </>
              ) : (
                "Create Account"
              )}
            </button>
          </form>

          {/* Login Link */}
          <p className="text-center text-white/70 text-sm mt-7">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-blue-300 font-medium hover:text-blue-200 transition"
            >
              Sign in
            </Link>
          </p>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-6">
          <Link
            href="/"
            className="text-white/60 hover:text-white text-sm transition"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}