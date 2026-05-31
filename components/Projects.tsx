"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";

type Project = {
  title: string;
  description: string;
  tags: string[];
  github: string;
  live: string | null;
  featured: boolean;
  ongoing?: boolean;
  grade?: string;
  gradient: string;
  accent: string;
};

const projects: Project[] = [
  {
    title: "FinFlow",
    description:
      "AI-powered personal finance platform for Singapore users. Upload a DBS, OCBC, or UOB bank statement and Claude AI categorises every transaction automatically. Includes a prescriptive daily budget engine, Financial Health Score (0–100), savings goal tracker, and a double-entry ledger with a nightly reconciliation job.",
    tags: ["Vue.js 3", "FastAPI", "Claude AI", "Supabase", "PostgreSQL", "Python"],
    github: "https://github.com/zacharyzai/finflow",
    live: null,
    featured: true,
    ongoing: true,
    gradient: "from-indigo-950/60 to-violet-950/60",
    accent: "border-indigo-800/50",
  },
  {
    title: "Campus Event Board",
    description:
      "Full-stack campus event management platform built with 5 groupmates for IS113 (WAD1). Students browse and RSVP to events, organizers manage their own listings, and admins control all users and events via a dashboard. MVC architecture with role-based access control and session-based auth.",
    tags: ["Express.js", "MongoDB", "Node.js", "EJS", "MVC", "bcrypt"],
    github: "https://github.com/zacharyzai/campus-event-board",
    live: null,
    featured: true,
    grade: "A-",
    gradient: "from-sky-950/60 to-cyan-950/60",
    accent: "border-sky-800/50",
  },
  {
    title: "Project Gamma",
    description:
      "Mobile-first expense tracker with smart categorisation using a lightweight ML model trained on personal spending patterns.",
    tags: ["React Native", "Expo", "Python", "scikit-learn"],
    github: "https://github.com/zacharyzai/project-gamma",
    live: null,
    featured: false,
    gradient: "from-emerald-950/60 to-teal-950/60",
    accent: "border-emerald-800/50",
  },
  {
    title: "Project Delta",
    description:
      "Real-time collaborative whiteboard built for hackathon teams, supporting up to 50 concurrent users with conflict-free merging.",
    tags: ["Socket.io", "React", "Node.js", "Redis"],
    github: "https://github.com/zacharyzai/project-delta",
    live: "https://delta.example.com",
    featured: false,
    gradient: "from-amber-950/60 to-orange-950/60",
    accent: "border-amber-800/50",
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1, ease: "easeOut" }}
      className={`group relative rounded-2xl bg-gradient-to-br ${project.gradient} border ${project.accent} p-6 hover:shadow-xl hover:shadow-black/30 transition-all duration-300 hover:-translate-y-1`}
    >
      <div className="absolute top-4 right-4 flex gap-1.5">
        {project.ongoing && (
          <span className="text-[10px] font-semibold tracking-widest uppercase text-emerald-400 bg-slate-900/80 px-2 py-0.5 rounded-full border border-emerald-800/60 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Ongoing
          </span>
        )}
        {project.grade && (
          <span className="text-[10px] font-semibold tracking-widest uppercase text-amber-400 bg-slate-900/80 px-2 py-0.5 rounded-full border border-amber-800/60">
            {project.grade}
          </span>
        )}
        {project.featured && (
          <span className="text-[10px] font-semibold tracking-widest uppercase text-indigo-400 bg-slate-900/80 px-2 py-0.5 rounded-full border border-indigo-800/60">
            Featured
          </span>
        )}
      </div>

      <h3 className="text-lg font-semibold text-white mb-2">
        {project.title}
      </h3>
      <p className="text-sm text-slate-400 leading-relaxed mb-4">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 text-xs font-medium text-slate-300 bg-slate-800/80 border border-slate-700/60 rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-white transition-colors"
        >
          <Github size={14} />
          Code
        </a>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            <ExternalLink size={14} />
            Live demo
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-60px" });

  return (
    <section id="projects" className="py-28 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-indigo-400 mb-3 block">
            Portfolio
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Things I&apos;ve built
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-center"
        >
          <a
            href="https://github.com/zacharyzai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-indigo-400 transition-colors"
          >
            <Github size={16} />
            See more on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
