import Container from "../components/Container";
import Section from "../components/Section";
import { projects } from "../content/projects";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <Section id="projects" title="Projects" subtitle="Selected work">
      <Container>
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.slug} p={p} />
          ))}
        </div>
      </Container>
    </Section>
  );
}




