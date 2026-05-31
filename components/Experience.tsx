"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Independent Side Projects",
    company: "Self-directed",
    period: "2026 – Present",
    location: "Singapore",
    description: [
      "Building FinFlow — an AI-powered personal finance platform using FastAPI, Vue.js 3, and the Anthropic Claude API.",
      "Studying full-stack development, system design, and AI integrations independently ahead of formal coursework.",
      "Exploring fintech engineering concepts: double-entry ledgering, payment state machines, and financial health scoring.",
    ],
    tags: ["FastAPI", "Vue.js 3", "Claude AI", "Python", "Supabase"],
  },
  {
    type: "education",
    title: "B.Sc. Information Systems (Software Engineering)",
    company: "Singapore Management University",
    period: "2025 – 2029",
    location: "Singapore",
    description: [
      "Relevant coursework: Data Structures & Algorithms, Software Engineering, Database Management, Web Application Development.",
      "Achieved A- in IS113 Web Application Development (group project: Campus Event Board).",
    ],
    tags: ["SMU", "Software Engineering"],
  },
  {
    type: "work",
    title: "Tuition Teacher",
    company: "Self-employed",
    period: "2025 – Present",
    location: "Singapore",
    description: [
      "Conducts private tuition sessions for secondary school students as a part-time side hustle.",
      "Adapts teaching approaches to individual learning styles and paces to improve student outcomes.",
    ],
    tags: ["Teaching", "Communication", "Mentorship"],
  },
  {
    type: "work",
    title: "Secretary",
    company: "CCA — Junior College",
    period: "2021 – 2022",
    location: "Singapore",
    description: [
      "Managed administrative responsibilities and communications on behalf of the co-curricular activity.",
      "Coordinated scheduling, documentation, and event planning within the committee.",
    ],
    tags: ["Leadership", "Organisation", "Communication"],
  },
];

function TimelineItem({
  exp,
  index,
}: {
  exp: (typeof experiences)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const isWork = exp.type === "work";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -24 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.12, ease: "easeOut" }}
      className="relative pl-10"
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-1 flex items-center justify-center w-7 h-7 rounded-full bg-slate-900 border-2 border-indigo-700/60 shadow-sm shadow-indigo-900/30">
        {isWork ? (
          <Briefcase size={12} className="text-indigo-400" />
        ) : (
          <GraduationCap size={12} className="text-indigo-400" />
        )}
      </div>

      <div className="pb-10">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
          <div>
            <h3 className="text-base font-semibold text-slate-100">
              {exp.title}
            </h3>
            <p className="text-sm text-indigo-400 font-medium">{exp.company}</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-slate-500 font-medium">{exp.period}</p>
            <p className="text-xs text-slate-600">{exp.location}</p>
          </div>
        </div>

        <ul className="mt-3 space-y-1.5">
          {exp.description.map((point, i) => (
            <li key={i} className="flex gap-2 text-sm text-slate-400">
              <span className="mt-1.5 flex-shrink-0 w-1 h-1 rounded-full bg-slate-600" />
              {point}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5 mt-4">
          {exp.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-xs font-medium text-slate-300 bg-slate-800 border border-slate-700 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const titleRef = useRef(null);
  const inView = useInView(titleRef, { once: true, margin: "-60px" });

  return (
    <section id="experience" className="py-28 bg-slate-950">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-indigo-400 mb-3 block">
            Journey
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Experience
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l-2 border-slate-800 ml-3.5">
          {experiences.map((exp, i) => (
            <TimelineItem key={exp.title} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
