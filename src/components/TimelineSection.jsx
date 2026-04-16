import FadeInSection from "./FadeInSection";

const events = [
  { time: "6:00 PM", title: "Guest Arrival & Cocktail Hour" },
  { time: "7:00 PM", title: "Wedding Ceremony — Grand Ballroom" },
  { time: "7:45 PM", title: "Exchange of Vows" },
  { time: "8:00 PM", title: "Reception Dinner — Al Fresco Deck" },
  { time: "9:00 PM", title: "First Dance" },
  { time: "9:30 PM", title: "Open Dancing & Celebration" },
  { time: "11:00 PM", title: "Send-off & Farewell" },
];

function TimelineBlock({ time, title }) {
  return (
    <>
      <p className="font-sans text-xs font-medium uppercase tracking-widest text-amber-700">{time}</p>
      <p className="mt-1 break-words font-serif text-lg text-slate-600 md:text-xl">{title}</p>
    </>
  );
}

export default function TimelineSection() {
  return (
    <section
      id="timeline"
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat px-4 py-24 md:px-6 md:py-0"
      style={{ backgroundImage: "url('/src/assets/floral-bg.png')" }}
    >
      <div className="mx-auto w-full max-w-4xl px-6 pt-10 md:px-10 md:pt-16">
        <FadeInSection delay={0}>
          <div className="px-2 pb-2 text-center md:px-0 md:pb-4">
            <p className="font-sans text-xs font-medium uppercase tracking-[0.3em] text-amber-700">
              Program Flow
            </p>
            <h2 className="mt-4 font-serif text-3xl text-slate-800 md:text-5xl">The Evening Ahead</h2>
          </div>
        </FadeInSection>

        <div className="relative mt-16 md:px-2">
          <div
            className="absolute top-0 bottom-0 left-4 w-px bg-amber-300 md:left-1/2 md:-translate-x-px"
            aria-hidden
          />

          <ul>
            {events.map((item, index) => (
              <li key={item.time} className="relative">
                <FadeInSection delay={index * 120}>
                  {/* Mobile: stacked with line */}
                  <div className="relative pb-14 pl-12 md:hidden">
                    <span className="absolute top-1.5 left-4 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-amber-700 bg-amber-600" />
                    <TimelineBlock time={item.time} title={item.title} />
                  </div>

                  {/* Desktop: alternating */}
                  <div className="relative hidden pb-16 md:grid md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:items-center md:gap-4">
                    <div
                      className={`${index % 2 === 0 ? "text-right" : ""} ${index % 2 === 0 ? "pr-3" : ""} min-w-0`}
                    >
                      {index % 2 === 0 && (
                        <TimelineBlock time={item.time} title={item.title} />
                      )}
                    </div>

                    <div className="flex justify-center py-1">
                      <span className="h-3 w-3 rounded-full border-2 border-amber-700 bg-amber-600" />
                    </div>

                    <div className={`${index % 2 === 1 ? "text-left" : ""} ${index % 2 === 1 ? "pl-3" : ""} min-w-0`}>
                      {index % 2 === 1 && (
                        <TimelineBlock time={item.time} title={item.title} />
                      )}
                    </div>
                  </div>
                </FadeInSection>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
