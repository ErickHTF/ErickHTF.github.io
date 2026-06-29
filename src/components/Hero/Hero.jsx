import { content, pick } from "../../content";
import { useMode } from "../../context/useMode";
import Rays from "../Rays/Rays";
import DecryptedText from "../DecryptedText/DecryptedText";
import "./Hero.css";

export default function Hero() {
  const { mode } = useMode();
  return (
    <section className="hero" aria-labelledby="hero-name">
      <div className="hero__figure" aria-hidden="true">
        <Rays />
      </div>
      <div className="hero__text">
        <p className="hero__eyebrow">
          <DecryptedText
            text={pick(content.eyebrow, mode)}
            animateOn="view"
            sequential
            revealDirection="start"
            speed={45}
            characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ/._-"
            encryptedClassName="hero__eyebrow--encrypted"
          />
        </p>
        <h1 id="hero-name" className="hero__title">{content.name}</h1>
        <p className="hero__intro">{pick(content.intro, mode)}</p>
      </div>
    </section>
  );
}