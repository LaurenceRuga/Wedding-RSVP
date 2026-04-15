import { useEffect, useState } from "react";

const target = new Date("2026-04-24T19:00:00");

const getTimeLeft = () => {
  const now = new Date();
  const diff = target - now;

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / 1000 / 60) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

export default function Countdown({ valueClassName = "text-white", labelClassName = "text-white/60" }) {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mt-4 flex justify-center gap-6">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="text-center">
          <div className={`font-serif text-4xl font-bold ${valueClassName}`}>
            {String(value).padStart(2, "0")}
          </div>
          <div className={`mt-1 font-sans text-xs uppercase tracking-widest ${labelClassName}`}>{unit}</div>
        </div>
      ))}
    </div>
  );
}
