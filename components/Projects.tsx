"use client";

import { FadeIn } from "@/components/ui/fade-in";

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
  {
    title: "Ah Ma Ah Gong Can",
    meta: "IS216 Web App Development 2 · completed",
    description:
      "Snap a medicine label or medical bill and get a plain-language explanation in English, 中文, Bahasa Melayu or தமிழ், read aloud. Built for elderly Singaporeans and their caregivers, with subsidy estimates (Pioneer, Merdeka, CHAS) and on-device redaction of personal details.",
    tags: ["Vue 3", "Express", "MongoDB", "Gemini"],
    links: [
      { label: "github ↗", href: "https://github.com/zacharyzai/wad2-proj" },
      { label: "live ↗", href: "https://ahma-ahgong-can.vercel.app" },
    ],
  },
  {
    title: "GradeZZY",
    meta: "CS102 · co-builder, 6-person team",
    description:
      "Desktop app that auto-marks Java lab tests: unpacks student zips, fixes common submission mistakes, compiles and runs testers with time limits, then fills the eLearn score sheet. Built the execution layer — tester install, compile, tester runs with timeouts, and score parsing.",
    tags: ["Java 25", "JavaFX", "SQLite"],
    links: [{ label: "github ↗", href: "https://github.com/damienlaww/GradeZZY" }],
  },
];

const placeholderCount = 1;

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
            <FadeIn key={p.title} delay={Math.min(i, 3) * 0.05}>
              <div className="h-full rounded-2xl border-2 border-invert-border bg-invert-card p-6 transition-[transform,border-color] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-cobalt [@media(hover:hover)_and_(pointer:fine)]:hover:-translate-y-1">
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
            <FadeIn key={`placeholder-${i}`} delay={Math.min(projects.length + i, 3) * 0.05}>
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
