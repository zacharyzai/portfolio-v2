"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  SiJavascript, SiPython, SiVuedotjs, SiTailwindcss, SiHtml5,
  SiNodedotjs, SiExpress, SiFastapi, SiPandas,
  SiPostgresql, SiMongodb, SiSupabase,
  SiGit, SiGithubactions, SiVercel,
} from "react-icons/si";
import { LogoLoop, type LogoItem } from "@/components/ui/logo-loop";

type IconComponent = React.ComponentType<{ size?: number; className?: string }>;

type SkillItem = {
  name: string;
  icon?: IconComponent | null;
};

const skillGroups: { category: string; skills: SkillItem[] }[] = [
  {
    category: "Languages",
    skills: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "Python", icon: SiPython },
      { name: "SQL", icon: null },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "Vue.js 3", icon: SiVuedotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "HTML / CSS", icon: SiHtml5 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "FastAPI", icon: SiFastapi },
      { name: "Pandas", icon: SiPandas },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Supabase", icon: SiSupabase },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub Actions", icon: SiGithubactions },
      { name: "Vercel", icon: SiVercel },
    ],
  },
  {
    category: "Currently Learning",
    skills: [
      { name: "Claude API", icon: null },
      { name: "Supabase RLS", icon: null },
      { name: "pdfplumber", icon: null },
    ],
  },
];

const accentMap: Record<string, string> = {
  Languages: "bg-violet-950/50 text-violet-300 border-violet-800/50",
  Frontend: "bg-blue-950/50 text-blue-300 border-blue-800/50",
  Backend: "bg-emerald-950/50 text-emerald-300 border-emerald-800/50",
  Database: "bg-amber-950/50 text-amber-300 border-amber-800/50",
  "Tools & Platforms": "bg-slate-800 text-slate-300 border-slate-700",
  "Currently Learning": "bg-pink-950/50 text-pink-300 border-pink-800/50",
};

const logoItems: LogoItem[] = [
  { node: <SiJavascript className="text-yellow-400" />, title: "JavaScript" },
  { node: <SiPython className="text-sky-400" />, title: "Python" },
  { node: <SiVuedotjs className="text-emerald-400" />, title: "Vue.js 3" },
  { node: <SiTailwindcss className="text-cyan-400" />, title: "Tailwind CSS" },
  { node: <SiHtml5 className="text-orange-400" />, title: "HTML / CSS" },
  { node: <SiNodedotjs className="text-green-400" />, title: "Node.js" },
  { node: <SiExpress className="text-slate-300" />, title: "Express.js" },
  { node: <SiFastapi className="text-teal-400" />, title: "FastAPI" },
  { node: <SiPandas className="text-purple-400" />, title: "Pandas" },
  { node: <SiPostgresql className="text-blue-400" />, title: "PostgreSQL" },
  { node: <SiMongodb className="text-green-500" />, title: "MongoDB" },
  { node: <SiSupabase className="text-emerald-400" />, title: "Supabase" },
  { node: <SiGit className="text-orange-500" />, title: "Git" },
  { node: <SiGithubactions className="text-slate-300" />, title: "GitHub Actions" },
  { node: <SiVercel className="text-slate-200" />, title: "Vercel" },
];

function SkillCard({
  group,
  groupIndex,
}: {
  group: (typeof skillGroups)[0];
  groupIndex: number;
}) {
  const ref = useRef(null);
  const groupInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={groupInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: groupIndex * 0.08, ease: "easeOut" }}
      className="bg-slate-900 rounded-2xl border border-slate-800 p-6 hover:border-slate-700 transition-colors"
    >
      <h3 className="text-xs font-semibold tracking-widest uppercase text-slate-500 mb-4">
        {group.category}
      </h3>
      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill, skillIndex) => (
          <motion.span
            key={skill.name}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={groupInView ? { opacity: 1, scale: 1 } : {}}
            transition={{
              duration: 0.3,
              delay: groupIndex * 0.08 + skillIndex * 0.04,
            }}
            className={`px-3 py-1 text-xs font-medium rounded-full border flex items-center gap-1.5 ${accentMap[group.category]}`}
          >
            {skill.icon && <skill.icon size={11} />}
            {skill.name}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const titleRef = useRef(null);
  const inView = useInView(titleRef, { once: true, margin: "-60px" });

  return (
    <section id="skills" className="py-28 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-indigo-400 mb-3 block">
            Toolkit
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Skills
          </h2>
        </motion.div>
      </div>

      {/* Full-width scrolling logo ticker */}
      <div className="relative overflow-hidden mb-12" style={{ height: "44px" }}>
        <LogoLoop
          logos={logoItems}
          speed={55}
          direction="left"
          logoHeight={28}
          gap={52}
          hoverSpeed={15}
          fadeOut
          fadeOutColor="#0f172a"
          ariaLabel="Technologies I work with"
        />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, groupIndex) => (
            <SkillCard key={group.category} group={group} groupIndex={groupIndex} />
          ))}
        </div>
      </div>
    </section>
  );
}
