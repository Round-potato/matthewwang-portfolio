import Container from '../components/Container';
export default function About() {
  return (
    <section
      id="about"
      className="section section-about"
      aria-labelledby="about-title"
    >
      <Container>
        <div className="about-grid">
          <div className="about-heading">
            <p className="eyebrow section-index">
              02 / THE PERSON BEHIND THE PROJECTS
            </p>
            <h2 id="about-title">
              A little bit of this.
              <br />
              <em>A little bit of that.</em>
            </h2>
            <div className="about-interests">
              <span>⌘ Code</span>
              <span>◉ Camera</span>
              <span>♡ Kitchen</span>
            </div>
          </div>
          <div className="about-copy">
            <p>
              Hey, I’m a first-year computer science student at the{' '}
              <strong>University of British Columbia.</strong> I love
              problem-solving, especially the kind that forces me to learn new
              skills to truly understand how things work.
            </p>
            <p>
              Outside of tech, I’m drawn to the arts. I love{' '}
              <strong>photography, videography, and storytelling.</strong> They
              let me express how I see the world and the people around me.
            </p>
            <p>
              <strong>Cooking is my love language</strong> and food is my place
              of comfort. Creating something from scratch feels a lot like
              coding: creative, iterative, and deeply rewarding.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
