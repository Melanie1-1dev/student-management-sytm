export default function StudentDashboard() {
  const stats = [
    { title: "My Courses", value: "6", icon: "📚", color: "bg-blue-500" },
    { title: "Assignments", value: "12", icon: "📝", color: "bg-orange-500" },
    { title: "Average Grade", value: "85%", icon: "🎯", color: "bg-green-500" },
    { title: "Attendance", value: "92%", icon: "📅", color: "bg-purple-500" },
  ];

  const upcoming = [
    { title: "Math Assignment", date: "Tomorrow", type: "Assignment" },
    { title: "Physics Exam", date: "In 3 days", type: "Exam" },
    { title: "Chemistry Lab", date: "Friday", type: "Class" },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Welcome back, Student!</h1>
        <p className="text-gray-500 mt-1">Here’s what’s happening with your studies today.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-800 mt-1">{stat.value}</p>
              </div>
              <div className={`${stat.color} w-12 h-12 rounded-xl flex items-center justify-center text-2xl`}>
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Two columns */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Upcoming */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Upcoming</h2>
          <div className="space-y-4">
            {upcoming.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition"
              >
                <div>
                  <p className="font-medium text-gray-800">{item.title}</p>
                  <p className="text-sm text-gray-500">{item.type}</p>
                </div>
                <span className="text-sm font-medium text-blue-600">{item.date}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <button className="w-full text-left px-4 py-3 rounded-xl bg-blue-50 text-blue-700 hover:bg-blue-100 transition font-medium">
              View Assignments
            </button>
            <button className="w-full text-left px-4 py-3 rounded-xl bg-green-50 text-green-700 hover:bg-green-100 transition font-medium">
              Check Grades
            </button>
            <button className="w-full text-left px-4 py-3 rounded-xl bg-purple-50 text-purple-700 hover:bg-purple-100 transition font-medium">
              Attendance Record
            </button>
            <button className="w-full text-left px-4 py-3 rounded-xl bg-orange-50 text-orange-700 hover:bg-orange-100 transition font-medium">
              My Courses
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}