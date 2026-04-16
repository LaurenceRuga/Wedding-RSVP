import FadeInSection from "./FadeInSection";

const party = [
  {
    role: "Best Man",
    names: ["Tom Gallagher"],
  },
  {
    role: "Maid of Honor",
    names: ["Isabella Quinn"],
  },
  {
    role: "Groomsmen",
    names: ["Liam Walsh", "Noah Byrne", "Ethan Doyle"],
  },
  {
    role: "Bridesmaids",
    names: ["Sophie Murphy", "Emma Ryan", "Ava O'Connell"],
  },
];

export default function WeddingPartySection() {
  return (
    <section
      id="wedding-party"
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat px-4 py-24 md:py-0"
      style={{ backgroundImage: "url('/src/assets/floral-bg.png')" }}
    >
      <div className="mx-auto w-full max-w-6xl rounded-3xl border border-[#c9a84c]/30 bg-white/85 p-8 shadow-[0_10px_35px_rgba(0,0,0,0.12)] md:p-10">
        <FadeInSection delay={0}>
          <div className="text-center">
            <p className="font-sans text-xs font-medium uppercase tracking-[0.3em] text-amber-700">
              Entourage
            </p>
            <h2 className="mt-4 font-serif text-3xl text-slate-800 md:text-5xl">Wedding Party</h2>
          </div>
        </FadeInSection>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {party.map((group, index) => (
            <FadeInSection key={group.role} delay={index * 120}>
              <article className="rounded-2xl border border-amber-200/70 bg-white/70 p-6">
                <h3 className="font-serif text-2xl text-slate-800">{group.role}</h3>
                <ul className="mt-4 space-y-2">
                  {group.names.map((name) => (
                    <li key={name} className="font-sans text-sm text-slate-700">
                      {name}
                    </li>
                  ))}
                </ul>
              </article>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
