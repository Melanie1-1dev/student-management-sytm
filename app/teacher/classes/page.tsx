"use client";

import { useState } from "react";

type ClassItem = {
  id: number;
  name: string;
  code: string;
  students: number;
  schedule: string;
  room: string;
  status: string;
};

const initialClasses: ClassItem[] = [
  {
    id: 1,
    name: "Mathematics 201",
    code: "MATH 201",
    students: 32,
    schedule: "Mon & Wed • 09:00 - 10:30",
    room: "Room 204",
    status: "Active",
  },
  {
    id: 2,
    name: "Physics 102",
    code: "PHYS 102",
    students: 28,
    schedule: "Tue & Thu • 11:00 - 12:30",
    room: "Lab 1",
    status: "Active",
  },
  {
    id: 3,
    name: "Chemistry 110",
    code: "CHEM 110",
    students: 30,
    schedule: "Mon & Fri • 14:00 - 15:30",
    room: "Lab 3",
    status: "Active",
  },
  {
    id: 4,
    name: "Computer Science 301",
    code: "CS 301",
    students: 25,
    schedule: "Wed • 15:30 - 17:00",
    room: "Room 105",
    status: "Active",
  },
  {
    id: 5,
    name: "English Literature",
    code: "ENG 210",
    students: 27,
    schedule: "Thu • 09:00 - 10:30",
    room: "Room 12",
    status: "Active",
  },
];

export default function TeacherClassesPage() {
  const [classes, setClasses] = useState<ClassItem[]>(initialClasses);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    code: "",
    schedule: "",
    room: "",
    students: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCreateClass = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.code) {
      alert("Class name and code are required");
      return;
    }

    const newClass: ClassItem = {
      id: Date.now(),
      name: formData.name,
      code: formData.code,
      schedule: formData.schedule || "Not set",
      room: formData.room || "Not set",
      students: Number(formData.students) || 0,
      status: "Active",
    };

    setClasses([newClass, ...classes]);
    setFormData({ name: "", code: "", schedule: "", room: "", students: "" });
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            My Classes
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Manage and view all your classes
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-xl transition"
        >
          + Create New Class
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {classes.map((cls) => (
          <div
            key={cls.id}
            className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition overflow-hidden"
          >
            <div className="p-5">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
                    {cls.name}
                  </h3>
                  <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">
                    {cls.code}
                  </p>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 font-medium">
                  {cls.status}
                </span>
              </div>

              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <p>👥 {cls.students} students</p>
                <p>🕒 {cls.schedule}</p>
                <p>📍 {cls.room}</p>
              </div>

              <div className="mt-5 flex gap-2">
                <button className="flex-1 py-2 text-sm font-medium rounded-lg bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition">
                  View Class
                </button>
                <button className="flex-1 py-2 text-sm font-medium rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 transition">
                  Take Attendance
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl w-full max-w-md p-6 shadow-xl">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Create New Class
            </h2>

            <form onSubmit={handleCreateClass} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Class Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Mathematics 201"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Class Code *
                </label>
                <input
                  type="text"
                  name="code"
                  value={formData.code}
                  onChange={handleChange}
                  placeholder="e.g. MATH 201"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Schedule
                </label>
                <input
                  type="text"
                  name="schedule"
                  value={formData.schedule}
                  onChange={handleChange}
                  placeholder="e.g. Mon & Wed • 09:00"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Room
                </label>
                <input
                  type="text"
                  name="room"
                  value={formData.room}
                  onChange={handleChange}
                  placeholder="e.g. Room 204"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Number of Students
                </label>
                <input
                  type="number"
                  name="students"
                  value={formData.students}
                  onChange={handleChange}
                  placeholder="e.g. 30"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition"
                >
                  Create Class
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
