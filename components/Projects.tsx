"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Project = {
  title: string;
  meta: string;
  description: string;
  tags: string[];
  links: { label: string; href: string }[];
};

const projects: Project[] = [
  {
    title: "FinFlow",
    meta: "co-builder · Apr 2026 — present",
    description:
      "AI-powered fintech platform — upload a bank statement (PDF/CSV) and Claude parses and categorises every transaction. Double-entry ledger and a payment state machine modelled on the accounting primitives Stripe and PayPal use.",
    tags: ["Vue.js 3", "FastAPI", "Claude API", "Supabase", "Pandas"],
    links: [{ label: "github ↗", href: "https://github.com/zacharyzai/FinFlow" }],
  },
  {
    title: "SimplifyNext IGNITE",
    meta: "team leader · semi-finalist, 80/440 teams",
    description:
      "Agentic cash-flow copilot for Singapore gig workers. Built the LangGraph orchestration graph, FastAPI backend, and shared state schema for a multi-agent forecasting tool, with AWS Bedrock (Claude Haiku) as the model layer.",
    tags: ["LangGraph", "FastAPI", "AWS Bedrock", "Multi-agent"],
    links: [{ label: "github ↗", href: "https://github.com/zacharyzai/SimplifyNext-4NUS1SMU-" }],
  },
  {
    title: "TikTok TechJam",
    meta: "platform lead · agent launchpad middleware",
    description:
      "Led identity and access control for a 3-person team — per-agent tokens, backend permission checks, instant revoke/reissue, and a real-time audit log that caught blocked prompt-injection attempts.",
    tags: ["React", "TypeScript", "Fastify", "Node.js"],
    links: [{ label: "github ↗", href: "https://github.com/zacharyzai/Tiktok-Hackathon-Jam" }],
  },
];

const placeholderCount = 2;

function FadeIn({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 bg-invert">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <p className="font-mono text-xs tracking-widest uppercase text-cobalt mb-3">
            04 — PROJECTS
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl text-paper mb-14">
            things i&apos;ve built
          </h2>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border-2 border-invert-border bg-invert-card p-6 hover:border-cobalt transition-colors">
                <h3 className="font-heading text-xl text-paper">{p.title}</h3>
                <p className="font-mono text-[11px] text-cobalt mt-1 mb-4">{p.meta}</p>
                <p className="text-sm text-paper/70 leading-relaxed mb-5">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[11px] font-mono text-paper/70 border border-invert-border rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {p.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs text-paper/60 hover:text-cobalt transition-colors"
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}

          {Array.from({ length: placeholderCount }).map((_, i) => (
            <FadeIn key={`placeholder-${i}`} delay={(projects.length + i) * 0.08}>
              <div className="h-full flex items-center justify-center rounded-2xl border-2 border-dashed border-invert-border p-6 text-center min-h-[220px]">
                <p className="font-mono text-xs text-paper/40">
                  next project incoming ⌄
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="mt-10 text-center">
            <a
              href="https://github.com/zacharyzai"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm text-paper/50 hover:text-cobalt transition-colors"
            >
              more on github ↗
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
