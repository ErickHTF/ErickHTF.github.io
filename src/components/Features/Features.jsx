import { content } from "../../content";
import "./Features.css";

function FeatureCard({ f }) {
  return (
    <article className="feature">
      <p className="feature-eyebrow">{f.tag}</p>
      <h3 className="feature-title">{f.title}</h3>
      {f.logos && (
        <div className="feature-logos">
          {f.logos.map((src, i) => (
            <img key={i} src={src} alt="" aria-hidden="true" loading="lazy" decoding="async" className="logo-default" />
          ))}
          {f.logosHover && f.logosHover.map((src, i) => (
            <img key={i} src={src} alt="" aria-hidden="true" loading="lazy" decoding="async" className="logo-hover" />
          ))}
        </div>
      )}
      <p className="feature-blurb">{f.blurb}</p>
    </article>
  );
}

export default function Features() {
  return (
    <section aria-labelledby="features-heading">
      <div className="features-section-header">
        <h2 id="features-heading" className="section-badge">Capabilities</h2>
      </div>
      <div className="features-grid">
        {content.features.map((f) => <FeatureCard key={f.title} f={f} />)}
      </div>
    </section>
  );
}
