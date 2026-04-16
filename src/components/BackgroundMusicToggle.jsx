import { useEffect, useRef, useState } from "react";

const AUDIO_SOURCE = "https://youtu.be/a7Zle7sdTTs?si=SrOcOTIgMoHQ67yt";

export default function BackgroundMusicToggle() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [needsInteraction, setNeedsInteraction] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return undefined;

    const syncPlayState = () => setIsPlaying(!audio.paused);
    const tryAutoplay = async () => {
      try {
        await audio.play();
        setNeedsInteraction(false);
        setIsPlaying(true);
      } catch {
        setNeedsInteraction(true);
        setIsPlaying(false);
      }
    };

    syncPlayState();
    tryAutoplay();

    const playOnInteraction = async () => {
      if (!needsInteraction) return;
      try {
        await audio.play();
        setNeedsInteraction(false);
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    };

    window.addEventListener("pointerdown", playOnInteraction, { once: false });
    window.addEventListener("keydown", playOnInteraction, { once: false });
    return () => {
      window.removeEventListener("pointerdown", playOnInteraction);
      window.removeEventListener("keydown", playOnInteraction);
    };
  }, [needsInteraction]);

  const togglePlayback = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
        setNeedsInteraction(false);
        setIsPlaying(true);
      } catch {
        setNeedsInteraction(true);
        setIsPlaying(false);
      }
      return;
    }

    audio.pause();
    setIsPlaying(false);
  };

  return (
    <>
      <audio ref={audioRef} src={AUDIO_SOURCE} autoPlay loop preload="auto" />
      <button
        type="button"
        onClick={togglePlayback}
        aria-label={isPlaying ? "Pause background music" : "Play background music"}
        title={isPlaying ? "Mute music" : "Play music"}
        className={`fixed bottom-6 right-6 z-[9999] flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#c9a84c] text-xl text-white shadow-[0_8px_20px_rgba(0,0,0,0.25)] transition hover:scale-105 ${
          isPlaying ? "animate-[pulse_2.2s_ease-in-out_infinite]" : ""
        }`}
      >
        {isPlaying ? "♪" : "♪̶"}
      </button>
    </>
  );
}
