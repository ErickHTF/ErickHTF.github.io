import { content } from "../../content";
import "../Projects/Projects.css";
import "./CollegeProjects.css";

function CollegeProjectCard({ p }) {
  return (
    <article className="project">
      <h3>{p.title}</h3>
      <p className="blurb">{p.blurb}</p>
      <div className="tags">{p.stack.map((c) => <span key={c}>{c}</span>)}</div>
      {p.href && (
        <a className="college-repo-link" href={p.href} target="_blank" rel="noreferrer">
          View repository →
        </a>
      )}
      <div className="project-img"><img src={p.img} alt={p.title} loading="lazy" decoding="async" /></div>
    </article>
  );
}

export default function CollegeProjects() {
  return (
    <section aria-labelledby="college-heading">
      <h2 id="college-heading" className="section-label">Side Projects</h2>
      {content.collegeProjects.map((p) => <CollegeProjectCard key={p.title} p={p} />)}
    </section>
  );
}
