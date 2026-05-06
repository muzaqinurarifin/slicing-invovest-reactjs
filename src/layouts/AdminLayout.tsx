import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";
import { isAdminAuthenticated, logoutAdmin } from "../utils/auth";

export default function AdminLayout() {
  const navigate = useNavigate();

  if (!isAdminAuthenticated()) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen flex bg-[#fff1f5] text-slate-900">
      <aside className="w-72 bg-red-900 text-white px-6 py-8 flex flex-col">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.35em] text-red-200">
            Admin Panel
          </p>
          <h1 className="mt-4 text-2xl font-bold">Invofest</h1>
          <p className="mt-2 text-sm text-red-300">Dashboard kontrol acara</p>
        </div>

        <nav className="flex-1 flex flex-col gap-3 text-sm">
          <Link
            to="/admin"
            className="rounded-2xl bg-red-800 px-4 py-3 font-semibold transition hover:bg-red-700"
          >
            Dashboard
          </Link>
          <Link
            to="/admin/competitions"
            className="rounded-2xl bg-red-800/90 px-4 py-3 transition hover:bg-red-700"
          >
            Manage Kompetisi
          </Link>
          <Link
            to="/admin/seminars"
            className="rounded-2xl bg-red-800/90 px-4 py-3 transition hover:bg-red-700"
          >
            Manage Seminar
          </Link>
          <Link
            to="/admin/workshops"
            className="rounded-2xl bg-red-800/90 px-4 py-3 transition hover:bg-red-700"
          >
            Manage Workshop
          </Link>
          <Link
            to="/admin/talkshows"
            className="rounded-2xl bg-red-800/90 px-4 py-3 transition hover:bg-red-700"
          >
            Manage Talkshow
          </Link>
          <Link
            to="/"
            className="rounded-2xl bg-red-800/90 px-4 py-3 transition hover:bg-red-700"
          >
            Kunjungi Landing Page
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => {
            logoutAdmin();
            navigate("/login");
          }}
          className="mt-6 rounded-2xl bg-white px-4 py-3 text-red-900 font-semibold transition hover:bg-red-100"
        >
          Logout
        </button>
      </aside>

      <main className="flex-1 p-8">
        <header className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-slate-500">Admin Dashboard</p>
            <h2 className="text-3xl font-bold text-slate-900">
              Selamat datang, Muzaqi
            </h2>
          </div>
          <div className="rounded-3xl bg-white px-5 py-3 shadow-sm text-sm font-medium text-slate-700">
            Level: Administrator
          </div>
        </header>

        <Outlet />
      </main>
    </div>
  );
}
