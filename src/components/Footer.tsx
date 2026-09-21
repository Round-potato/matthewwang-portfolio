import Container from './Container';
import Icon from './Icon';
import { site } from '../content/site';
export default function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="footer-inner">
          <div>
            <a href="#home" className="footer-brand">
              Matt Wang.
            </a>
            <p>© {new Date().getFullYear()} · Made with a little curiosity.</p>
          </div>
          <nav aria-label="Social links">
            <a href={`mailto:${site.links.email}`}>
              Email <Icon name="arrow" />
            </a>
            <a
              href={site.links.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <Icon name="arrow" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a
              href={site.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn <Icon name="arrow" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
