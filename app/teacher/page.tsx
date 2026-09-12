"use client";

import { useState } from "react";

export default function TeacherDashboard() {
  const [selectedYear, setSelectedYear] = useState("2025-2026");

  const stats = [
    {
      title: "My Classes",
      value: "5",
      change: "3 active today",
      icon: "🏫",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      title: "Total Students",
      value: "142",
      change: "+8 this semester",
      icon: "👨‍🎓",
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Pending Assignments",
      value: "17",
      change: "6 need grading",
      icon: "📝",
      color: "from-orange-500 to-orange-600",
    },
    {
      title: "Average Performance",
      value: "78%",
      change: "+4% from last term",
      icon: "📈",
      color: "from-emerald-500 to-emerald-600",
    },
  ];

  const myClasses = [
    { name: "Mathematics 201", students: 32, time: "Mon & Wed • 09:00", room: "Room 204" },
    { name: "Physics 102", students: 28, time: "Tue & Thu • 11:00", room: "Lab 1" },
    { name: "Chemistry 110", students: 30, time: "Mon & Fri • 14:00", room: "Lab 3" },
    { name: "Computer Science 301", students: 25, time: "Wed • 15:30", room: "Room 105" },
  ];

  const pendingTasks = [
    { title: "Grade Math Assignment #4", count: 28, urgent: true },
    { title: "Review Physics Lab Reports", count: 22, urgent: true },
    { title: "Prepare Midterm Exam", count: 1, urgent: false },
    { title: "Update Attendance Records", count: 5, urgent: false },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
            Welcome back, Teacher 👋
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Here’s what’s happening with your classes today
          </p>
        </div>

        <div className="relative">
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="appearance-none bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 
                       text-sm font-medium px-4 py-2.5 pr-10 rounded-xl border border-gray-200 
                       dark:border-gray-700 shadow-sm cursor-pointer
                       focus:outline-none focus:ring-2 focus:ring-indigo-500/40 transition"
          >
            <option value="2024-2025">Academic Year 2024/2025</option>
            <option value="2025-2026">Academic Year 2025/2026 · Semester 1</option>
            <option value="2026-2027">Academic Year 2026/2027</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="bg-white dark:bg-gray-800 rounded-2xl p-5 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{stat.title}</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">{stat.value}</p>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">{stat.change}</p>
              </div>
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-2xl shadow-lg`}>
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* My Classes */}
        <div className="xl:col-span-2 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">My Classes</h2>
            <button className="text-sm text-indigo-600 dark:text-indigo-400 font-medium hover:underline">
              View all
            </button>
          </div>

          <div className="divide-y divide-gray-100 dark:divide-gray-700">
            {myClasses.map((cls, index) => (
              <div key={index} className="px-6 py-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">{cls.name}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                    {cls.time} · {cls.room}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {cls.students} students
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pending Tasks */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Pending Tasks
          </h2>
          <div className="space-y-3">
            {pendingTasks.map((task, index) => (
              <div
                key={index}
                className={`p-4 rounded-xl border ${
                  task.urgent
                    ? "bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800"
                    : "bg-gray-50 dark:bg-gray-700/50 border-gray-200 dark:border-gray-600"
                }`}
              >
                <div className="flex items-center justify-between">
                  <p className={`text-sm font-medium ${task.urgent ? "text-orange-800 dark:text-orange-300" : "text-gray-800 dark:text-gray-200"}`}>
                    {task.title}
                  </p>
                  <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                    task.urgent
                      ? "bg-orange-200 dark:bg-orange-800 text-orange-800 dark:text-orange-200"
                      : "bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300"
                  }`}>
                    {task.count}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}