import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface PasswordInputProps {
  label: string;
  name: string;
  register: any;
  error?: string;
  placeholder?: string;
}

export const PasswordInput: React.FC<PasswordInputProps> = ({ label, name, register, error, placeholder = "••••••••" }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="font-medium text-gray-700 text-sm">{label}</label>
      <div className="relative">
        <input
          type={show ? "text" : "password"}
          placeholder={placeholder}
          {...register(name)}
          className={`border rounded-lg px-3 py-2 w-full pr-10 focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all ${
            error ? "border-red-500 bg-red-50" : "border-gray-300"
          }`}
        />
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-3 top-2.5 text-gray-500 hover:text-brand-primary transition-colors"
        >
          {show ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};