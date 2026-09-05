import type { ReactNode } from "react";

export function AuroraText({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <span className={`magic-aurora-text ${className}`}>{children}</span>;
}
