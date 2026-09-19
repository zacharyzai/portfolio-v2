import type { Metadata } from "next";
import { Fraunces, Source_Serif_4, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Zachary Zai | Software Engineer",
  description:
    "Y2 Software Engineering student at SMU building agentic AI, fintech backends, and the occasional hackathon win.",
  openGraph: {
    title: "Zachary Zai | Software Engineer",
    description:
      "Y2 Software Engineering student at SMU building agentic AI, fintech backends, and the occasional hackathon win.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${fraunces.variable} ${sourceSerif.variable} ${jetbrainsMono.variable} font-sans antialiased bg-paper text-ink`}
      >
        {children}
      </body>
    </html>
  );
}
