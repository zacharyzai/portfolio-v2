"use client";

import { motion, type Variants } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/zacharyzai",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/zachary-zai-12b2a6392/",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:zachary2309zz@gmail.com",
    icon: Mail,
  },
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-transparent">
      {/* Radial gradient vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(99,102,241,0.12),transparent)]" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
      >
        {/* Badge */}
        <motion.div variants={item} className="mb-6 flex justify-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium text-indigo-300 bg-indigo-900/30 border border-indigo-800/60 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            Open to opportunities &middot; Singapore
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={item}
          className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tighter text-white mb-4"
        >
          {"Zachary Zai".split("").map((letter, i) => (
            <motion.span
              key={i}
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.4 + i * 0.03,
                type: "spring",
                stiffness: 180,
                damping: 22,
              }}
              className="inline-block"
            >
              {letter === " " ? " " : letter}
            </motion.span>
          ))}
        </motion.h1>

        {/* Role */}
        <motion.p
          variants={item}
          className="text-lg sm:text-xl font-medium text-indigo-400 mb-4 tracking-wide"
        >
          Software Engineering &middot; Y2 @ SMU
        </motion.p>

        {/* Tagline */}
        <motion.p
          variants={item}
          className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed"
        >
          I build thoughtful digital experiences &mdash; from clean interfaces
          to robust backend systems. Passionate about writing code that solves
          real problems.
        </motion.p>

        {/* CTA */}
        <motion.div
          variants={item}
          className="flex items-center justify-center mb-12"
        >
          <a
            href="#about"
            className="px-8 py-3 bg-white/5 text-white text-sm font-semibold rounded-lg border border-white/10 hover:bg-white/10 hover:border-indigo-500/50 transition-all hover:-translate-y-0.5 backdrop-blur-sm"
          >
            Scroll to Explore
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          variants={item}
          className="flex items-center justify-center gap-4"
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="p-2 text-slate-500 hover:text-indigo-400 hover:bg-white/5 rounded-lg transition-all"
            >
              <link.icon size={20} />
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-600"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}
