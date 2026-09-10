export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-10 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
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
            <div className="text-2xl mb-2"><img className="w-20 h-20 rounded-full object-cover ml-[50px]"src="/images/hutgur.jpg" alt="student" /></div>
            <p>Student Dashboard</p>
          </div>
          <div>
            <div className="text-2xl mb-2"><img className="w-20 h-20 rounded-full object-cover ml-[50px]" src="/images/teacher.jpg" alt="teacher" /></div>
            <p>Teacher Dashboard</p>
          </div>
          <div>
            <div className="text-2xl mb-2"><img className="w-20 h-20 rounded-full object-cover ml-[50px]" src="/images/admin.jpg" alt="admin" /></div>
            <p>Admin Dashboard</p>
          </div>
        </div>
      </div>
    </main>
  );
}