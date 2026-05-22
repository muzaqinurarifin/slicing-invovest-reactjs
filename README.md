# INVOVEST - Frontend

Frontend aplikasi event management untuk INVOFEST (Inovasi Teknologi Fest) yang dibangun dengan React + Vite + TailwindCSS.

## 📋 Daftar Isi

- [Tentang Proyek](#tentang-proyek)
- [Tech Stack](#tech-stack)
- [Fitur Utama](#fitur-utama)
- [Instalasi](#instalasi)
- [Cara Menjalankan](#cara-menjalankan)
- [Struktur Folder](#struktur-folder)
- [Halaman & Komponen](#halaman--komponen)
- [API Integration](#api-integration)
- [Authentication](#authentication)

## 📌 Tentang Proyek

INVOVEST adalah aplikasi web untuk mengelola dan menampilkan berbagai event INVOFEST seperti:

- Seminar
- Workshop
- Talkshow
- Kompetisi

Pengguna dapat melihat detail event, mendaftar, dan admin dapat mengelola kategori, speaker, dan event melalui dashboard admin.

## 🛠️ Tech Stack

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** TailwindCSS
- **Routing:** React Router v6
- **State Management:** Zustand (untuk auth)
- **Form Handling:** React Hook Form + Zod (validasi)
- **Icons:** Lucide React
- **HTTP Client:** Fetch API

## ✨ Fitur Utama

- ✅ Landing page dengan showcase event
- ✅ Halaman detail seminar, workshop, talkshow, kompetisi
- ✅ Sistem login/authentication dengan Zustand
- ✅ Dashboard admin untuk manage events, categories, speakers
- ✅ Form registrasi dengan validasi Zod
- ✅ Responsive design (mobile-friendly)
- ✅ Protected routes untuk admin

## 🚀 Instalasi

### Prerequisites

- Node.js >= 16
- npm atau yarn

### Setup

```bash
cd INVOVEST
npm install
echo VITE_API_URL=https://backend-slicing-invovest-reactjs-production.up.railway.app > .env.local
```

## 🏃 Cara Menjalankan

### Development Mode

```bash
npm run dev
```

Aplikasi akan berjalan di `http://localhost:5173`

### Build untuk Production

```bash
npm run build
```

### Preview Build Lokal

```bash
npm run preview
```

## 📁 Struktur Folder

```
INVOVEST/
├── src/
│   ├── assets/              # Gambar & icon
│   ├── components/          # Komponen reusable
│   │   ├── Header.tsx
│   │   ├── RegisterForm.tsx
│   │   └── ui/              # Komponen UI dasar
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── Input.tsx
│   │       └── ...
│   ├── layouts/             # Layout templates
│   │   ├── AdminLayout.tsx
│   │   ├── AuthLayout.tsx
│   │   └── MainLayout.tsx
│   ├── pages/               # Halaman utama
│   │   ├── Beranda.tsx
│   │   ├── Login.tsx
│   │   ├── Seminar.tsx
│   │   ├── Workshop.tsx
│   │   ├── Talkshow.tsx
│   │   ├── Competition.tsx
│   │   └── admin/
│   │       ├── ManageCategories.tsx
│   │       ├── ManageEvents.tsx
│   │       └── ManageSpeakers.tsx
│   ├── routes/              # Route protection
│   │   └── ProtectedRoute.tsx
│   ├── services/            # API services
│   │   └── api.ts
│   ├── store/               # State management
│   │   └── useAuthStore.ts
│   ├── App.tsx
│   └── main.tsx
├── public/                  # Static files
└── package.json
```

## 📄 Halaman & Komponen

### Halaman Publik

- **Beranda** (`/`) - Landing page
- **Seminar** (`/seminar`) - Daftar seminar
- **Workshop** (`/workshop`) - Daftar workshop
- **Talkshow** (`/talkshow`) - Daftar talkshow
- **Competition** (`/competition`) - Daftar kompetisi
- **Login** (`/login`) - Form login

### Halaman Admin (Protected)

- **Dashboard** (`/admin`)
- **Manage Events** (`/admin/events`)
- **Manage Categories** (`/admin/categories`)
- **Manage Speakers** (`/admin/speakers`)

## 🔌 API Integration

### Base URL

```
Production: https://backend-slicing-invovest-reactjs-production.up.railway.app
Local: http://localhost:3000
```

### Endpoints

- `GET /events` - Ambil semua event
- `POST /events` - Buat event
- `PUT /events/:id` - Update event
- `DELETE /events/:id` - Hapus event
- `GET /categories` - Ambil kategori
- `POST /categories` - Buat kategori
- `GET /speakers` - Ambil speaker
- `POST /speakers` - Buat speaker

## 🔐 Authentication

### Login Credentials

- Email: `muzaqi.nurar4@gmail.com`
- Password: `muzaqi123`

State disimpan di Zustand store dengan LocalStorage key `invofest-auth-storage`.

## 📝 Environment Variables

```
VITE_API_URL=https://backend-slicing-invovest-reactjs-production.up.railway.app
```

## 🎨 Styling

Menggunakan TailwindCSS dengan custom colors:

- Primary: Red (`bg-red-900`)
- Secondary: Slate (`text-slate-600`)
- Accent: Pink (`bg-[#fff1f5]`)

## 📱 Responsive Design

Fully responsive di semua ukuran layar:

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 📄 License

MIT License

---

**Last Updated:** May 22, 2026
