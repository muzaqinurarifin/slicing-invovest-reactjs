import { useEffect, useState, type FormEvent } from "react";
import Button from "../../components/ui/Button";
import { Card } from "../../components/ui/Card";
import { Input } from "../../components/ui/Input";
import { categoriesAPI } from "../../services/api";

interface CategoryData {
  id: number;
  name: string;
}

export default function ManageCategories() {
  const [categories, setCategories] = useState<CategoryData[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [selectedId, setSelectedId] = useState<number | null>(null);

  // Fetch categories
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await categoriesAPI.getAll();
        setCategories(data.data || data || []);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const resetForm = () => {
    setName("");
    setSelectedId(null);
    setShowForm(false);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!name.trim()) return;

    try {
      if (selectedId) {
        await categoriesAPI.update(selectedId, { name: name.trim() });
      } else {
        await categoriesAPI.create({ name: name.trim() });
      }

      // Refetch categories
      const data = await categoriesAPI.getAll();
      setCategories(data.data || data || []);
      resetForm();
    } catch (error) {
      console.error("Error saving category:", error);
    }
  };

  const handleEdit = (category: CategoryData) => {
    setSelectedId(category.id);
    setName(category.name);
    setShowForm(true);
  };

  const handleDelete = async (id: number) => {
    try {
      await categoriesAPI.delete(id);
      setCategories((prev) => prev.filter((category) => category.id !== id));
      if (selectedId === id) {
        resetForm();
      }
    } catch (error) {
      console.error("Error deleting category:", error);
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
              Manage Categories
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Tambahkan kategori baru untuk event di backend.
            </p>
          </div>
          <Button
            type="button"
            label={showForm ? "Tutup Form" : "Create Category"}
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
            {selectedId ? "Edit Kategori" : "Tambah Kategori Baru"}
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Nama Kategori"
              name="category"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Masukkan nama kategori"
            />
            <div className="flex flex-wrap gap-3">
              <Button
                type="submit"
                label={selectedId ? "Perbarui Kategori" : "Simpan Kategori"}
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
        {categories.length === 0 ? (
          <Card className="text-center py-12">
            <p className="text-slate-500">
              Belum ada kategori. Klik tombol Create Category untuk menambahkan.
            </p>
          </Card>
        ) : (
          categories.map((category) => (
            <Card
              key={category.id}
              className="flex items-center justify-between gap-4"
            >
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {category.name}
                </h3>
                <p className="text-sm text-slate-500">ID: {category.id}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button
                  type="button"
                  variant="outline"
                  label="Edit"
                  onClick={() => handleEdit(category)}
                />
                <Button
                  type="button"
                  label="Hapus"
                  variant="primary"
                  onClick={() => handleDelete(category.id)}
                />
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
