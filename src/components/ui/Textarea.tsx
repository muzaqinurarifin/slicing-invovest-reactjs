import React from "react";

interface TextareaProps {
  label: string;
  name: string;
  register: any;
  error?: string;
  placeholder?: string;
}

export const Textarea: React.FC<TextareaProps> = ({ label, name, register, error, placeholder }) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="font-medium text-gray-700 text-sm">{label}</label>
      <textarea
        {...register(name)}
        placeholder={placeholder}
        className={`border rounded-lg px-3 py-2 min-h-25 focus:outline-none focus:ring-2 focus:ring-brand-primary resize-y transition-all ${
          error ? "border-red-500 bg-red-50" : "border-gray-300"
        }`}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};