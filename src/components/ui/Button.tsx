import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
}

const variants = {
  primary: "bg-primary text-text-white hover:bg-hover-primary rounded-sm",
  secondary: "bg-secondary text-main hover:bg-hover-secondary rounded-sm",
  outline:
    "border border-primary text-primary rounded-sm hover:bg-primary hover:text-text-white",
};
const sizes = {
  sm: "px-5 py-2 text-base capitalize",
  md: "px-5 py-2.5 text-base capitalize",
  lg: "px-6 py-3 text-base uppercase",
};

const Button = ({
  variant = "primary",
  size = "sm",
  className,
  fullWidth,
  children,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
        variants[variant],
        sizes[size],
        fullWidth && "w-full",
        disabled && "cursor-not-allowed",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
