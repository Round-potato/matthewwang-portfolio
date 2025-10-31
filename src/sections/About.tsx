import Container from "../components/Container";
import Section from "../components/Section";

export default function About() {
  return (
    <Section id="about" title="About" subtitle="A quick snapshot">
      <Container>
        <div className="prose max-w-none">
          <p>
            I'm a self-taught developer and TKS innovator who builds AI-infused,
            web-first products. Recent work includes a translator/summarizer
            pipeline (Reddit → Hugging Face → OpenAI TTS), a recipe assistant,
            and a from-scratch mini-GPT experiment.
          </p>
        </div>
      </Container>
    </Section>
  );
}




