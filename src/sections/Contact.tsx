import Container from '../components/Container';
import Icon from '../components/Icon';
import { site } from '../content/site';
export default function Contact() {
  return (
    <section
      id="contact"
      className="contact-section"
      aria-labelledby="contact-title"
    >
      <Container>
        <div className="contact-panel">
          <div>
            <p className="eyebrow">03 / SAY HELLO</p>
            <h2 id="contact-title">
              Good things start
              <br />
              with a <em>conversation.</em>
            </h2>
            <p className="contact-description">
              An idea, a collaboration, or just a hello.
              <br />
              Let’s build something thoughtful.
            </p>
          </div>
          <a className="contact-link" href={`mailto:${site.links.email}`}>
            <span className="contact-arrow">
              <Icon name="arrow" />
            </span>
            <span>{site.links.email}</span>
          </a>
          <span className="contact-spark" aria-hidden="true">
            ✳
          </span>
        </div>
      </Container>
    </section>
  );
}
