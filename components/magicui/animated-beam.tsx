export function AnimatedBeam() {
  return (
    <svg className="magic-beam" viewBox="0 0 620 180" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="beam-gradient" x1="0" x2="1">
          <stop stopColor="#00e5ff" />
          <stop offset=".5" stopColor="#7c3aed" />
          <stop offset="1" stopColor="#ffb000" />
        </linearGradient>
      </defs>
      <path className="magic-beam-track" d="M48 90 C150 90 170 26 286 90 S440 154 572 90" />
      <path className="magic-beam-run" d="M48 90 C150 90 170 26 286 90 S440 154 572 90" />
      <circle cx="48" cy="90" r="9" />
      <circle cx="286" cy="90" r="9" />
      <circle cx="572" cy="90" r="9" />
    </svg>
  );
}
