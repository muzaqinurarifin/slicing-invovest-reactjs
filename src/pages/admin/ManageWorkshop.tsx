import Button from "../../components/ui/Button";

const workshopItems = [
  "Workshop React Basics",
  "Workshop Figma Design",
  "Workshop AI untuk Pengembang",
];

export default function ManageWorkshop() {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900">Kelola Workshop</h2>
        <p className="mt-2 text-sm text-slate-600">
          Atur semua sesi workshop dan materi yang akan ditampilkan.
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        {workshopItems.map((item) => (
          <div
            key={item}
            className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <h3 className="text-xl font-semibold text-slate-900">{item}</h3>
            <p className="mt-2 text-sm text-slate-500">
              Kelola materi, instruktur, dan jadwal workshop dari sini.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Button label="Edit" variant="outline" />
              <Button label="Hapus" variant="primary" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
