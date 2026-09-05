export function Meteors({ number = 14 }: { number?: number }) {
  return (
    <div className="magic-meteors" aria-hidden="true">
      {Array.from({ length: number }).map((_, index) => (
        <span key={index} style={{ "--meteor-index": index } as React.CSSProperties} />
      ))}
    </div>
  );
}
