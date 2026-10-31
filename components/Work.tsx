"use client";

import { FadeIn } from "@/components/ui/fade-in";

export default function Work() {
  return (
    <section id="work" className="py-28 bg-paper">
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn>
          <p className="font-mono text-xs tracking-widest uppercase text-cobalt mb-3">
            03 — WORK
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl text-ink mb-8">
            gunning for summer 2027
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="rounded-2xl border-2 border-ink bg-paper-dim p-8 shadow-[6px_6px_0_0_#17181C] sm:flex sm:items-center sm:justify-between sm:gap-8">
            <p className="text-ink-soft leading-relaxed">
              i&apos;m currently in search for a Software Engineering
              Internship for Summer 2027. pls?
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex flex-shrink-0 items-center gap-2 rounded-full border-2 border-ink bg-ink px-5 py-2.5 font-mono text-sm text-paper press hover:bg-cobalt hover:border-cobalt sm:mt-0"
            >
              say hi ↗
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
