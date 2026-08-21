import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Luis — Desarrollador Full Stack",
  description: "Productos web claros, rápidos y memorables.",
  openGraph: {
    title: "Luis — Desarrollador Full Stack",
    description: "Productos web claros, rápidos y memorables.",
    type: "website",
    locale: "es_MX",
    images: [{ url: "/og.png", width: 1731, height: 909, alt: "Portafolio de Luis" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luis — Desarrollador Full Stack",
    description: "Productos web claros, rápidos y memorables.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
