interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
}

export default function Section({ id, title, subtitle, children }: SectionProps) {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center items-center px-4"
    >
      {/* Invisible anchor positioned at the left edge */}
      {id && <div id={id} className="absolute left-0 top-0 w-0 h-0" />}

      <div className="max-w-4xl w-full text-left">
        {title && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
            {subtitle && <p className="text-muted mt-1">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}


