import Section from '../components/Section';
import { projects } from '../content/projects';
import ProjectCard from '../components/ProjectCard';
export default function Projects() {
  return (
    <Section
      id="projects"
      title="Made with curiosity."
      subtitle="A few experiments, useful tools, and ideas brought to life."
      number="01"
    >
      <div className="projects-grid">
        {projects.map((p, index) => (
          <ProjectCard key={p.slug} p={p} index={index} />
        ))}
      </div>
    </Section>
  );
}
