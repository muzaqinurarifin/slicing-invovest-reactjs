import React from "react";

interface BaseInputProps {
  label: string;
  name: string;
  register: any;
  error?: string;
  type?: string;
  placeholder?: string;
}

export const Input: React.FC<BaseInputProps> = ({ label, name, register, error, type = "text", placeholder }) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="font-medium text-gray-700 text-sm">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className={`border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all ${
          error ? "border-red-500 bg-red-50" : "border-gray-300"
        }`}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};