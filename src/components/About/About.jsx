import { content } from "../../content";
import "./About.css";

function TestimonialCard({ t }) {
  return (
    <blockquote className="testimonial">
      <p className="testimonial-quote">"{t.quote}"</p>
      <cite className="testimonial-cite">
        <span className="testimonial-name">{t.name}</span>
        <span className="testimonial-role">{t.role}</span>
      </cite>
    </blockquote>
  );
}

export default function About() {
  return (
    <section aria-labelledby="about-heading">
      <h2 id="about-heading" className="section-label">About</h2>
      <p className="about-intro">
        In IT support I kept seeing things break without ever getting close enough to why.
        Couldn't go that deep on support, so that curiosity moved me into software
        and now I work in the financial sector as a software engineer.
      </p>
      <div className="about-quotes">
        {content.testimonials.map((t) => (
          <TestimonialCard key={t.name} t={t} />
        ))}
      </div>
      <a
        className="about-linkedin"
        href="https://linkedin.com/in/erickhentf"
        target="_blank"
        rel="noreferrer"
      >
        View recommendations on LinkedIn →
      </a>
    </section>
  );
}
