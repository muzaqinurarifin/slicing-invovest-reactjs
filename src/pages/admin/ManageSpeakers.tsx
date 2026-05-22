import { useEffect, useState, type FormEvent } from "react";
import Button from "../../components/ui/Button";
import { Card } from "../../components/ui/Card";
import { Input } from "../../components/ui/Input";
import { speakersAPI } from "../../services/api";

interface SpeakerData {
  id: number;
  name: string;
  role: string;
  image: string;
}

export default function ManageSpeakers() {
  const [speakers, setSpeakers] = useState<SpeakerData[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [image, setImage] = useState("");
  const [selectedId, setSelectedId] = useState<number | null>(null);

  // Fetch speakers
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await speakersAPI.getAll();
        setSpeakers(data.data || data || []);
      } catch (error) {
        console.error("Error fetching speakers:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const resetForm = () => {
    setName("");
    setRole("");
    setImage("");
    setSelectedId(null);
    setShowForm(false);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!name.trim() || !role.trim() || !image.trim()) return;

    try {
      if (selectedId) {
        await speakersAPI.update(selectedId, {
          name: name.trim(),
          role: role.trim(),
          image: image.trim(),
        });
      } else {
        await speakersAPI.create({
          name: name.trim(),
          role: role.trim(),
          image: image.trim(),
        });
      }

      // Refetch speakers
      const data = await speakersAPI.getAll();
      setSpeakers(data.data || data || []);
      resetForm();
    } catch (error) {
      console.error("Error saving speaker:", error);
    }
  };

  const handleEdit = (speaker: SpeakerData) => {
    setSelectedId(speaker.id);
    setName(speaker.name);
    setRole(speaker.role);
    setImage(speaker.image);
    setShowForm(true);
  };

  const handleDelete = async (id: number) => {
    try {
      await speakersAPI.delete(id);
      setSpeakers((prev) => prev.filter((speaker) => speaker.id !== id));
      if (selectedId === id) {
        resetForm();
      }
    } catch (error) {
      console.error("Error deleting speaker:", error);
    }
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <p className="text-slate-600">Memuat data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="rounded-3xl bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Manage Speakers
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Kelola data pembicara dan narasumber di backend.
            </p>
          </div>
          <Button
            type="button"
            label={showForm ? "Tutup Form" : "Create Speaker"}
            variant="primary"
            onClick={() => {
              if (showForm) {
                resetForm();
              } else {
                setShowForm(true);
              }
            }}
          />
        </div>
      </div>

      {showForm && (
        <Card className="space-y-4">
          <h3 className="text-xl font-semibold text-slate-900">
            {selectedId ? "Edit Speaker" : "Tambah Speaker Baru"}
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Nama Speaker"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Masukkan nama speaker"
            />
            <Input
              label="Peran / Jabatan"
              name="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              placeholder="Contoh: Pembicara AI, Desainer UX"
            />
            <Input
              label="URL Gambar"
              name="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="Masukkan url foto speaker"
            />
            <div className="flex flex-wrap gap-3">
              <Button
                type="submit"
                label={selectedId ? "Perbarui Speaker" : "Simpan Speaker"}
              />
              <Button
                type="button"
                variant="outline"
                label="Batal"
                onClick={resetForm}
              />
            </div>
          </form>
        </Card>
      )}

      <div className="space-y-4">
        {speakers.length === 0 ? (
          <Card className="text-center py-12">
            <p className="text-slate-500">
              Belum ada speaker. Klik tombol Create Speaker untuk menambahkan.
            </p>
          </Card>
        ) : (
          speakers.map((speaker) => (
            <Card
              key={speaker.id}
              className="grid gap-4 lg:grid-cols-[120px_1fr] items-start"
            >
              <img
                src={speaker.image}
                alt={speaker.name}
                className="h-28 w-28 rounded-lg object-cover border border-gray-200"
              />
              <div className="space-y-3">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {speaker.name}
                  </h3>
                  <p className="text-sm text-slate-500">{speaker.role}</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    label="Edit"
                    onClick={() => handleEdit(speaker)}
                  />
                  <Button
                    type="button"
                    label="Hapus"
                    variant="primary"
                    onClick={() => handleDelete(speaker.id)}
                  />
                </div>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
