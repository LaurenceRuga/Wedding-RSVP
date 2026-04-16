export default function WeddingMap() {
  const googleMapsEmbedUrl =
    "https://www.google.com/maps?q=Grand+Ballroom,+RMS+Titanic,+Southampton&output=embed";
  const googleMapsDirectionsUrl =
    "https://www.google.com/maps/search/?api=1&query=Grand+Ballroom,+RMS+Titanic,+Southampton";

  return (
    <div className="relative h-80 min-h-[20rem] w-full md:h-full md:min-h-[22rem]">
      <div className="h-full w-full overflow-hidden rounded-[12px] border-2 border-[#c9a84c] shadow-[0_4px_20px_rgba(0,0,0,0.15)]">
        <iframe
          title="Google Map to Grand Ballroom, RMS Titanic"
          src={googleMapsEmbedUrl}
          className="h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>

      <a
        href={googleMapsDirectionsUrl}
        target="_blank"
        rel="noreferrer"
        className="absolute bottom-4 right-4 rounded-full bg-white px-4 py-2 font-sans text-xs font-semibold uppercase tracking-wide text-slate-800 shadow-md transition hover:bg-slate-100"
      >
        Open in Google Maps
      </a>
    </div>
  );
}
