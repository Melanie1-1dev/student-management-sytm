"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate network request (we will replace this with real auth later)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Login attempt:", { email, password });
    alert("Login successful (simulated)!\nReal authentication will be added later.");
    
    setIsLoading(false);
  };

  const handleSocialLogin = (provider: string) => {
    alert(`${provider} login will be connected later when we add real authentication.`);
  };

  return (
    <main
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center p-6"
      style={{ backgroundImage: "url('/images/background1.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-indigo-900/40"></div>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md">
        <div className="bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/20 p-8 md:p-10">
          
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
              Welcome Back
            </h1>
            <p className="text-white/70 text-sm">
              Sign in to continue to your dashboard
            </p>
          </div>

          {/* Social Login Buttons */}
          <div className="space-y-3 mb-6">
            <button
              type="button"
              onClick={() => handleSocialLogin("Google")}
              className="w-full flex items-center justify-center gap-3 py-3 px-4 
                         bg-white/10 hover:bg-white/20 border border-white/20 
                         rounded-xl text-white font-medium transition-all duration-300"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continue with Google
            </button>
        
          </div>

          {/* Divider */}
          <div className="my-6 flex items-center gap-4">
            <div className="h-px bg-white/20 flex-1"></div>
            <span className="text-xs text-white/40 uppercase tracking-wider">or</span>
            <div className="h-px bg-white/20 flex-1"></div>
          </div>

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-white/80 mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                disabled={isLoading}
                className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 
                           text-white placeholder:text-white/40
                           focus:outline-none focus:ring-2 focus:ring-blue-400/60 focus:border-transparent
                           transition-all duration-300 disabled:opacity-50"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-white/80 mb-1.5">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer text-white/70 hover:text-white transition">
                <input
                  type="checkbox"
                  disabled={isLoading}
                  className="w-4 h-4 rounded border-white/30 bg-white/10 text-blue-500 focus:ring-blue-400"
                />
                Remember me
              </label>
              <a href="#" className="text-blue-300 hover:text-blue-200 transition">
                Forgot password?
              </a>
            </div>

            {/* Submit Button with Loading State */}
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
                  Signing in...
                </>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          {/* Register Link */}
          <p className="text-center text-white/70 text-sm mt-7">
            Don’t have an account?{" "}
            <Link
              href="/register"
              className="text-blue-300 font-medium hover:text-blue-200 transition"
            >
              Create one
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