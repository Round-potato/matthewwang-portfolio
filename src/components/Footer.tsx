import Container from "./Container";
import { site } from "../content/site";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8 text-sm text-muted">
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <div className="flex gap-4">
            <a href={`mailto:${site.links.email}`} className="hover:text-fg transition-colors">
              Email
            </a>
            <a href={site.links.github} target="_blank" rel="noopener noreferrer" className="hover:text-fg transition-colors">
              GitHub
            </a>
            <a href={site.links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-fg transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}




