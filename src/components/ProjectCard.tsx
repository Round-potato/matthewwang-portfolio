import { Project } from "../types";

interface ProjectCardProps {
  p: Project;
}

export default function ProjectCard({ p }: ProjectCardProps) {
  return (
    <article className="rounded-2xl border border-border bg-card p-5 shadow-soft hover:shadow-md transition">
      <h3 className="text-lg font-semibold">{p.title}</h3>
      <p className="mt-1 text-sm text-muted">{p.description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {p.tags.map((t: string) => (
          <span key={t} className="text-xs rounded-full border border-border px-2 py-0.5">
            {t}
          </span>
        ))}
      </div>
      <div className="mt-4 flex gap-4 text-sm">
        {p.href && (
          <a className="underline hover:text-accent transition-colors" href={p.href} target="_blank" rel="noopener noreferrer">
            Live
          </a>
        )}
        {p.repo && (
          <a className="underline hover:text-accent transition-colors" href={p.repo} target="_blank" rel="noopener noreferrer">
            Code
          </a>
        )}
      </div>
    </article>
  );
}

