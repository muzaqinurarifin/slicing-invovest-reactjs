import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "../components/ui/Input";
import Button from "../components/ui/Button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { authAPI } from "../services/api";

const schema = z
  .object({
    name: z.string().min(1, "Nama harus diisi"),
    email: z.string().email("Email tidak valid"),
    password: z.string().min(8, "Password minimal 8 karakter"),
    passwordConfirm: z.string().min(8, "Konfirmasi password harus diisi"),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Password dan konfirmasi password harus sama",
    path: ["passwordConfirm"],
  });

export default function Register() {
  const navigate = useNavigate();
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = async (data: {
    name: string;
    email: string;
    password: string;
    passwordConfirm: string;
  }) => {
    setSubmitError(null);
    try {
      await authAPI.register(data);
      setSubmitSuccess("Registrasi berhasil. Mengalihkan ke login...");
      setTimeout(() => navigate("/login"), 1200);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Gagal register");
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-8">
      <header>
        <h1 className="text-2xl font-bold text-center">Register</h1>
      </header>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input
          label="Nama"
          name="name"
          register={register}
          error={errors.name?.message}
          type="text"
        />

        <Input
          label="Email"
          name="email"
          register={register}
          error={errors.email?.message}
          type="email"
        />

        <Input
          label="Password"
          name="password"
          register={register}
          error={errors.password?.message}
          type="password"
        />
        <Input
          label="Konfirmasi Password"
          name="passwordConfirm"
          register={register}
          error={errors.passwordConfirm?.message}
          type="password"
        />

        {submitError && <p className="text-red-500 text-sm">{submitError}</p>}
        {submitSuccess && (
          <p className="text-green-600 text-sm">{submitSuccess}</p>
        )}

        <div>
          <Button
            type="submit"
            label="Register"
            variant="primary"
            className="mt-4"
          />
        </div>

        <p className="mt-4 text-sm">
          Sudah punya akun?
          <Link to="/login" className="text-blue-500 hover:underline ml-1">
            Login di sini
          </Link>
        </p>
      </form>
    </div>
  );
}
