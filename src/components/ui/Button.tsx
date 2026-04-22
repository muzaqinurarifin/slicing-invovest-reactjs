interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  variant = "primary",
  className,
  isLoading,
  disabled,
  ...props
}) => {
  const baseStyle =
    "px-10 py-3 rounded font-medium transition-all duration-200";
  const variantStyle =
    variant === "primary"
      ? "bg-red-900 text-white hover:bg-red-800 disabled:opacity-70 disabled:cursor-not-allowed"
      : "border border-red-900 text-red-900 hover:bg-red-100 disabled:opacity-70 disabled:cursor-not-allowed";
  return (
    <button
      className={`${baseStyle} ${variantStyle} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
