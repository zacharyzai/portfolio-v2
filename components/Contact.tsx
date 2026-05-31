"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Github, Linkedin, Mail, Send, CheckCircle } from "lucide-react";

const socials = [
  {
    label: "GitHub",
    handle: "@zacharyzai",
    href: "https://github.com/zacharyzai",
    icon: Github,
  },
  {
    label: "LinkedIn",
    handle: "Zachary Zai",
    href: "https://www.linkedin.com/in/zachary-zai-12b2a6392/",
    icon: Linkedin,
  },
  {
    label: "Email",
    handle: "zachary2309zz@gmail.com",
    href: "mailto:zachary2309zz@gmail.com",
    icon: Mail,
  },
];

export default function Contact() {
  const titleRef = useRef(null);
  const inView = useInView(titleRef, { once: true, margin: "-60px" });
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSent(true);
  };

  return (
    <section id="contact" className="py-28 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-indigo-400 mb-3 block">
            Let&apos;s talk
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Get in touch
          </h2>
          <p className="mt-4 text-slate-400 text-base max-w-lg">
            Whether it&apos;s an internship opportunity, a collaboration, or just
            a friendly chat &mdash; I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: social links */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 rounded-2xl border border-slate-800 bg-slate-900 hover:border-indigo-500/40 hover:bg-slate-800/60 transition-all"
              >
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-xl bg-slate-800 border border-slate-700 group-hover:border-indigo-500/40 transition-colors">
                  <s.icon size={18} className="text-indigo-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">{s.label}</p>
                  <p className="text-sm font-semibold text-slate-200 group-hover:text-indigo-400 transition-colors">
                    {s.handle}
                  </p>
                </div>
              </a>
            ))}

            <p className="text-xs text-slate-600 mt-2 pl-1">
              Based in Singapore &middot; Open to remote roles
            </p>
          </motion.div>

          {/* Right: contact form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 py-12 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 16 }}
                >
                  <CheckCircle size={48} className="text-emerald-400" />
                </motion.div>
                <h3 className="text-lg font-semibold text-white">
                  Message sent!
                </h3>
                <p className="text-sm text-slate-400">
                  Thanks for reaching out. I&apos;ll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={form.name}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, name: e.target.value }))
                      }
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-700 bg-slate-900 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={form.email}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, email: e.target.value }))
                      }
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-700 bg-slate-900 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Hi! I want to hire you NOW!"
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-700 bg-slate-900 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-indigo-600 text-white text-sm font-semibold rounded-xl hover:bg-indigo-500 disabled:opacity-50 transition-all hover:-translate-y-0.5"
                >
                  {loading ? (
                    <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                  ) : (
                    <Send size={15} />
                  )}
                  {loading ? "Sending…" : "Send message"}
                </button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600"
        >
          <p>&copy; {new Date().getFullYear()} Zachary Zai. Built with Next.js &amp; Framer Motion.</p>
          <p>Designed &amp; developed with care.</p>
        </motion.div>
      </div>
    </section>
  );
}
