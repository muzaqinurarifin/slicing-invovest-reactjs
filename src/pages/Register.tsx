import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "../components/ui/Input";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";

// validasi
const schema = z.object({
  nama: z.string().min(1, "Nama harus diisi"),
  email: z.string().min(8, "Email minimal 8 angka"),
  password: z.string().min(8, "Password minimal 8 angka"),
  password_confirm: z.string().min(8, "Konfirmasi password harus diisi"),
});
export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  return (
    <div className="bg-white rounded-xl shadow-sm p-8">
      <header>
        <h1 className="text-2xl font-bold text-center">Register</h1>
      </header>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <Input
          label="Nama"
          name="nama"
          register={register}
          error={errors.nama?.message}
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
          name="password_confirm"
          register={register}
          error={errors.password_confirm?.message}
          type="password"
        />

        <div>
          <Button label="Register" variant="primary" className="mt-4" />
        </div>

        <p>
          Sudah punya akun?
          <Link to="/login" className="text-blue-500 hover:underline ml-1">
            Login di sini
          </Link>
        </p>
      </form>
    </div>
  );
}
