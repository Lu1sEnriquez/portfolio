import type { ReactNode } from "react";

export function Dock({ children }: { children: ReactNode }) {
  return <nav className="magic-dock" aria-label="Accesos rápidos">{children}</nav>;
}

export function DockIcon({ href, label, children }: { href: string; label: string; children: ReactNode }) {
  return <a className="magic-dock-icon" href={href} aria-label={label} title={label}>{children}</a>;
}
