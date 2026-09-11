export default function StudentDashboard() {
  const stats = [
    {
      title: "Enrolled Courses",
      value: "6",
      change: "+1 this semester",
      icon: "📚",
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Pending Assignments",
      value: "4",
      change: "2 due this week",
      icon: "📝",
      color: "from-orange-500 to-orange-600",
    },
    {
      title: "Average Grade",
      value: "85%",
      change: "+3% from last term",
      icon: "🎯",
      color: "from-emerald-500 to-emerald-600",
    },
    {
      title: "Attendance Rate",
      value: "92%",
      change: "Good standing",
      icon: "📅",
      color: "from-violet-500 to-violet-600",
    },
  ];

  const upcoming = [
    {
      title: "Mathematics Assignment #4",
      type: "Assignment",
      course: "MATH 201",
      due: "Tomorrow, 11:59 PM",
      urgent: true,
    },
    {
      title: "Physics Midterm Exam",
      type: "Exam",
      course: "PHYS 102",
      due: "In 3 days",
      urgent: true,
    },
    {
      title: "Chemistry Lab Report",
      type: "Assignment",
      course: "CHEM 110",
      due: "Friday",
      urgent: false,
    },
    {
      title: "History Essay Draft",
      type: "Assignment",
      course: "HIST 205",
      due: "Next Monday",
      urgent: false,
    },
  ];

  const recentActivity = [
    { action: "Submitted", item: "English Essay", time: "2 hours ago" },
    { action: "Grade received", item: "Biology Quiz - 88%", time: "Yesterday" },
    { action: "Joined", item: "Computer Science Study Group", time: "2 days ago" },
  ];

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
      defaultValue="2025-2026"
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

    {/* Custom arrow */}
    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </div>
</div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                <p className="text-xs text-gray-400 mt-2">{stat.change}</p>
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
        <div className="xl:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Upcoming Deadlines</h2>
            <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
              View all
            </button>
          </div>

          <div className="divide-y divide-gray-100">
            {upcoming.map((item, index) => (
              <div
                key={index}
                className="px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`mt-1 w-2 h-2 rounded-full ${
                      item.urgent ? "bg-red-500" : "bg-gray-300"
                    }`}
                  />
                  <div>
                    <p className="font-medium text-gray-900">{item.title}</p>
                    <p className="text-sm text-gray-500 mt-0.5">
                      {item.course} · {item.type}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p
                    className={`text-sm font-medium ${
                      item.urgent ? "text-red-600" : "text-gray-600"
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
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
            <div className="space-y-2.5">
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-blue-50 text-blue-700 hover:bg-blue-100 transition font-medium text-sm">
                <span>📝</span> Submit Assignment
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition font-medium text-sm">
                <span>🎯</span> View Grades
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-violet-50 text-violet-700 hover:bg-violet-100 transition font-medium text-sm">
                <span>📅</span> Check Attendance
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-orange-50 text-orange-700 hover:bg-orange-100 transition font-medium text-sm">
                <span>📚</span> Browse Courses
              </button>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-blue-500 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-900">
                      <span className="font-medium">{activity.action}</span>{" "}
                      {activity.item}
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">{activity.time}</p>
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