import { content } from "../../content";
import "./Projects.css";

function ProjectCard({ p }) {
  return (
    <article className="project">
      <h3>{p.title}</h3>
      <p className="blurb">{p.blurb}</p>
      <div className="tags">{p.stack.map((c) => <span key={c}>{c}</span>)}</div>
      {p.href && (
        <a className="repo-link" href={p.href} target="_blank" rel="noreferrer">
          View repository →
        </a>
      )}
      <div className="project-img"><img src={p.img} alt={p.title} loading="lazy" decoding="async" /></div>
    </article>
  );
}

export default function Projects() {
  return (
    <section aria-labelledby="projects-heading">
      <h2 id="projects-heading" className="section-label">Projects</h2>
      {content.projects.map((p) => <ProjectCard key={p.title} p={p} />)}
    </section>
  );
}
