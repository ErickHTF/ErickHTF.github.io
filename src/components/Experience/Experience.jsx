import { content } from "../../content";
import "../Projects/Projects.css";

function ExperienceCard({ e }) {
  return (
    <article className="project">
      <h3>{e.title}</h3>
      <p className="blurb">{e.blurb}</p>
      <div className="tags">{e.stack.map((c) => <span key={c}>{c}</span>)}</div>
      {e.img && (
        <div className="project-img"><img src={e.img} alt={e.title} loading="lazy" decoding="async" /></div>
      )}
    </article>
  );
}

export default function Experience() {
  return (
    <section aria-labelledby="experience-heading">
      <h2 id="experience-heading" className="section-label">Experience</h2>
      {content.experience.map((e) => <ExperienceCard key={e.title} e={e} />)}
    </section>
  );
}
