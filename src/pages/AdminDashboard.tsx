import Button from "../components/ui/Button";
import { CompetitionCard } from "../components/ui/CompetitionCard";

const competitions = [
  {
    title: "National Poster Design Competition",
    category: "Design",
    date: "24 Mei 2026",
    location: "Online",
    description:
      "Kompetisi desain poster untuk menyampaikan pesan teknologi dan inovasi yang berdampak.",
  },
  {
    title: "UI/UX Design Competition",
    category: "Product",
    date: "28 Mei 2026",
    location: "Hybrid",
    description:
      "Lomba desain antarmuka pengguna dengan pengalaman interaktif untuk solusi digital.",
  },
  {
    title: "Web App Development Challenge",
    category: "Programming",
    date: "2 Juni 2026",
    location: "Offline",
    description:
      "Tantangan membuat aplikasi web lengkap dengan fitur yang siap dipresentasikan.",
  },
  {
    title: "AI Innovation Showcase",
    category: "Innovation",
    date: "6 Juni 2026",
    location: "Online",
    description:
      "Pameran solusi AI dari talenta muda untuk masa depan yang lebih cerdas.",
  },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <section className="grid gap-6 md:grid-cols-3">
        <div className="rounded-3xl bg-white p-6 shadow-md">
          <p className="text-sm uppercase tracking-[0.2em] text-red-900">
            Kompetisi aktif
          </p>
          <p className="mt-4 text-5xl font-bold text-slate-900">4</p>
          <p className="mt-2 text-sm text-slate-500">
            Jumlah kompetisi di Invofest 2026.
          </p>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-md">
          <p className="text-sm uppercase tracking-[0.2em] text-red-900">
            Total Peserta
          </p>
          <p className="mt-4 text-5xl font-bold text-slate-900">1.250+</p>
          <p className="mt-2 text-sm text-slate-500">
            Perkiraan peserta dari seluruh cabang lomba.
          </p>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-md">
          <p className="text-sm uppercase tracking-[0.2em] text-red-900">
            Status Event
          </p>
          <p className="mt-4 text-5xl font-bold text-slate-900">Aktif</p>
          <p className="mt-2 text-sm text-slate-500">
            Semua event sedang dalam persiapan dan jadwal terkonfirmasi.
          </p>
        </div>
      </section>

      <section>
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-2xl font-bold text-slate-900">
              Daftar Kompetisi
            </h3>
            <p className="text-sm text-slate-500">
              Kelola semua kompetisi Invofest dari satu tampilan.
            </p>
          </div>
          <Button label="Tambah Kompetisi" variant="primary" />
        </div>

        <div className="grid gap-6 xl:grid-cols-2">
          {competitions.map((item) => (
            <CompetitionCard
              key={item.title}
              title={item.title}
              category={item.category}
              date={item.date}
              location={item.location}
              description={item.description}
            />
          ))}
        </div>
      </section>

      <section className="rounded-3xl bg-[#fee3ec] p-6 shadow-md">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-2xl font-bold text-red-900">Ringkasan Admin</h3>
            <p className="mt-2 text-slate-700">
              Dashboard ini membantu pengelolaan kompetisi, workshop, seminar,
              dan talkshow. Semua data dan tampilan disesuaikan dengan gaya
              Invofest yang konsisten.
            </p>
          </div>
          <Button label="Lihat Statistik" variant="outline" />
        </div>
      </section>
    </div>
  );
}
