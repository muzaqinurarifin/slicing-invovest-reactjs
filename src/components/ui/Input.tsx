import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface BaseInputProps {
  label: string;
  name: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  register?: any;
  error?: string;
  type?: string;
  placeholder?: string;
}

export const Input: React.FC<BaseInputProps> = ({
  label,
  name,
  value,
  onChange,
  register,
  error,
  type = "text",
  placeholder,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPasswordField = type === "password";
  const inputType = isPasswordField
    ? showPassword
      ? "text"
      : "password"
    : type;

  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="font-medium text-gray-700 text-sm">{label}</label>
      <div className="relative">
        <input
          type={inputType}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          {...(register ? register(name) : {})}
          className={`border rounded-lg w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all ${
            isPasswordField ? "pr-10" : ""
          } ${error ? "border-red-500 bg-red-50" : "border-gray-300"}`}
        />
        {isPasswordField && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            aria-label={
              showPassword ? "Sembunyikan password" : "Tampilkan password"
            }
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};
