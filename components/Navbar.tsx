"use client";

export default function Navbar() {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
      {/* Left side */}
      <div>
        <h1 className="text-xl font-semibold text-gray-800">Student Dashboard</h1>
        <p className="text-sm text-gray-500">Welcome back!</p>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">
        {/* Notification bell */}
        <button className="relative p-2 rounded-full hover:bg-gray-100 transition">
          <span className="text-xl">🔔</span>
          <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
        </button>

        {/* User avatar */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold">
            S
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-medium text-gray-800">Student Name</p>
            <p className="text-xs text-gray-500">student@example.com</p>
          </div>
        </div>
      </div>
    </header>
  );
}