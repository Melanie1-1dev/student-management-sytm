"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { name: "Dashboard", href: "/teacher", icon: "📊" },
  { name: "My Classes", href: "/teacher/classes", icon: "🏫" },
  { name: "Students", href: "/teacher/students", icon: "👨‍🎓" },
  { name: "Courses", href: "/teacher/courses", icon: "📚" },
  { name: "Assignments", href: "/teacher/assignments", icon: "📝" },
  { name: "Exams", href: "/teacher/exams", icon: "📋" },
  { name: "Attendance", href: "/teacher/attendance", icon: "📅" },
];

export default function TeacherSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-gray-900 dark:bg-gray-950 text-white min-h-screen p-5 flex flex-col border-r border-gray-800">
      {/* Logo */}
      <div className="mb-10">
        <h2 className="text-xl font-bold tracking-tight">SMS</h2>
        <p className="text-xs text-gray-400 mt-1">Teacher Portal</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200
                ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="pt-6 border-t border-gray-700">
        <Link
          href="/login"
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-300 hover:bg-red-600/20 hover:text-red-400 transition"
        >
          <span>🚪</span>
          <span>Logout</span>
        </Link>
      </div>
    </aside>
  );
}