import Button from "../../components/ui/Button";

const talkshowItems = [
  "Talkshow Teknologi Masa Depan",
  "Talkshow Kreativitas Digital",
  "Talkshow Start-up dan Inovasi",
];

export default function ManageTalkshow() {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900">Kelola Talkshow</h2>
        <p className="mt-2 text-sm text-slate-600">
          Kelola acara talkshow dan pembicara untuk event Invofest.
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        {talkshowItems.map((item) => (
          <div
            key={item}
            className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <h3 className="text-xl font-semibold text-slate-900">{item}</h3>
            <p className="mt-2 text-sm text-slate-500">
              Atur jadwal, pembicara, dan topik talkshow dari panel ini.
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
