// File: src/store/useAuthStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  userEmail: string | null;
  isAuthenticated: boolean;
  login: (email: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      userEmail: null,
      isAuthenticated: false,
      login: (email) => set({ userEmail: email, isAuthenticated: true }),
      logout: () => set({ userEmail: null, isAuthenticated: false }),
    }),
    {
      name: "invofest-auth-storage", // Nama key yang akan tersimpan di LocalStorage
    }
  )
);