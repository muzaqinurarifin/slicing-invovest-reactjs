import type React from "react";

interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
  tipe: string;
  name: string;
  error?: string;
}

const InputText: React.FC<InputTextProps> = ({
  tipe,
  name,
  error,
  ...props
}) => {
  return (
    <input
      type={tipe}
      name={name}
      {...props}
      className={`border p-2 border-blue-800 rounded-md focus:border-blue-400 outline-none ${error ? "bg-red-200" : "bg-white"}`}
    />
  );
};
export default InputText;
