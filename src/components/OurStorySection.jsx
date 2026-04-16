import FadeInSection from "./FadeInSection";
import titanicStory from "../assets/our-story-bg.png";

export default function OurStorySection() {
  return (
    <section
      id="our-story"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-24 md:py-0"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-fixed bg-no-repeat"
        style={{ backgroundImage: `url(${titanicStory})` }}
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 bg-black/50" aria-hidden />
      <div className="relative mx-4 max-w-2xl rounded-3xl bg-white/15 p-10 text-center backdrop-blur-[2px] md:mx-auto md:p-16">
        <FadeInSection delay={0}>
          <p className="font-sans text-xs font-medium uppercase tracking-[0.3em] text-[#B8860B]">
            Our Story
          </p>
        </FadeInSection>
        <FadeInSection delay={100}>
          <h2 className="mt-4 font-serif text-3xl text-white md:text-5xl">
            From the Stars to the Sea
          </h2>
        </FadeInSection>
        <FadeInSection delay={200}>
          <p className="mt-8 font-sans leading-relaxed text-white/80">
            They met among the stars and the ocean. A first class heart, a third class soul — and a
            love that transcended both. Against all odds, across every divide, Jack and Rose found in
            each other something neither the world nor the sea could ever take away. We can&apos;t
            wait to celebrate this love with you aboard.
          </p>
        </FadeInSection>
      </div>
    </section>
  );
}
