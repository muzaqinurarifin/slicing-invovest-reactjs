import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

export default function ProtectedRoute() {
  // Ambil status login dari Zustand
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  // Jika belum login, tendang balik ke halaman /login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Jika sudah login, izinkan merender komponen anak (AdminLayout dkk)
  return <Outlet />;
}
