import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  userEmail: string | null;
  userName: string | null;
  isAuthenticated: boolean;
  login: (email: string, name?: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      userEmail: null,
      userName: null,
      isAuthenticated: false,
      login: (email, name) =>
        set({
          userEmail: email,
          userName: name ?? null,
          isAuthenticated: true,
        }),
      logout: () =>
        set({ userEmail: null, userName: null, isAuthenticated: false }),
    }),
    {
      name: "invofest-auth-storage",
    },
  ),
);
