"use client";

import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-6 py-4 flex items-center justify-between transition-colors">
      {/* Left side */}
      <div>
        <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
          Student Dashboard
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">Welcome back!</p>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-3">
        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Notification */}
        <button className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition">
          <span className="text-xl">🔔</span>
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* User */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold">
            S
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-medium text-gray-800 dark:text-white">
              Student Name
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              student@example.com
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}