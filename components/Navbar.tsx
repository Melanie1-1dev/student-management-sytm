"use client";

import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const pathname = usePathname();

  // Detect current role from the URL
  let portalName = "Dashboard";
  let welcomeText = "Welcome back!";

  if (pathname.startsWith("/student")) {
    portalName = "Student Dashboard";
    welcomeText = "Welcome back, Student!";
  } else if (pathname.startsWith("/teacher")) {
    portalName = "Teacher Dashboard";
    welcomeText = "Welcome back, Teacher!";
  } else if (pathname.startsWith("/admin")) {
    portalName = "Admin Dashboard";
    welcomeText = "Welcome back, Admin!";
  }

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-6 py-4 flex items-center justify-between transition-colors">
      {/* Left side */}
      <div>
        <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
          {portalName}
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">{welcomeText}</p>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-3">
        <ThemeToggle />

        {/* Notification */}
        <button className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition">
          <span className="text-xl">🔔</span>
          <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
        </button>

        {/* User */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-semibold">
            T
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-medium text-gray-800 dark:text-white">
              Teacher Name
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              teacher@example.com
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}