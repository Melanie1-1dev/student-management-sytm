"use client";

import { useState } from "react";

type AcademicYear = "2023-2024" | "2024-2025" | "2025-2026" | "2026-2027";

const dashboardData = {
  "2023-2024": {
    stats: [
      { title: "Enrolled Courses", value: "5", change: "Completed", icon: "📚", color: "from-blue-500 to-blue-600" },
      { title: "Pending Assignments", value: "0", change: "All submitted", icon: "📝", color: "from-orange-500 to-orange-600" },
      { title: "Average Grade", value: "81%", change: "Final average", icon: "🎯", color: "from-emerald-500 to-emerald-600" },
      { title: "Attendance Rate", value: "89%", change: "Good standing", icon: "📅", color: "from-violet-500 to-violet-600" },
    ],
    upcoming: [
      { title: "No upcoming items", type: "Info", course: "—", due: "—", urgent: false },
    ],
    recentActivity: [
      { action: "Completed", item: "Final Exams", time: "End of year" },
      { action: "Received", item: "Transcript", time: "July 2024" },
    ],
  },
  "2024-2025": {
    stats: [
      { title: "Enrolled Courses", value: "7", change: "+2 from previous", icon: "📚", color: "from-blue-500 to-blue-600" },
      { title: "Pending Assignments", value: "2", change: "1 overdue", icon: "📝", color: "from-orange-500 to-orange-600" },
      { title: "Average Grade", value: "83%", change: "+2% improvement", icon: "🎯", color: "from-emerald-500 to-emerald-600" },
      { title: "Attendance Rate", value: "91%", change: "Excellent", icon: "📅", color: "from-violet-500 to-violet-600" },
    ],
    upcoming: [
      { title: "Final Project Submission", type: "Assignment", course: "CS 301", due: "In 5 days", urgent: true },
      { title: "End of Year Exam", type: "Exam", course: "MATH 202", due: "Next week", urgent: true },
    ],
    recentActivity: [
      { action: "Submitted", item: "Research Paper", time: "3 days ago" },
      { action: "Grade received", item: "Database Systems - 90%", time: "1 week ago" },
    ],
  },
  "2025-2026": {
    stats: [
      { title: "Enrolled Courses", value: "6", change: "+1 this semester", icon: "📚", color: "from-blue-500 to-blue-600" },
      { title: "Pending Assignments", value: "4", change: "2 due this week", icon: "📝", color: "from-orange-500 to-orange-600" },
      { title: "Average Grade", value: "85%", change: "+3% from last term", icon: "🎯", color: "from-emerald-500 to-emerald-600" },
      { title: "Attendance Rate", value: "92%", change: "Good standing", icon: "📅", color: "from-violet-500 to-violet-600" },
    ],
    upcoming: [
      { title: "Mathematics Assignment #4", type: "Assignment", course: "MATH 201", due: "Tomorrow, 11:59 PM", urgent: true },
      { title: "Physics Midterm Exam", type: "Exam", course: "PHYS 102", due: "In 3 days", urgent: true },
      { title: "Chemistry Lab Report", type: "Assignment", course: "CHEM 110", due: "Friday", urgent: false },
      { title: "History Essay Draft", type: "Assignment", course: "HIST 205", due: "Next Monday", urgent: false },
    ],
    recentActivity: [
      { action: "Submitted", item: "English Essay", time: "2 hours ago" },
      { action: "Grade received", item: "Biology Quiz - 88%", time: "Yesterday" },
      { action: "Joined", item: "Computer Science Study Group", time: "2 days ago" },
    ],
  },
  "2026-2027": {
    stats: [
      { title: "Enrolled Courses", value: "0", change: "Not started yet", icon: "📚", color: "from-blue-500 to-blue-600" },
      { title: "Pending Assignments", value: "0", change: "—", icon: "📝", color: "from-orange-500 to-orange-600" },
      { title: "Average Grade", value: "—", change: "No data", icon: "🎯", color: "from-emerald-500 to-emerald-600" },
      { title: "Attendance Rate", value: "—", change: "No data", icon: "📅", color: "from-violet-500 to-violet-600" },
    ],
    upcoming: [
      { title: "Registration opens soon", type: "Info", course: "—", due: "Coming soon", urgent: false },
    ],
    recentActivity: [
      { action: "Info", item: "Academic year not started", time: "—" },
    ],
  },
};

export default function StudentDashboard() {
  const [selectedYear, setSelectedYear] = useState<AcademicYear>("2025-2026");

  const currentData = dashboardData[selectedYear];

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
            Welcome back, Student 👋
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Here’s an overview of your academic progress
          </p>
        </div>

        {/* Academic Year Selector */}
        <div className="relative">
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value as AcademicYear)}
            className="appearance-none bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 
                       text-sm font-medium px-4 py-2.5 pr-10 rounded-xl border border-gray-200 
                       dark:border-gray-700 shadow-sm cursor-pointer
                       focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition"
          >
            <option value="2023-2024">Academic Year 2023/2024</option>
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

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        {currentData.stats.map((stat) => (
          <div
            key={stat.title}
            className="bg-white dark:bg-gray-800 rounded-2xl p-5 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {stat.title}
                </p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">
                  {stat.value}
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
                  {stat.change}
                </p>
              </div>
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-2xl shadow-lg`}
              >
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Upcoming Section */}
        <div className="xl:col-span-2 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Upcoming Deadlines
            </h2>
            <button className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium">
              View all
            </button>
          </div>

          <div className="divide-y divide-gray-100 dark:divide-gray-700">
            {currentData.upcoming.map((item, index) => (
              <div
                key={index}
                className="px-6 py-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`mt-1.5 w-2 h-2 rounded-full ${
                      item.urgent ? "bg-red-500" : "bg-gray-300 dark:bg-gray-600"
                    }`}
                  />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      {item.title}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                      {item.course} · {item.type}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p
                    className={`text-sm font-medium ${
                      item.urgent
                        ? "text-red-600 dark:text-red-400"
                        : "text-gray-600 dark:text-gray-400"
                    }`}
                  >
                    {item.due}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Quick Actions
            </h2>
            <div className="space-y-2.5">
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition font-medium text-sm">
                <span>📝</span> Submit Assignment
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 transition font-medium text-sm">
                <span>🎯</span> View Grades
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-violet-50 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 hover:bg-violet-100 dark:hover:bg-violet-900/50 transition font-medium text-sm">
                <span>📅</span> Check Attendance
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 hover:bg-orange-100 dark:hover:bg-orange-900/50 transition font-medium text-sm">
                <span>📚</span> Browse Courses
              </button>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Recent Activity
            </h2>
            <div className="space-y-4">
              {currentData.recentActivity.map((activity, index) => (
                <div key={index} className="flex gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-blue-500 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-900 dark:text-gray-100">
                      <span className="font-medium">{activity.action}</span>{" "}
                      {activity.item}
                    </p>
                    <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}