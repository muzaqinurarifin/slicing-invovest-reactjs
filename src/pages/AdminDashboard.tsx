import { useEffect, useState } from "react";
import Button from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { eventsAPI, categoriesAPI, speakersAPI } from "../services/api";
import { Link } from "react-router-dom";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    events: 0,
    categories: 0,
    speakers: 0,
  });
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [eventsData, categoriesData, speakersData] = await Promise.all([
          eventsAPI.getAll(),
          categoriesAPI.getAll(),
          speakersAPI.getAll(),
        ]);

        setStats({
          events: (eventsData.data || eventsData || []).length,
          categories: (categoriesData.data || categoriesData || []).length,
          speakers: (speakersData.data || speakersData || []).length,
        });
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="space-y-8">
      {/* Header */}
      <section>
        <h1 className="text-4xl font-bold text-slate-900">Dashboard Admin</h1>
        <p className="mt-2 text-slate-600">
          Kelola event, kategori, dan pembicara untuk acara Invofest
        </p>
      </section>

      {/* Statistics Cards */}
      <section className="grid gap-6 md:grid-cols-3">
        <Card className="bg-linear-to-br from-red-50 to-red-100 border-red-300">
          <p className="text-sm uppercase tracking-[0.2em] text-red-900 font-semibold">
            Total Events
          </p>
          <p className="mt-4 text-5xl font-bold text-red-900">{stats.events}</p>
          <p className="mt-2 text-sm text-red-700">
            Event yang terdaftar di sistem
          </p>
        </Card>

        <Card className="bg-linear-to-br from-blue-50 to-blue-100 border-blue-300">
          <p className="text-sm uppercase tracking-[0.2em] text-blue-900 font-semibold">
            Categories
          </p>
          <p className="mt-4 text-5xl font-bold text-blue-900">
            {stats.categories}
          </p>
          <p className="mt-2 text-sm text-blue-700">
            Kategori event yang tersedia
          </p>
        </Card>

        <Card className="bg-linear-to-br from-purple-50 to-purple-100 border-purple-300">
          <p className="text-sm uppercase tracking-[0.2em] text-purple-900 font-semibold">
            Speakers
          </p>
          <p className="mt-4 text-5xl font-bold text-purple-900">
            {stats.speakers}
          </p>
          <p className="mt-2 text-sm text-purple-700">Pembicara terdaftar</p>
        </Card>
      </section>

      {/* Quick Actions */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Akses Cepat</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <Link to="/admin/events" className="no-underline">
            <Card className="cursor-pointer hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-900">
                    Manage Events
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">
                    Buat, edit, atau hapus event
                  </p>
                </div>
                <div className="text-3xl">📅</div>
              </div>
            </Card>
          </Link>

          <Link to="/admin/categories" className="no-underline">
            <Card className="cursor-pointer hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-900">
                    Manage Categories
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">
                    Kelola kategori event
                  </p>
                </div>
                <div className="text-3xl">📂</div>
              </div>
            </Card>
          </Link>

          <Link to="/admin/speakers" className="no-underline">
            <Card className="cursor-pointer hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-900">
                    Manage Speakers
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">
                    Atur data pembicara
                  </p>
                </div>
                <div className="text-3xl">👤</div>
              </div>
            </Card>
          </Link>
        </div>
      </section>

      {/* Info Section */}
      <section className="rounded-3xl bg-linear-to-r from-red-500 to-red-700 p-8 text-white shadow-lg">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold">Selamat Datang di Admin Panel</h2>
          <p className="mt-3 text-lg text-red-100">
            Gunakan panel ini untuk mengelola seluruh event Invofest. Data yang
            Anda input akan terhubung langsung dengan backend.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button label="Panduan" variant="primary" />
            <Button label="Bantuan" variant="outline" />
          </div>
        </div>
      </section>
    </div>
  );
}
