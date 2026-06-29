import { lazy, Suspense } from "react";
import { ModeProvider } from "./context/ModeContext";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";

const Projects = lazy(() => import("./components/Projects/Projects"));
const ContinuityBanner = lazy(() => import("./components/ContinuityBanner/ContinuityBanner"));
const Features = lazy(() => import("./components/Features/Features"));
const Footer = lazy(() => import("./components/Footer/Footer"));

export default function App() {
  return (
    <ModeProvider>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Suspense>
          <Projects />
          <ContinuityBanner />
          <Features />
          <Footer />
        </Suspense>
      </main>
    </ModeProvider>
  );
}
