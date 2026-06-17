import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";
import { useAuthStore } from "../store/useAuthStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import type { LoginInput, LoginResponse } from "../types/auth";
import { api } from "../lib/axios";
import { Input } from "../components/ui/Input";

const schema = z.object({
  email: z.string().min(1, "Email harus diisi"),
  password: z
    .string()
    .min(1, "Password harus diisi")
    .min(8, "Password minimal 8 karakter"),
});

type FormData = z.infer<typeof schema>;

type ErrorResponse = {
  message?: string;
};

export default function Login() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const login = useAuthStore((state) => state.login);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const loginMutation = useMutation({
    mutationFn: async (credentials: LoginInput) => {
      const response = await api.post<LoginResponse>(
        "/auth/login",
        credentials,
      );
      return response.data;
    },

    onSuccess: (data) => {
      login({
        user: data.user,
        token: data.token,
      });

      queryClient.setQueryData(["me"], data.user);
      navigate("/admin");
    },

    onError: (error: AxiosError<ErrorResponse>) => {
      const message =
        error.response?.data?.message ||
        error.message ||
        "Terjadi kesalahan saat login";

      alert("login gagal: " + message);
    },
  });

  const onSubmit = (data: FormData) => {
    loginMutation.mutate(data);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-8">
      <header>
        <h1 className="text-2xl font-bold text-center">Login Admin</h1>
      </header>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input
          label="Email"
          name="email"
          type="email"
          placeholder="Masukkan email"
          register={register}
          error={errors.email?.message}
        />

        <Input
          label="Password"
          name="password"
          type="password"
          placeholder="Masukkan password"
          register={register}
          error={errors.password?.message}
        />

        <Button
          type="submit"
          label={loginMutation.isPending ? "Loading..." : "Login"}
          variant="primary"
          className="w-full mt-4"
          // disabled={loginMutation.isPending}
        />
      </form>
      <p className="mt-4 text-sm text-center">
        Belum punya akun?
        <Link to="/register" className="text-blue-500 hover:underline ml-1">
          Register
        </Link>
      </p>
    </div>
  );
}
