import { useEffect, useState } from "react";

const dotStates = [".", "..", "..."];

const Preloader = () => {
  const [dotIndex, setDotIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDotIndex((prev) => (prev + 1) % dotStates.length);
    }, 380);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-slate-950">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(129,140,248,0.18)_0%,rgba(129,140,248,0.06)_28%,rgba(2,6,23,0)_62%)]" />

      <div className="relative h-44 w-44 sm:h-48 sm:w-48">
        <div className="spinSlow absolute inset-0 rounded-full border border-violet-400/50 ringPulse" />

        <div className="spinSlowReverse absolute inset-3 rounded-full border-2 border-violet-300/40 ringPulse [animation-delay:0.2s]" />

        <div className="spinMedium absolute inset-6 rounded-full border border-blue-400/45 ringPulse [animation-delay:0.35s]" />

        <div className="orbitCw absolute inset-0">
          <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-violet-300 shadow-[0_0_12px_rgba(129,140,248,0.8)]" />
        </div>

        <div className="orbitCcw absolute inset-3">
          <span className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-violet-200/90 shadow-[0_0_10px_rgba(196,181,253,0.7)]" />
        </div>

        <div className="orbitFast absolute inset-6">
          <span className="absolute bottom-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-blue-300/90 shadow-[0_0_10px_rgba(147,197,253,0.8)]" />
        </div>

        <div className="absolute inset-0 m-auto flex h-14 w-14 items-center justify-center rounded-full border border-violet-300/60 bg-violet-500/20 text-sm font-extrabold tracking-[0.18em] text-violet-100 coreGlow">
          SS
        </div>
      </div>

      <p className="relative mt-9 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-300/90">
        Preparing Portfolio{dotStates[dotIndex]}
      </p>
    </div>
  );
};

export default Preloader;
