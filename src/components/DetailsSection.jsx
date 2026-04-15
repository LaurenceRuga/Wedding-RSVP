import FadeInSection from "./FadeInSection";
import WeddingMap from "./WeddingMap";

export default function DetailsSection() {
  return (
    <section
      id="details"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat px-4 py-24 md:py-0"
      style={{ backgroundImage: "url('/src/assets/floral-bg.png')" }}
    >
      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-12 md:grid-cols-2 md:items-stretch">
        <FadeInSection delay={100}>
          <div className="mx-4 rounded-3xl bg-white/70 p-10 backdrop-blur-sm md:mx-0">
            <FadeInSection delay={0}>
              <p className="font-sans text-xs font-medium uppercase tracking-[0.3em] text-amber-700">
                Wedding Details
              </p>
            </FadeInSection>
            <FadeInSection delay={100}>
              <div className="mt-8 space-y-8 text-left">
                <div className="border-l-2 border-amber-500 pl-4">
                  <p className="font-sans text-xs uppercase tracking-widest text-amber-700">Ceremony</p>
                  <p className="mt-1 font-serif text-xl text-slate-800">7:00 PM</p>
                  <p className="font-sans text-sm text-slate-600">Grand Ballroom, RMS Titanic</p>
                </div>
                <div className="border-l-2 border-amber-500 pl-4">
                  <p className="font-sans text-xs uppercase tracking-widest text-amber-700">Reception</p>
                  <p className="mt-1 font-serif text-xl text-slate-800">8:00 PM</p>
                  <p className="font-sans text-sm text-slate-600">
                    Al Fresco Deck — dinner, dancing, and celebration under the stars.
                  </p>
                </div>
              </div>
            </FadeInSection>
          </div>
        </FadeInSection>

        <FadeInSection delay={150}>
          <div className="mx-4 flex min-h-[20rem] flex-col overflow-hidden rounded-3xl bg-white/15 backdrop-blur-md md:mx-0 md:h-full">
            <WeddingMap />
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
