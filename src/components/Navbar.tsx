import { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle';
import Container from './Container';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    if (!menuOpen) return;
    document
      .querySelector<HTMLAnchorElement>('#primary-navigation a')
      ?.focus({ preventScroll: true });
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        document.getElementById('menu-toggle')?.focus();
      }
    };
    const desktop = window.matchMedia('(min-width: 640px)');
    const closeOnDesktop = () => {
      if (desktop.matches) setMenuOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    desktop.addEventListener('change', closeOnDesktop);
    return () => {
      window.removeEventListener('keydown', closeOnEscape);
      desktop.removeEventListener('change', closeOnDesktop);
    };
  }, [menuOpen]);
  return (
    <header className="site-header">
      <Container>
        <div className="nav-bar">
          <a
            href="#home"
            className="brand"
            aria-label="Matt Wang, home"
            onClick={() => setMenuOpen(false)}
          >
            <span className="brand-mark" aria-hidden="true">
              mw.
            </span>
            <span>
              Matt Wang<span className="brand-period">.</span>
            </span>
          </a>
          <div className="nav-actions">
            <nav
              id="primary-navigation"
              aria-label="Main navigation"
              className={`main-nav ${menuOpen ? 'is-open' : ''}`}
            >
              <a href="#projects" onClick={() => setMenuOpen(false)}>
                Projects
              </a>
              <a href="#about" onClick={() => setMenuOpen(false)}>
                About
              </a>
              <a href="#contact" onClick={() => setMenuOpen(false)}>
                Say hello <span aria-hidden="true">↗</span>
              </a>
            </nav>
            <ThemeToggle />
            <button
              id="menu-toggle"
              className="menu-toggle"
              type="button"
              aria-controls="primary-navigation"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span aria-hidden="true">{menuOpen ? 'Close' : 'Menu'}</span>
              <span
                className={`menu-lines ${menuOpen ? 'is-open' : ''}`}
                aria-hidden="true"
              >
                <span />
                <span />
              </span>
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
}
