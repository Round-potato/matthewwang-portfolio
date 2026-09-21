import Container from '../components/Container';
import Icon from '../components/Icon';
import { site } from '../content/site';
export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <Container>
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="small-star" aria-hidden="true">
                ✳
              </span>{' '}
              A WORK IN CURIOSITY
            </p>
            <h1 id="hero-title">
              Hello,
              <br />
              I’m <em>Matt.</em>
            </h1>
            <p className="hero-tagline">{site.tagline}</p>
            <p className="hero-description">
              Exploring code, creativity, and the things that connect them.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="button button-primary">
                Explore my work <Icon name="down" />
              </a>
              <a
                href="/resume.pdf"
                className="button button-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Résumé <Icon name="arrow" />
                <span className="sr-only"> (PDF, opens in a new tab)</span>
              </a>
            </div>
            <div className="hero-note">
              <span className="note-line" aria-hidden="true" />
              Developer by curiosity. Creative at heart.
            </div>
          </div>
          <figure className="hero-art">
            <div className="art-topline">
              <span>THE CREATIVE PROCESS</span>
              <span aria-hidden="true">FIG. 01</span>
            </div>
            <div className="art-orbit" aria-hidden="true" />
            <span className="art-spark art-spark-one" aria-hidden="true">
              ✳
            </span>
            <span className="art-spark art-spark-two" aria-hidden="true">
              +
            </span>
            <img
              src="/robot-illustration-2.png"
              alt="Two friendly robots making a meal together"
              width="853"
              height="1280"
              draggable={false}
            />
            <figcaption>
              <span className="handwritten">Always cooking something up.</span>
              <span aria-hidden="true">↗</span>
            </figcaption>
          </figure>
        </div>
        <div className="hero-bottom">
          <span>
            CODE <span aria-hidden="true">/</span> ART{' '}
            <span aria-hidden="true">/</span> A LITTLE CURIOSITY
          </span>
          <a href="#projects">
            A few things I’ve made <Icon name="down" />
          </a>
        </div>
      </Container>
    </section>
  );
}
