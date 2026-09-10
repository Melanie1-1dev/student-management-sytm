"use client";

import { useState } from "react";

export default function Home() {
  const [transparent, setTransparent] = useState(false);

  const handleMouseEnter = () => {
    setTransparent(true);

    setTimeout(() => {
      setTransparent(false);
    }, 3000);
  };

  return (
    <main
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center p-6"
      style={{ backgroundImage: "url('/images/background1.png')" }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div
        onMouseEnter={handleMouseEnter}
        className={`relative z-10 max-w-2xl w-full rounded-2xl shadow-xl p-10 text-center transition-all duration-300 ${
          transparent ? "bg-transparent" : "bg-white"
        }`}
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-4 animate-bounce">
          Student Management Platform
        </h1>

        <p className="text-gray-600 mb-8 text-lg">
          A modern platform for students, teachers, and administrators
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/login"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Login
          </a>

          <a
            href="/register"
            className="px-8 py-3 bg-white border-2 border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition"
          >
            Register
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-gray-500">
          <div>
            <div className="text-2xl mb-2">
              <img
                className="w-20 h-20 rounded-full object-cover mx-auto animate-pulse"
                src="/images/hutgur.jpg"
                alt="student"
              />
            </div>
            <p>Student Dashboard</p>
          </div>

          <div>
            <div className="text-2xl mb-2">
              <img
                className="w-20 h-20 rounded-full object-cover mx-auto animate-pulse"
                src="/images/teacher.jpg"
                alt="teacher"
              />
            </div>
            <p>Teacher Dashboard</p>
          </div>

          <div>
            <div className="text-2xl mb-2">
              <img
                className="w-20 h-20 rounded-full object-cover mx-auto animate-pulse"
                src="/images/admin.jpg"
                alt="admin"
              />
            </div>
            <p>Admin Dashboard</p>
          </div>
        </div>
      </div>
    </main>
  );
}