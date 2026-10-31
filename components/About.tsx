"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FadeIn } from "@/components/ui/fade-in";

const identities = [
  {
    icon: "⌘",
    label: "software engineer",
    blurb:
      "have always been interested in how tech develops, and with AI, i've been larping & learning more than i would in school. right now, i'm just going through school while continuing to build my summer project!",
  },
  {
    icon: "☕",
    label: "still a sophomore",
    blurb:
      "Sophomore Software Engineering Student from SMU. enjoying the last stretch of my student life and making the best out of university!",
  },
];

export default function About() {
  const [active, setActive] = useState(0);

  return (
    <section id="about" className="py-28 bg-paper">
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn>
          <p className="font-mono text-xs tracking-widest uppercase text-cobalt mb-3">
            01 — ABOUT
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl text-ink mb-8">
            just an excuse to yap about myself
          </h2>
        </FadeIn>

        <FadeIn delay={0.1} className="flex flex-wrap gap-3 mb-8">
          {identities.map((idn, i) => (
            <button
              key={idn.label}
              onClick={() => setActive(i)}
              className={`inline-flex items-center gap-2 min-h-[44px] rounded-full border-2 border-ink px-4 py-2 font-mono text-sm press ${
                active === i
                  ? "bg-ink text-paper shadow-[3px_3px_0_0_#2F5FFF]"
                  : "bg-paper text-ink hover:bg-paper-dim"
              }`}
            >
              <span>{idn.icon}</span>
              {idn.label}
            </button>
          ))}
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="rounded-2xl border-2 border-ink bg-paper-dim p-8 shadow-[6px_6px_0_0_#17181C]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.2, ease: [0.23, 1, 0.32, 1] } }}
                exit={{ opacity: 0, transition: { duration: 0.12 } }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg border-2 border-ink bg-cobalt text-paper">
                    {identities[active].icon}
                  </span>
                  <h3 className="font-heading text-2xl text-ink">
                    {identities[active].label}
                  </h3>
                </div>
                <p className="text-ink-soft leading-relaxed">
                  {identities[active].blurb}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
