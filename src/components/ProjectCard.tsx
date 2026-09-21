import { Project } from '../types';
import Icon from './Icon';
import ProjectVisual from './ProjectVisual';
const categories: Record<string, string> = {
  'translator-pipeline': 'LANGUAGE & AUTOMATION',
  howse: 'FOOD & EVERYDAY TOOLS',
  'mini-gpt': 'LEARNING BY BUILDING',
  'chrome-paragraph': 'A LITTLE CREATIVE ASSISTANCE',
};
export default function ProjectCard({
  p,
  index,
}: {
  p: Project;
  index: number;
}) {
  return (
    <article className="project-card">
      <ProjectVisual slug={p.slug} />
      <div className="project-info">
        <p className="project-category">
          <span>{categories[p.slug]}</span>
          <span>{String(index + 1).padStart(2, '0')}</span>
        </p>
        <h3>{p.title}</h3>
        <p className="project-description">{p.description}</p>
        <ul className="project-tags" aria-label="Technologies">
          {p.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <div className="project-links">
          {p.href && (
            <a
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${p.title} (opens in a new tab)`}
            >
              Visit project <Icon name="arrow" />
            </a>
          )}
          {p.repo && (
            <a
              href={p.repo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View code for ${p.title} (opens in a new tab)`}
            >
              View code <Icon name="arrow" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
