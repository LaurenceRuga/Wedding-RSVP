import { Link } from "react-scroll";
import FadeInSection from "./FadeInSection";
import heroBg from "../assets/hero-bg.png";

const scrollProps = {
  smooth: true,
  duration: 600,
  offset: -72,
};

export default function Hero() {
  return (
    <section className="relative z-0 flex min-h-screen items-center justify-center overflow-hidden px-4 pt-16">
      <div
        className="hero-bg pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 bg-black/55" aria-hidden />

      <FadeInSection>
        <div className="relative mx-auto max-w-4xl text-center">
          <p
            className="animate-fadeInUp font-serif text-lg italic text-[#B8860B] md:text-xl"
            style={{ animationDelay: "300ms" }}
          >
            A Love Beyond the Sea
          </p>
          <p
            className="animate-fadeInUp mt-3 font-serif text-2xl text-[#B8860B]/90"
            style={{ animationDelay: "500ms" }}
          >
            ✦
          </p>
          <h1
            className="animate-fadeInUp mt-4 font-serif text-4xl font-normal tracking-widest text-white sm:text-6xl md:text-8xl"
            style={{ animationDelay: "700ms" }}
          >
            JACK &amp; ROSE
          </h1>
          <p
            className="animate-fadeInUp mt-6 font-sans text-sm tracking-[0.25em] text-white/70"
            style={{ animationDelay: "900ms" }}
          >
            7 PM · APRIL 24, 2026
          </p>

          <div
            className="animate-fadeInUp mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
            style={{ animationDelay: "1100ms" }}
          >
            <Link
              to="rsvp"
              {...scrollProps}
              className="inline-flex min-w-[180px] cursor-pointer items-center justify-center rounded-full bg-[#FAF7F2] px-8 py-3 font-sans text-xs font-medium uppercase tracking-widest text-[#2D2D2D] transition hover:bg-white"
            >
              RSVP NOW
            </Link>
            <Link
              to="our-story"
              {...scrollProps}
              className="inline-flex min-w-[180px] cursor-pointer items-center justify-center rounded-full border-2 border-white bg-transparent px-8 py-3 font-sans text-xs font-medium uppercase tracking-widest text-white transition hover:bg-white/10"
            >
              OUR STORY
            </Link>
          </div>
        </div>
      </FadeInSection>

      <div className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/70">
        <span className="text-2xl" aria-hidden>
          ↓
        </span>
      </div>
    </section>
  );
}
