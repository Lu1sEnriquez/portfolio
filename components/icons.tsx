type IconProps = { className?: string };

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function ArrowDownRightIcon({ className = "" }: IconProps) {
  return <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...base}><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>;
}

export function ArrowUpRightIcon({ className = "" }: IconProps) {
  return <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...base}><path d="M7 17 17 7" /><path d="M7 7h10v10" /></svg>;
}

export function ArrowUpIcon({ className = "" }: IconProps) {
  return <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...base}><path d="m6 11 6-6 6 6" /><path d="M12 19V5" /></svg>;
}

export function HomeIcon({ className = "" }: IconProps) {
  return <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...base}><path d="m4 10 8-7 8 7" /><path d="M6.5 9v11h11V9" /><path d="M10 20v-6h4v6" /></svg>;
}

export function GridIcon({ className = "" }: IconProps) {
  return <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...base}><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /></svg>;
}

export function TerminalIcon({ className = "" }: IconProps) {
  return <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...base}><rect x="3" y="4" width="18" height="16" rx="3" /><path d="m7 9 3 3-3 3" /><path d="M13 15h4" /></svg>;
}

export function MailIcon({ className = "" }: IconProps) {
  return <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...base}><rect x="3" y="5" width="18" height="14" rx="2.5" /><path d="m4 7 8 6 8-6" /></svg>;
}

export function LinkedInIcon({ className = "" }: IconProps) {
  return <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.065 2.065 0 1 1 0-4.13 2.065 2.065 0 0 1 0 4.13Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0Z" /></svg>;
}

export function GitHubIcon({ className = "" }: IconProps) {
  return <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M12 .297C5.37.297 0 5.67 0 12.3c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.334-1.756-1.334-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.123-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.12 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.806 5.624-5.48 5.92.43.37.814 1.103.814 2.222 0 1.606-.015 2.9-.015 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.597 24 12.3 24 5.67 18.627.297 12 .297Z" /></svg>;
}

export function CopyIcon({ className = "" }: IconProps) {
  return <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...base}><rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></svg>;
}

export function CheckIcon({ className = "" }: IconProps) {
  return <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...base}><path d="M20 6 9 17l-5-5" /></svg>;
}

export function FileTextIcon({ className = "" }: IconProps) {
  return <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...base}><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="M10 9H8" /><path d="M16 13H8" /><path d="M16 17H8" /></svg>;
}
