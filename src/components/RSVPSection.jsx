import { useMemo, useState } from "react";
import FadeInSection from "./FadeInSection";
import Countdown from "./Countdown";

const mealOptions = ["Chicken", "Fish", "Vegetarian"];
const relationshipOptions = [
  "Bride's Family",
  "Groom's Family",
  "Bride's Friend",
  "Groom's Friend",
  "Colleague",
  "Other",
];

const initialGuests = [
  { name: "Thomas Andrews", status: "Attending", relationship: "Groom's Colleague" },
  { name: "Molly Brown", status: "Attending", relationship: "Bride's Friend" },
  { name: "Cal Hockley", status: "Declined", relationship: "Bride's Former Fiancé" },
  { name: "Captain Smith", status: "Pending", relationship: "Groom's Colleague" },
  { name: "Fabrizio De Rossi", status: "Attending", relationship: "Groom's Friend" },
  { name: "Trudy Bolt", status: "Pending", relationship: "Bride's Family" },
];

function statusBadgeClass(status) {
  if (status === "Attending") return "bg-emerald-100 text-emerald-700";
  if (status === "Declined") return "bg-red-100 text-red-600";
  return "bg-amber-100 text-amber-700";
}

export default function RSVPSection() {
  const [guests, setGuests] = useState(initialGuests);
  const [submitted, setSubmitted] = useState(false);
  const [summary, setSummary] = useState(null);

  const [name, setName] = useState("");
  const [relationship, setRelationship] = useState("");
  const [attendance, setAttendance] = useState("Attending");
  const [meal, setMeal] = useState("Chicken");
  const [isBringingGuest, setIsBringingGuest] = useState(false);
  const [guestName, setGuestName] = useState("");
  const [guestRelationship, setGuestRelationship] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const confirmedCount = useMemo(
    () => guests.filter((g) => g.status === "Attending").length,
    [guests]
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");

    if (!name.trim()) {
      setError("Full name is required.");
      return;
    }

    if (isBringingGuest && !guestName.trim()) {
      setError("Please provide your guest's name.");
      return;
    }

    const status = attendance === "Declined" ? "Declined" : "Attending";

    setGuests((prev) => {
      const next = [
        ...prev,
        { name: name.trim(), status, relationship: relationship || "Not specified" },
      ];
      if (isBringingGuest && guestName.trim() && status === "Attending") {
        next.push({
          name: guestName.trim(),
          status: "Attending",
          relationship: guestRelationship || "Not specified",
        });
      }
      return next;
    });

    setSummary({
      name: name.trim(),
      relationship,
      attendance,
      meal: attendance === "Declined" ? "N/A" : meal,
      isBringingGuest,
      guestName: isBringingGuest ? guestName.trim() : "",
      guestRelationship: isBringingGuest ? guestRelationship : "",
      message,
    });
    setSubmitted(true);
  };

  return (
    <section
      id="rsvp"
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat px-4 py-24 md:py-0"
      style={{ backgroundImage: "url('/src/assets/floral-bg.png')" }}
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 md:grid-cols-2">
        <FadeInSection delay={100}>
          <div className="mx-4 rounded-3xl bg-[#FAF7F2] p-8 shadow-2xl md:mx-0">
            <FadeInSection delay={0}>
              <p className="font-sans text-xs font-medium uppercase tracking-[0.3em] text-[#2C4A52]">
                Guest List
              </p>
            </FadeInSection>
            <FadeInSection delay={100}>
              <div className="mt-6 text-center">
                <p className="font-serif text-5xl font-semibold text-amber-700">{confirmedCount}</p>
                <p className="mt-1 font-sans text-xs uppercase tracking-widest text-slate-600">
                  Confirmed Attending
                </p>
              </div>
            </FadeInSection>
            <ul className="mt-8 max-h-96 space-y-3 overflow-y-auto pr-1">
              {guests.map((guest, index) => (
                <FadeInSection
                  key={`${index}-${guest.name}`}
                  delay={index * 60}
                  as="li"
                  className="flex items-center justify-between gap-3 border-b border-amber-200/60 pb-3 last:border-0"
                >
                  <div>
                    <p className="font-sans text-sm text-[#2D2D2D]">{guest.name}</p>
                    <p className="text-xs italic text-slate-400">{guest.relationship}</p>
                  </div>
                  <span
                    className={`shrink-0 rounded-full px-3 py-0.5 font-sans text-xs ${statusBadgeClass(
                      guest.status
                    )}`}
                  >
                    {guest.status}
                  </span>
                </FadeInSection>
              ))}
            </ul>
          </div>
        </FadeInSection>

        <FadeInSection delay={150}>
          <div className="mx-4 rounded-3xl bg-[#FAF7F2] p-8 shadow-2xl md:mx-0">
            {!submitted ? (
              <form onSubmit={handleSubmit}>
                <FadeInSection delay={0}>
                  <header className="text-center">
                    <p className="font-sans text-xs tracking-widest uppercase text-[#2C4A52]">
                      JACK &amp; ROSE
                    </p>
                    <h2 className="mt-1 font-serif text-3xl text-slate-900">Wedding RSVP</h2>
                    <p className="mt-1 font-serif text-lg italic text-amber-700">
                      You&apos;re invited
                    </p>
                    <div className="mx-auto mt-4 max-w-xs border-b border-amber-200" />
                    <p className="mt-6 font-sans text-xs text-[#2D2D2D]/70">
                      PLEASE CONFIRM BY APRIL 10, 2026
                    </p>
                  </header>
                </FadeInSection>

                {error && (
                  <p className="mt-6 rounded-lg border border-red-200 bg-red-50 px-4 py-2 font-sans text-sm text-red-700">
                    {error}
                  </p>
                )}

                <div className="mt-8 space-y-6">
                  <FadeInSection delay={100}>
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6">
                      <div className="md:col-span-2">
                        <label className="mb-2 block font-sans text-xs uppercase tracking-widest text-slate-700">
                          Relationship to Couple
                        </label>
                        <select
                          value={relationship}
                          onChange={(e) => setRelationship(e.target.value)}
                          className="w-full border-b-2 border-slate-300 bg-transparent py-2 font-sans text-sm text-slate-800 outline-none focus:border-amber-600"
                        >
                          <option value="">Select your relationship...</option>
                          {relationshipOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="mb-2 block font-sans text-xs uppercase tracking-widest text-slate-700">
                          Full Name
                        </label>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Juan dela Cruz"
                          className="w-full border-b-2 border-slate-300 bg-transparent py-2 font-sans text-sm text-slate-900 outline-none transition-colors placeholder:italic placeholder:text-slate-400 focus:border-amber-600"
                        />
                      </div>

                    </div>
                  </FadeInSection>

                  <FadeInSection delay={200}>
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2">
                      <div>
                        <label className="mb-2 block font-sans text-xs uppercase tracking-widest text-slate-700">
                          Will You Attend?
                        </label>
                        <div className="flex flex-wrap gap-3">
                          {["Attending", "Declined"].map((option) => (
                            <button
                              key={option}
                              type="button"
                              onClick={() => setAttendance(option)}
                              className={`min-h-[44px] rounded-full px-6 py-3 font-sans text-xs uppercase tracking-widest transition-all ${
                                attendance === option
                                  ? "border border-[#2D2D2D] bg-[#2D2D2D] text-white"
                                  : "border border-slate-400 text-[#2D2D2D] hover:bg-white/60"
                              }`}
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="mb-2 block font-sans text-xs uppercase tracking-widest text-slate-700">
                          Meal Preference
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {mealOptions.map((option) => (
                            <button
                              key={option}
                              type="button"
                              onClick={() => setMeal(option)}
                              disabled={attendance === "Declined"}
                              className={`min-h-[44px] rounded-full border px-5 py-2 font-sans text-xs uppercase tracking-widest transition-all disabled:cursor-not-allowed disabled:opacity-50 ${
                                meal === option
                                  ? "border-amber-700 bg-amber-700 text-white"
                                  : "border-slate-400 text-[#2D2D2D] hover:bg-white/40"
                              }`}
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </FadeInSection>

                  <FadeInSection delay={300}>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-x-8">
                      <div>
                        <label className="mb-2 block font-sans text-xs uppercase tracking-widest text-slate-700">
                          Bringing a Guest?
                        </label>
                        <button
                          type="button"
                          aria-pressed={isBringingGuest}
                          onClick={() => {
                            const next = !isBringingGuest;
                            setIsBringingGuest(next);
                            if (!next) {
                              setGuestName("");
                              setGuestRelationship("");
                            }
                          }}
                          className={`relative h-8 w-14 rounded-full transition-colors ${
                            isBringingGuest ? "bg-amber-600" : "bg-slate-300"
                          }`}
                        >
                          <span
                            className={`absolute top-1 h-6 w-6 rounded-full bg-white transition-all ${
                              isBringingGuest ? "translate-x-7" : "translate-x-1"
                            }`}
                          />
                        </button>

                        <div
                          className={`mt-4 overflow-hidden transition-all ${
                            isBringingGuest ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
                          }`}
                        >
                          <label className="block">
                            <span className="mb-2 block font-sans text-xs uppercase tracking-widest text-slate-700">
                              Guest&apos;s Name
                            </span>
                            <input
                              type="text"
                              value={guestName}
                              onChange={(e) => setGuestName(e.target.value)}
                              placeholder="e.g. Maria Santos"
                              className="w-full border-b-2 border-slate-300 bg-transparent py-2 font-sans text-sm text-slate-900 outline-none placeholder:italic focus:border-amber-600"
                            />
                          </label>
                          <label className="mt-4 block">
                            <span className="mb-2 block font-sans text-xs uppercase tracking-widest text-slate-700">
                              Guest&apos;s Relationship to Couple
                            </span>
                            <select
                              value={guestRelationship}
                              onChange={(e) => setGuestRelationship(e.target.value)}
                              className="w-full border-b-2 border-slate-300 bg-transparent py-2 font-sans text-sm text-slate-800 outline-none focus:border-amber-600"
                            >
                              <option value="">Select your relationship...</option>
                              {relationshipOptions.map((option) => (
                                <option key={option} value={option}>
                                  {option}
                                </option>
                              ))}
                            </select>
                          </label>
                        </div>
                      </div>

                      <div>
                        <label className="mb-2 block font-sans text-xs uppercase tracking-widest text-slate-700">
                          Message to the Couple
                        </label>
                        <textarea
                          rows={3}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Write a short note to the couple..."
                          className="w-full resize-none border-b-2 border-slate-300 bg-transparent font-sans text-sm text-slate-900 outline-none placeholder:italic focus:border-amber-600"
                        />
                      </div>
                    </div>
                  </FadeInSection>

                  <FadeInSection delay={400}>
                    <button
                      type="submit"
                      className="w-full rounded-full bg-[#2D2D2D] py-3 font-sans text-xs uppercase tracking-widest text-white transition hover:bg-[#1a1a1a]"
                    >
                      Submit RSVP
                    </button>
                  </FadeInSection>
                </div>
              </form>
            ) : (
              <div className="text-center">
                <p className="font-serif text-4xl text-[#B8860B]">✓</p>
                <h3 className="mt-4 font-serif text-3xl text-[#2D2D2D]">You&apos;re all set!</h3>
                <Countdown valueClassName="text-slate-800" labelClassName="text-slate-500" />
                <p className="mt-6 font-sans text-sm leading-relaxed text-[#2D2D2D]/80">
                  Thank you, <span className="font-medium">{summary.name}</span>. We recorded your
                  response as <span className="font-medium">{summary.attendance}</span>
                  {summary.attendance === "Attending" && (
                    <>
                      {" "}
                      with a meal preference of <span className="font-medium">{summary.meal}</span>
                    </>
                  )}
                  .
                  {summary.isBringingGuest && summary.guestName && summary.attendance === "Attending" && (
                    <span>
                      {" "}
                      We look forward to seeing you and {summary.guestName}.
                    </span>
                  )}
                </p>
              </div>
            )}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
