import axios, { AxiosError } from "axios";
import { useAuthStore } from "../store/useAuthStore";

// Buat instance axios dengan konfigurasi dasar
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:3000", // Ganti dengan URL backend Anda
  headers: {
    "Content-Type": "application/json",
  },
});

// menambahkan token ke header Authorization untuk setiap request jika token tersedia
api.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().token; // Ambil token dari Zustand store

    // Jika token tersedia, tambahkan ke header Authorization
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },

  // Handle error saat request gagal
  (error) => {
    return Promise.reject(error);
  },
);

// Interceptor untuk menangani response error secara global
api.interceptors.response.use(
  (response) => response, // Jika response sukses, langsung kembalikan response
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      // Jika status 401 Unauthorized, berarti token tidak valid atau sudah expired
      // Lakukan logout dengan memanggil fungsi logout dari Zustand store
      useAuthStore.getState().logout();

      window.dispatchEvent(new Event("auth:unauthorization")); // Dispatch event logout untuk memberi tahu komponen lain (jika diperlukan)
    }

    return Promise.reject(error); // Tetap kembalikan error untuk ditangani di komponen yang melakukan request
  },
);
