import Container from './Container';
interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  number: string;
  children: React.ReactNode;
}
export default function Section({
  id,
  title,
  subtitle,
  number,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`section section-${id}`}
      aria-labelledby={`${id}-title`}
    >
      <Container>
        <div className="section-heading">
          <div>
            <p className="eyebrow section-index">{number} / SELECTED WORK</p>
            <h2 id={`${id}-title`}>{title}</h2>
          </div>
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
        </div>
        {children}
      </Container>
    </section>
  );
}
