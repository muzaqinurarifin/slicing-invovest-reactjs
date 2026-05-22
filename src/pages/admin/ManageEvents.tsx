import { useEffect, useState, type FormEvent } from "react";
import Button from "../../components/ui/Button";
import { Card } from "../../components/ui/Card";
import { Input } from "../../components/ui/Input";
import { Select } from "../../components/ui/Select";
import { Textarea } from "../../components/ui/Textarea";
import { eventsAPI, categoriesAPI } from "../../services/api";

interface EventData {
  id: number;
  name: string;
  categoryId: string;
  location: string;
  dateEvent: string;
  description: string;
}

interface CategoryOption {
  label: string;
  value: string;
}

export default function ManageEvents() {
  const [events, setEvents] = useState<EventData[]>([]);
  const [categories, setCategories] = useState<CategoryOption[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [location, setLocation] = useState("");
  const [dateEvent, setDateEvent] = useState("");
  const [description, setDescription] = useState("");
  const [selectedId, setSelectedId] = useState<number | null>(null);

  // Fetch events dan categories
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [eventsData, categoriesData] = await Promise.all([
          eventsAPI.getAll(),
          categoriesAPI.getAll(),
        ]);
        setEvents(eventsData.data || eventsData || []);
        const categoryOptions = (
          categoriesData.data ||
          categoriesData ||
          []
        ).map((cat: any) => ({
          label: cat.name,
          value: cat.id.toString(),
        }));
        setCategories(categoryOptions);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const resetForm = () => {
    setName("");
    setCategoryId("");
    setLocation("");
    setDateEvent("");
    setDescription("");
    setSelectedId(null);
    setShowForm(false);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name || !categoryId || !location || !dateEvent || !description) {
      return;
    }

    try {
      if (selectedId) {
        await eventsAPI.update(selectedId, {
          name,
          categoryId,
          location,
          dateEvent,
          description,
        });
      } else {
        await eventsAPI.create({
          name,
          categoryId,
          location,
          dateEvent,
          description,
        });
      }

      // Refetch events
      const updatedEvents = await eventsAPI.getAll();
      setEvents(updatedEvents.data || updatedEvents || []);
      resetForm();
    } catch (error) {
      console.error("Error saving event:", error);
    }
  };

  const handleEdit = (eventData: EventData) => {
    setSelectedId(eventData.id);
    setName(eventData.name);
    setCategoryId(eventData.categoryId);
    setLocation(eventData.location);
    setDateEvent(eventData.dateEvent);
    setDescription(eventData.description);
    setShowForm(true);
  };

  const handleDelete = async (id: number) => {
    try {
      await eventsAPI.delete(id);
      setEvents((prev) => prev.filter((item) => item.id !== id));
      if (selectedId === id) {
        resetForm();
      }
    } catch (error) {
      console.error("Error deleting event:", error);
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
            <h2 className="text-2xl font-bold text-slate-900">Manage Events</h2>
            <p className="mt-2 text-sm text-slate-600">
              Kelola event sesuai dengan kategori di backend.
            </p>
          </div>
          <Button
            type="button"
            label={showForm ? "Tutup Form" : "Create Event"}
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
            {selectedId ? "Edit Event" : "Tambah Event Baru"}
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Nama Event"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Masukkan nama event"
            />
            <Select
              label="Kategori"
              name="categoryId"
              value={categoryId}
              onChange={(e) => setCategoryId(e.target.value)}
              options={categories}
            />
            <Input
              label="Lokasi"
              name="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Online / Offline / Hybrid"
            />
            <Input
              label="Tanggal Event"
              name="dateEvent"
              type="date"
              value={dateEvent}
              onChange={(e) => setDateEvent(e.target.value)}
            />
            <Textarea
              label="Deskripsi"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Tuliskan deskripsi singkat event"
            />
            <div className="flex flex-wrap gap-3">
              <Button
                type="submit"
                label={selectedId ? "Perbarui Event" : "Simpan Event"}
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
        {events.length === 0 ? (
          <Card className="text-center py-12">
            <p className="text-slate-500">
              Belum ada event. Klik tombol Create Event untuk menambahkan.
            </p>
          </Card>
        ) : (
          events.map((eventData) => (
            <Card key={eventData.id} className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {eventData.name}
                </h3>
                <p className="text-sm text-slate-500">
                  Kategori:{" "}
                  {categories.find((cat) => cat.value === eventData.categoryId)
                    ?.label ?? "-"}
                </p>
              </div>
              <p className="text-sm text-slate-600">{eventData.description}</p>
              <div className="flex flex-wrap gap-3">
                <Button
                  type="button"
                  label="Edit"
                  variant="outline"
                  onClick={() => handleEdit(eventData)}
                />
                <Button
                  type="button"
                  label="Hapus"
                  variant="primary"
                  onClick={() => handleDelete(eventData.id)}
                />
              </div>
              <div className="grid gap-2 text-sm text-slate-500">
                <span>Lokasi: {eventData.location}</span>
                <span>
                  Tanggal:{" "}
                  {new Date(eventData.dateEvent).toLocaleDateString("id-ID")}
                </span>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
