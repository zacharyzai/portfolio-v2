"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const socials = [
  { label: "email me ↗", href: "mailto:zachary2309zz@gmail.com", icon: Mail, primary: true },
  { label: "github ↗", href: "https://github.com/zacharyzai", icon: Github },
  { label: "linkedin ↗", href: "https://www.linkedin.com/in/zachary-zai", icon: Linkedin },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="contact" className="py-32 bg-paper">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs tracking-widest uppercase text-cobalt mb-4">
            JOB HUNTING SZN
          </p>
          <h2 className="font-heading text-5xl sm:text-6xl text-ink mb-6">
            say <span className="italic text-cobalt">hello</span>
          </h2>
          <p className="text-ink-soft max-w-md mx-auto mb-10">
            currently on the hunt for software engineering internships — if
            you&apos;re hiring, know someone who is, or just want to chat,
            i&apos;d love to hear from you.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {socials.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 rounded-full border-2 border-ink px-5 py-2.5 font-mono text-sm transition-all ${
                  s.primary
                    ? "bg-ink text-paper hover:bg-cobalt hover:border-cobalt"
                    : "bg-paper text-ink hover:bg-paper-dim"
                }`}
              >
                <s.icon size={15} />
                {s.label}
              </a>
            ))}
          </div>
        </motion.div>

        <div className="mt-24 pt-8 border-t-2 border-ink/10 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs text-ink-soft">
          <p>© {new Date().getFullYear()} zachary · built with next.js, framer motion, and too much iced coffee</p>
          <a href="#home" className="hover:text-cobalt transition-colors">
            back to top ↑
          </a>
        </div>
      </div>
    </section>
  );
}
