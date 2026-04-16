import FadeInSection from "./FadeInSection";
import dresscodeImg from "../assets/dresscode_merged.jpg";

const pills = ["Black Tie", "Pearls & Gloves", "Edwardian Formal"];

const dos = [
  "Arrive 15 minutes early",
  "Dress in formal Edwardian attire",
  "Sign the guest book",
  "Enjoy the open bar responsibly",
];

const donts = [
  "No casual or beach wear",
  "No flash photography during ceremony",
  "No outside food or drinks",
  "No social media until after the ceremony",
];

export default function DressCodeSection() {
  return (
    <section
      id="dress-code"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-24 md:py-0"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${dresscodeImg})` }}
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 bg-black/50" aria-hidden />
      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-12 md:grid-cols-2">
        <FadeInSection delay={100}>
          <div className="mx-4 rounded-3xl bg-white/15 p-10 backdrop-blur-[2px] md:mx-0">
            <FadeInSection delay={0}>
              <p className="font-sans text-xs font-medium uppercase tracking-[0.3em] text-[#B8860B]">
                Dress Code
              </p>
            </FadeInSection>
            <FadeInSection delay={100}>
              <h2 className="mt-4 font-serif text-3xl text-white md:text-4xl">Edwardian Formal</h2>
            </FadeInSection>
            <FadeInSection delay={200}>
              <p className="mt-6 font-sans leading-relaxed text-white/80">
                Black tie formal. Think Edwardian elegance — pearls, gloves, and timeless
                sophistication.
              </p>
            </FadeInSection>
            <FadeInSection delay={300}>
              <div className="mt-8 flex flex-wrap gap-2">
                {pills.map((pill) => (
                  <span
                    key={pill}
                    className="rounded-full border border-amber-400/50 px-4 py-1 font-sans text-xs text-amber-200"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </FadeInSection>
          </div>
        </FadeInSection>

        <FadeInSection delay={150}>
          <div className="mx-4 rounded-3xl bg-white/15 p-10 backdrop-blur-[2px] md:mx-0">
            <FadeInSection delay={0}>
              <p className="font-sans text-xs font-medium uppercase tracking-[0.3em] text-[#B8860B]">
                DOs &amp; DON&apos;Ts
              </p>
            </FadeInSection>
            <div className="mt-8 space-y-8">
              <div>
                <p className="font-sans text-xs uppercase tracking-widest text-white/60">DO</p>
                <ul className="mt-4 space-y-3 font-sans text-sm text-white/90">
                  {dos.map((line, index) => (
                    <FadeInSection key={line} delay={index * 80} as="li" className="flex gap-2">
                      <span className="text-emerald-400">✓</span>
                      <span>{line}</span>
                    </FadeInSection>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-sans text-xs uppercase tracking-widest text-white/60">
                  DON&apos;T
                </p>
                <ul className="mt-4 space-y-3 font-sans text-sm text-white/90">
                  {donts.map((line, index) => (
                    <FadeInSection key={line} delay={index * 80} as="li" className="flex gap-2">
                      <span className="text-red-400">✗</span>
                      <span>{line}</span>
                    </FadeInSection>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
