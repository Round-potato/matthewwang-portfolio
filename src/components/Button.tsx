import { cn } from "../lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

export default function Button({ variant = "primary", className, children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "rounded-full border border-border px-4 py-2 text-sm hover:bg-card transition",
        variant === "primary" && "bg-accent text-white border-accent",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}




