"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ToolDock, ToolDockTile, type ToolDockItem } from "@/components/ui/techstack";

/** A brand logo from svgl.app rendered on a dock tile. */
function logo(
  label: string,
  file: string,
  tile: string,
  { fit = "size-[54%]", tone = "" } = {}
): ToolDockItem {
  return {
    label,
    icon: (
      <ToolDockTile className={tile}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://svgl.app/library/${file}.svg`}
          alt=""
          draggable={false}
          className={`${fit} object-contain ${tone}`}
        />
      </ToolDockTile>
    ),
  };
}

const languages: ToolDockItem[] = [
  logo("HTML", "html5", "bg-white"),
  logo("CSS", "css", "bg-white"),
  logo("JavaScript", "javascript", "bg-white", { fit: "size-[68%]" }),
  logo("Python", "python", "bg-white"),
  logo("Java", "java", "bg-white"),
];

const frameworks: ToolDockItem[] = [
  logo("Claude Code", "claude-ai-icon", "bg-[#d76f4d]", {
    fit: "size-[58%]",
    tone: "brightness-0 invert",
  }),
  logo("VS Code", "vscode", "bg-white"),
  logo("Git", "git", "bg-white"),
  logo("GitHub", "github_dark", "bg-[#0d1117]"),
  logo("Node.js", "nodejs", "bg-[#222]"),
  logo("Vue.js", "vue", "bg-white"),
  logo("Bootstrap", "bootstrap", "bg-white"),
  logo("FastAPI", "fastapi", "bg-white"),
  logo("MongoDB", "mongodb-icon-dark", "bg-white"),
  logo("PostgreSQL", "postgresql", "bg-white"),
  logo("Supabase", "supabase", "bg-[#171717]"),
  logo("AWS", "aws_dark", "bg-[#232f3e]", { fit: "size-[62%]" }),
];

export default function Stack() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="stack" className="py-28 bg-paper">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="font-mono text-xs tracking-widest uppercase text-cobalt mb-3">
            02 — STACK
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl text-ink mb-3">
            tools i reach for
          </h2>
          <p className="text-ink-soft mb-8">
            hover to see the magic ✨
          </p>
          <div className="rounded-3xl border-2 border-ink bg-paper-dim px-6 py-6 shadow-[6px_6px_0_0_#17181C]">
            <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6">
              <p className="w-full flex-shrink-0 font-mono text-xs tracking-widest uppercase text-ink-soft sm:w-16">
                languages
              </p>
              <ToolDock items={languages} label="Languages" className="justify-start" />
            </div>

            <div className="mt-6 flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6">
              <p className="w-full flex-shrink-0 font-mono text-xs tracking-widest uppercase text-ink-soft sm:w-16">
                frameworks &amp; tools
              </p>
              <ToolDock items={frameworks} label="Frameworks and tools" className="justify-start" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
