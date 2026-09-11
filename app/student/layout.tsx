export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Temporary Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-5">
        <h2 className="text-xl font-bold mb-6">SMS</h2>
        <p className="text-gray-400 text-sm">Student Portal</p>
        <nav className="mt-8 space-y-2">
          <div className="px-3 py-2 rounded bg-blue-600">Dashboard</div>
          <div className="px-3 py-2 rounded hover:bg-gray-800">Profile</div>
          <div className="px-3 py-2 rounded hover:bg-gray-800">Courses</div>
        </nav>
      </aside>

      {/* Main area */}
      <div className="flex-1 flex flex-col">
        {/* Temporary Navbar */}
        <header className="bg-white border-b px-6 py-4">
          <h1 className="text-lg font-semibold">Student Dashboard</h1>
        </header>

        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}