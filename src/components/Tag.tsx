import { cn } from "../lib/utils";

interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export default function Tag({ children, className }: TagProps) {
  return (
    <span className={cn("text-xs rounded-full border border-border px-2 py-0.5", className)}>
      {children}
    </span>
  );
}




