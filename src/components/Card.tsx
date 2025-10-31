import { cn } from "../lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <article className={cn("rounded-2xl border border-border bg-card p-5 shadow-soft", className)}>
      {children}
    </article>
  );
}




