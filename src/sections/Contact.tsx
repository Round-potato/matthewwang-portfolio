import Container from "../components/Container";
import Section from "../components/Section";
import { site } from "../content/site";

export default function Contact() {
  return (
    <Section id="contact" title="Contact" subtitle="Let's build something thoughtful">
      <Container>
        <div className="text-sm">
          <a className="underline hover:text-accent transition-colors" href={`mailto:${site.links.email}`}>
            {site.links.email}
          </a>
        </div>
      </Container>
    </Section>
  );
}




