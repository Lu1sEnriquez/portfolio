import type { HTMLAttributes, ReactNode } from "react";

export function BentoGrid({ className = "", ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={`magic-bento-grid ${className}`} {...props} />;
}

export function BentoCard({
  className = "",
  children,
  accent = "blue",
}: {
  className?: string;
  children: ReactNode;
  accent?: "blue" | "violet" | "cyan" | "amber";
}) {
  return <article className={`magic-bento-card magic-bento-${accent} ${className}`}>{children}</article>;
}
