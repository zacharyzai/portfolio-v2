"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

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
              className="mt-6 inline-flex flex-shrink-0 items-center gap-2 rounded-full border-2 border-ink bg-ink px-5 py-2.5 font-mono text-sm text-paper transition-all hover:bg-cobalt hover:border-cobalt sm:mt-0"
            >
              say hi ↗
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
