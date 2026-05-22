// File: src/pages/Login.tsx
import { Input } from "../components/ui/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Button from "../components/ui/Button";
// 1. Import Zustand store-nya (Ganti auth manual)
import { useAuthStore } from "../store/useAuthStore";

const schema = z.object({
  email: z.string().min(1, "minimal diisi"),
  password: z.string().min(8, "PASSWORD MINIMAL 8 ANGKA"),
});

export default function Login() {
  const [loginError, setLoginError] = useState<string | null>(null);
  const navigate = useNavigate();
  
  // 2. Ambil fungsi login dari store
  const login = useAuthStore((state) => state.login);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  // 3. Ubah logika onSubmit
  const onSubmit = (data: { email: string; password: string }) => {
    // Simulasi pengecekan database (sama seperti fungsi kamu sebelumnya)
    if (data.email === "muzaqi.nurar4@gmail.com" && data.password === "muzaqi123") {
      login(data.email); // Memanggil fungsi login dari Zustand
      navigate("/admin");
    } else {
      setLoginError("Email atau password salah. Gunakan akun admin untuk masuk.");
    }
  };

  return (
    // ... (Kode HTML/JSX di bawah ini tetap sama seperti milikmu)
    <div className="bg-white rounded-xl shadow-sm p-8">
      <header>
        <h1 className="text-2xl font-bold text-center">Login Admin</h1>
      </header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input label="Email" name="email" register={register} error={errors.email?.message} type="email" />
        <Input label="Password" name="password" register={register} error={errors.password?.message} type="password" />

        {loginError && <p className="text-red-500 text-sm mt-2">{loginError}</p>}

        <div>
          <Button type="submit" label="Login" variant="primary" className="mt-4" />
        </div>
      </form>
      <p className="mt-4 text-sm">
        Belum punya akun?
        <Link to="/register" className="text-blue-500 hover:underline ml-1">Register</Link>
      </p>
    </div>
  );
}