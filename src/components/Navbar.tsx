import ThemeToggle from "./ThemeToggle";
import Container from "./Container";
import { site } from "../content/site";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-bg/70 border-b border-border">
      <Container>
        <div className="flex h-14 items-center justify-between">
          <a href="#" className="font-bold tracking-tight">
            {site.name}
          </a>
          <nav className="flex items-center gap-4 text-sm">
            <a href="#projects" className="hover:underline">
              Projects
            </a>
            <a href="#about" className="hover:underline">
              About
            </a>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
            <ThemeToggle />
          </nav>
        </div>
      </Container>
    </header>
  );
}




