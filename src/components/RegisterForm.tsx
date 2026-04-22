import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Input } from "./ui/Input";
import { PasswordInput } from "./ui/PasswordInput";
import { Select } from "./ui/Select";
import { Textarea } from "./ui/Textarea";
import Button from "./ui/Button";

const schema = z.object({
  fullName: z.string().min(3, "Nama lengkap minimal 3 karakter"),
  email: z.string().email("Format email tidak valid"),
  password: z.string().min(8, "Password minimal 8 karakter"),
  eventCategory: z.string().min(1, "Silakan pilih kategori event"),
  bio: z.string().min(10, "Bio terlalu singkat (minimal 10 karakter)"),
});

type FormData = z.infer<typeof schema>;

export const RegisterForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log("✅ Data Registrasi Berhasil Disubmit:", data);
      alert("Registrasi Berhasil! Cek console.log untuk melihat data.");
      reset();
    } catch (error) {
      console.error("Terjadi kesalahan", error);
    } finally {
      setIsLoading(false);
    }
  };

  const eventOptions = [
    { label: "IT Seminar Nasional", value: "seminar" },
    { label: "IT Talkshow", value: "talkshow" },
    { label: "Web Design Competition", value: "web-design" },
    { label: "UI/UX Design Competition", value: "ui-ux" },
  ];

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-5 bg-white p-8 rounded-xl shadow-lg w-full max-w-md border border-gray-100"
    >
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Daftar INVOFEST</h2>
        <p className="text-sm text-gray-500">
          Lengkapi data diri Anda di bawah ini.
        </p>
      </div>

      <Input
        label="Nama Lengkap"
        name="fullName"
        placeholder="Masukkan nama lengkap"
        register={register}
        error={errors.fullName?.message}
      />

      <Input
        label="Email"
        name="email"
        type="email"
        placeholder="contoh@harkatnegeri.ac.id"
        register={register}
        error={errors.email?.message}
      />

      <PasswordInput
        label="Password"
        name="password"
        placeholder="Minimal 8 karakter"
        register={register}
        error={errors.password?.message}
      />

      <Select
        label="Kategori Event"
        name="eventCategory"
        options={eventOptions}
        register={register}
        error={errors.eventCategory?.message}
      />

      <Textarea
        label="Bio Singkat"
        name="bio"
        placeholder="Ceritakan sedikit tentang minat Anda di bidang IT..."
        register={register}
        error={errors.bio?.message}
      />

      <div className="mt-4">
        <Button
          type="submit"
          label={
            (isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Memproses...
              </span>
            ) : (
              "Daftar Sekarang"
            )) as any
          }
          variant="primary"
          isLoading={isLoading}
          disabled={isLoading}
          className="w-full"
        />
      </div>
    </form>
  );
};

export default RegisterForm;
