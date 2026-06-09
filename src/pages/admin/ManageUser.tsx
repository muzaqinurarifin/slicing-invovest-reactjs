import { useEffect, useState, type FormEvent } from "react";
import Button from "../../components/ui/Button";
import { Card } from "../../components/ui/Card";
import { Input } from "../../components/ui/Input";
import { usersAPI } from "../../services/api";

interface UserData {
  id: number;
  name: string;
  email: string;
  role: string;
  createdAt: string;
}

export default function ManageUser() {
  const [users, setUsers] = useState<UserData[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const data = await usersAPI.getAll();
        setUsers(data.data || data || []);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const resetForm = () => {
    setName("");
    setEmail("");
    setPassword("");
    setSelectedId(null);
    setShowForm(false);
    setErrorMessage(null);
  };

  const refreshUsers = async () => {
    const data = await usersAPI.getAll();
    setUsers(data.data || data || []);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!name.trim() || !email.trim()) return;

    try {
      if (selectedId) {
        if (password.trim() && password.trim().length < 8) {
          setErrorMessage("Password minimal 8 karakter");
          return;
        }

        await usersAPI.update(selectedId, {
          name: name.trim(),
          email: email.trim(),
          password: password.trim() || undefined,
        });
      } else {
        if (!password.trim()) {
          setErrorMessage("Password harus diisi untuk menambahkan user baru");
          return;
        }

        if (password.trim().length < 8) {
          setErrorMessage("Password minimal 8 karakter");
          return;
        }
        await usersAPI.create({
          name: name.trim(),
          email: email.trim(),
          password: password.trim(),
        });
      }

      await refreshUsers();
      resetForm();
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : "Gagal menyimpan user",
      );
    }
  };

  const handleEdit = (user: UserData) => {
    setSelectedId(user.id);
    setName(user.name);
    setEmail(user.email);
    setPassword("");
    setShowForm(true);
    setErrorMessage(null);
  };

  const handleDelete = async (id: number) => {
    try {
      await usersAPI.delete(id);
      setUsers((prev) => prev.filter((user) => user.id !== id));
      if (selectedId === id) {
        resetForm();
      }
    } catch (error) {
      console.error("Error deleting user:", error);
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
            <h2 className="text-2xl font-bold text-slate-900">Manage Users</h2>
            <p className="mt-2 text-sm text-slate-600">
              Kelola akun user yang terdaftar dan tambahkan user baru.
            </p>
          </div>
          <Button
            type="button"
            label={showForm ? "Tutup Form" : "Tambah User"}
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
            {selectedId ? "Edit User" : "Tambah User Baru"}
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Nama"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Masukkan nama user"
            />
            <Input
              label="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Masukkan email user"
              type="email"
            />
            <Input
              label="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={
                selectedId
                  ? "Kosongkan jika tidak ingin mengganti"
                  : "Masukkan password"
              }
              type="password"
            />
            {errorMessage && (
              <p className="text-red-500 text-sm">{errorMessage}</p>
            )}
            <div className="flex flex-wrap gap-3">
              <Button
                type="submit"
                label={selectedId ? "Perbarui User" : "Simpan User"}
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
        {users.length === 0 ? (
          <Card className="text-center py-12">
            <p className="text-slate-500">
              Belum ada user. Tambahkan user pertama dengan tombol Tambah User.
            </p>
          </Card>
        ) : (
          users.map((user) => (
            <Card
              key={user.id}
              className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {user.name}
                </h3>
                <p className="text-sm text-slate-500">{user.email}</p>
                <p className="text-sm text-slate-400">Role: {user.role}</p>
                <p className="text-sm text-slate-400">
                  {new Date(user.createdAt).toLocaleString()}
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button
                  type="button"
                  variant="outline"
                  label="Edit"
                  onClick={() => handleEdit(user)}
                />
                <Button
                  type="button"
                  label="Hapus"
                  variant="primary"
                  onClick={() => handleDelete(user.id)}
                />
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
