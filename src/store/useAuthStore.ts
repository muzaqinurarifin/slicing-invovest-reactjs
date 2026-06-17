import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { User, LoginResponse } from "../types/auth";

// Definisikan tipe untuk state dan fungsi yang akan digunakan dalam store
interface AuthState {
  isAuthenticated: boolean;
  user: User | null; // Menyimpan informasi user menggunakan objek User (null jika belum login)
  token: string | null;
  login: (payload: LoginResponse) => void;
  logout: () => void;
}

// Local state untuk menyimpan informasi login user (sekarang disimpan sebagai objek `user`) dan token
export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false, // status login awalnya false (sebelum login)
      login: (
        { user, token }, // Saat login berhasil, update state dengan data user dan token yang diterima dari backend, serta set isAuthenticated ke true
      ) =>
        set({
          user,
          token,
          isAuthenticated: true,
        }),
      logout: () => set({ user: null, token: null, isAuthenticated: false }), // Saat logout, reset semua state terkait login ke nilai awal (user null, token null, isAuthenticated false)
    }),
    {
      name: "invofest-auth-storage",
    },
  ),
);
