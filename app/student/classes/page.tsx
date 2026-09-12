"use client";

const classes = [
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
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            My Classes
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Manage and view all your classes
          </p>
        </div>
        <button className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-xl transition">
          + Create New Class
        </button>
      </div>

      {/* Classes Grid */}
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
    </div>
  );
}