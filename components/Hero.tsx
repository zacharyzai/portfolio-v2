"use client";

import { motion, type Variants } from "framer-motion";
import { PhotoWindow } from "@/components/ui/photo-window";
import TextType from "@/components/ui/text-type";

const roles = [
  "a larper",
  "fuelled by iced coffee",
  "curious about where tech is headed",
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-6 pt-28 pb-16"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-16 lg:grid-cols-2">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p
            variants={item}
            className="mb-5 font-mono text-xs tracking-widest uppercase text-ink-soft"
          >
            Singapore · Year 2 Software Engineering · SMU
          </motion.p>

          <motion.h1
            variants={item}
            className="font-heading text-5xl sm:text-6xl md:text-7xl leading-[1.05] text-ink"
          >
            hi! i&apos;m Zachary,
          </motion.h1>

          <motion.div variants={item} className="mt-3 font-heading text-xl sm:text-3xl text-ink">
            <p>i&apos;m also</p>
            <TextType
              as="p"
              text={roles}
              className="italic text-cobalt"
              typingSpeed={55}
              deletingSpeed={30}
              pauseDuration={1800}
              cursorCharacter="|"
              cursorClassName="text-cobalt"
            />
          </motion.div>

          <motion.p variants={item} className="mt-5 text-lg text-ink-soft">
            welcome to my portfolio, v2!
          </motion.p>

          <motion.div variants={item} className="mt-10">
            <a
              href="#about"
              className="inline-flex items-center gap-2 font-mono text-sm text-ink-soft hover:text-cobalt transition-colors"
            >
              larp &amp; build
              <motion.span
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              >
                ⌄
              </motion.span>
            </a>
          </motion.div>
        </motion.div>

        <div className="flex justify-center lg:justify-end">
          <PhotoWindow />
        </div>
      </div>
    </section>
  );
}
