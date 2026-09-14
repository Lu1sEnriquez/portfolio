import type { ReactNode } from "react";

export function Dock({ children }: { children: ReactNode }) {
  return <nav className="magic-dock" aria-label="Accesos rápidos">{children}</nav>;
}

export function DockIcon({ href, label, children }: { href: string; label: string; children: ReactNode }) {
  const isExternal = href.startsWith("http");
  return (
    <a
      className="magic-dock-icon"
      href={href}
      aria-label={label}
      title={label}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  );
}
