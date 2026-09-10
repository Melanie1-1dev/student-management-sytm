"use client";

import { useState } from "react";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <main
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center p-6"
      style={{ backgroundImage: "url('/images/background1.png')" }}
    >
      {/* Dark overlay for better contrast */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Main Card */}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`relative z-10 max-w-3xl w-full rounded-3xl shadow-2xl p-10 md:p-12 text-center transition-all duration-500 ease-out
          ${
            isHovered
              ? "bg-white/10 backdrop-blur-xl border border-white/20"
              : "bg-white/95 backdrop-blur-md border border-white/30"
          }`}
      >
        {/* Title */}
        <h1
          className={`text-4xl md:text-5xl font-bold mb-4 tracking-tight transition-colors duration-300
            ${isHovered ? "text-white" : "text-gray-800"}`}
        >
          Student Management Platform
        </h1>

        {/* Subtitle */}
        <p
          className={`text-lg mb-10 transition-colors duration-300
            ${isHovered ? "text-gray-200" : "text-gray-600"}`}
        >
          A modern platform for students, teachers, and administrators
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
          <a
            href="/login"
            className="px-10 py-3.5 bg-blue-600 text-white rounded-xl font-semibold 
                       hover:bg-blue-700 hover:scale-105 hover:shadow-lg 
                       transition-all duration-300"
          >
            Login
          </a>

          <a
            href="/register"
            className={`px-10 py-3.5 rounded-xl font-semibold border-2 transition-all duration-300
              ${
                isHovered
                  ? "border-white text-white hover:bg-white/20"
                  : "border-blue-600 text-blue-600 hover:bg-blue-50"
              }`}
          >
            Register
          </a>
        </div>

        {/* Role Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Student */}
          <div
            className={`p-5 rounded-2xl transition-all duration-300
              ${
                isHovered
                  ? "bg-white/10 border border-white/20"
                  : "bg-gray-50 border border-gray-100"
              }`}
          >
            <img
              className="w-20 h-20 rounded-full object-cover mx-auto mb-3 ring-4 ring-blue-500/30"
              src="/images/hutgur.jpg"
              alt="Student"
            />
            <p
              className={`font-medium ${
                isHovered ? "text-white" : "text-gray-700"
              }`}
            >
              Student Dashboard
            </p>
          </div>

          {/* Teacher */}
          <div
            className={`p-5 rounded-2xl transition-all duration-300
              ${
                isHovered
                  ? "bg-white/10 border border-white/20"
                  : "bg-gray-50 border border-gray-100"
              }`}
          >
            <img
              className="w-20 h-20 rounded-full object-cover mx-auto mb-3 ring-4 ring-indigo-500/30"
              src="/images/teacher.jpg"
              alt="Teacher"
            />
            <p
              className={`font-medium ${
                isHovered ? "text-white" : "text-gray-700"
              }`}
            >
              Teacher Dashboard
            </p>
          </div>

          {/* Admin */}
          <div
            className={`p-5 rounded-2xl transition-all duration-300
              ${
                isHovered
                  ? "bg-white/10 border border-white/20"
                  : "bg-gray-50 border border-gray-100"
              }`}
          >
            <img
              className="w-20 h-20 rounded-full object-cover mx-auto mb-3 ring-4 ring-purple-500/30"
              src="/images/admin.jpg"
              alt="Admin"
            />
            <p
              className={`font-medium ${
                isHovered ? "text-white" : "text-gray-700"
              }`}
            >
              Admin Dashboard
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}