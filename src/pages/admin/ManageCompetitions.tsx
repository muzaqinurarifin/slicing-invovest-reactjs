import Button from "../../components/ui/Button";

const competitionItems = [
  "National Poster Design Competition",
  "UI/UX Design Competition",
  "Web App Development Challenge",
  "AI Innovation Showcase",
];

export default function ManageCompetitions() {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900">Kelola Kompetisi</h2>
        <p className="mt-2 text-sm text-slate-600">
          Di sini kamu bisa melihat daftar kompetisi yang sudah dibuat dan
          menambahkan kompetisi baru.
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        {competitionItems.map((item) => (
          <div
            key={item}
            className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <h3 className="text-xl font-semibold text-slate-900">{item}</h3>
            <p className="mt-2 text-sm text-slate-500">
              Edit detail kompetisi, tanggal, kategori, dan status di sini.
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
