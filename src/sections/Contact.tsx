import Container from "../components/Container";
import Section from "../components/Section";

export default function Contact() {
  return (
    <Section id="contact" title="Contact" subtitle="Let’s build something thoughtful.">
        <div className=" max-w-xl text-left space-y-6">

          <a
            href="mailto:wangmatthew152@gmail.com"
            className="inline-flex items-center justify-center text-base font-medium hover:bg-card transition-colors underline-offset-4 hover:underline"
          >
            wangmatthew152@gmail.com
          </a>
        </div>
    </Section>
  );
}