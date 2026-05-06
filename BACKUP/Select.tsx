import React from "react";

interface SelectProps {
  label: string;
  name: string;
  register: any;
  error?: string;
  options: { label: string; value: string }[];
}

export const Select: React.FC<SelectProps> = ({ label, name, register, error, options }) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="font-medium text-gray-700 text-sm">{label}</label>
      <select
        {...register(name)}
        className={`border bg-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-primary cursor-pointer transition-all ${
          error ? "border-red-500 bg-red-50" : "border-gray-300"
        }`}
      >
        <option value="">Pilih...</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};