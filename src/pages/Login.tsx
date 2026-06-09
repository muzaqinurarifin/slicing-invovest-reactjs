import { Input } from "../components/ui/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Button from "../components/ui/Button";
import { useAuthStore } from "../store/useAuthStore";
import { authAPI } from "../services/api";

const schema = z.object({
  email: z.string().email("Email tidak valid"),
  password: z.string().min(8, "Password minimal 8 karakter"),
});

export default function Login() {
  const [loginError, setLoginError] = useState<string | null>(null);
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = async (data: { email: string; password: string }) => {
    setLoginError(null);
    try {
      const user = await authAPI.login(data);
      login(user.email, user.name);
      navigate("/admin");
    } catch (error) {
      setLoginError(
        error instanceof Error ? error.message : "Email atau password salah",
      );
    }
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

        {loginError && (
          <p className="text-red-500 text-sm mt-2">{loginError}</p>
        )}

        <div>
          <Button
            type="submit"
            label="Login"
            variant="primary"
            className="mt-4"
          />
        </div>
      </form>
      <p className="mt-4 text-sm">
        Belum punya akun?
        <Link to="/register" className="text-blue-500 hover:underline ml-1">
          Register
        </Link>
      </p>
    </div>
  );
}
