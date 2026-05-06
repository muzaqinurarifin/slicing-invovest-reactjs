import type { FC, ReactNode } from "react";

interface ButtonProps {
  label: string | ReactNode;
  variant?: "primary" | "outline";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  isLoading?: boolean;
}

export const Button: FC<ButtonProps> = ({
  label,
  variant = "primary",
  className,
  onClick,
  type = "button",
  disabled,
  isLoading,
}) => {
  const baseStyle =
    "px-10 py-3 rounded font-medium transition-all duration-200";
  const variantStyle =
    variant === "primary"
      ? "bg-[#852e4e] text-white hover:bg-[#6b253d]"
      : "border border-[#852e4e] text-[#852e4e] hover:bg-[#fde8f0]";

  const disabledStyle =
    disabled || isLoading ? "opacity-70 cursor-not-allowed" : "";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`${baseStyle} ${variantStyle} ${disabledStyle} ${className || ""}`}
    >
      {label}
    </button>
  );
};

export default Button;
