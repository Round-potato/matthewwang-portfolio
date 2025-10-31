import Container from "../components/Container";
import Section from "../components/Section";

export default function About() {
  return (
    <Section id="about" title="About" subtitle="A quick snapshot">
      <Container>
        <div className="max-w-3xl mx-auto text-lg leading-relaxed text-muted-foreground font-light space-y-4">
          <p>
            Hey, I&apos;m a first-year computer science student at the University of British Columbia.
            I love problem-solving, and especially the kind that forces me to learn new skills to truly
            understand how things work.
          </p>

          <p>
            Outside of tech, I&apos;m drawn to the arts. I love photography, videography, and storytelling.
            They let me express how I see the world and the people around me.
          </p>

          <p>
             Cooking is my love language and food is my place of comfort. Creating something from scratch
            feels a lot like coding because it’s creative, iterative, and deeply rewarding.
          </p>
          <p>
            A little bit of this, a little bit of that~~~
          </p>
        </div>
      </Container>
    </Section>
  );
}