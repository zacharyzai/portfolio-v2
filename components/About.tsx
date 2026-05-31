"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Lightbulb, Users, Coffee } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    label: "Clean Code",
    description: "I care about readability and maintainability as much as function.",
  },
  {
    icon: Lightbulb,
    label: "Problem Solver",
    description: "I enjoy untangling complex systems and finding elegant solutions.",
  },
  {
    icon: Users,
    label: "Team Player",
    description: "Collaboration is core to how I build — always open to feedback.",
  },
  {
    icon: Coffee,
    label: "Perpetual Learner",
    description: "Always exploring new technologies, frameworks, and ideas.",
  },
];

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
  const inView = useInView(ref, { once: true, margin: "-80px" });
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

export default function About() {
  return (
    <section id="about" className="py-28 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <FadeIn>
              <span className="text-xs font-semibold tracking-widest uppercase text-indigo-400 mb-3 block">
                About me
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6">
                Hey, I&apos;m{" "}
                <span className="text-indigo-400">Zachary Zai</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-slate-400 text-base leading-relaxed mb-4">
                I&apos;m a Year 2 Software Engineering student at Singapore Management
                University (SMU), passionate about building software that is
                both technically sound and genuinely useful.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-slate-400 text-base leading-relaxed mb-4">
                My journey started with curiosity about how things on the
                internet worked — and evolved into a deep interest in full-stack
                development, system design, and developer tooling. I love
                working at the intersection of design and engineering.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <p className="text-slate-400 text-base leading-relaxed mb-8">
                Outside of code, you&apos;ll find me exploring new cafes, playing
                badminton, or going down late-night rabbit holes on things I
                have no business learning yet.
              </p>
            </FadeIn>
            <FadeIn delay={0.5}>
              <div className="flex flex-wrap gap-3">
                {["SMU", "Singapore", "Y2 SE", "Full Stack", "Open to Internships"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm text-slate-300 bg-slate-800 border border-slate-700 rounded-full"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </FadeIn>
          </div>

          {/* Highlights grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((h, i) => (
              <FadeIn key={h.label} delay={0.1 * i}>
                <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900 hover:border-indigo-500/40 hover:bg-slate-800/60 transition-all group">
                  <div className="mb-3 inline-flex p-2 bg-slate-800 rounded-xl border border-slate-700 group-hover:border-indigo-500/40 transition-colors">
                    <h.icon size={18} className="text-indigo-400" />
                  </div>
                  <h3 className="text-sm font-semibold text-slate-100 mb-1">
                    {h.label}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {h.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
