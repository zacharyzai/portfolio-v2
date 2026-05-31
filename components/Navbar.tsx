"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GooeyNav from "@/components/ui/gooey-nav";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const observers = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.4 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/90 backdrop-blur-md shadow-lg border-b border-slate-800"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="text-white font-semibold text-lg tracking-tight hover:text-indigo-400 transition-colors"
        >
          ZZ.
        </a>

        {/* Desktop nav — GooeyNav */}
        <div className="hidden md:flex items-center">
          <GooeyNav
            items={navLinks}
            particleCount={15}
            particleDistances={[90, 10]}
            particleR={100}
            initialActiveIndex={-1}
            animationTime={600}
            timeVariance={300}
            colors={[1, 2, 3, 1, 2, 3, 1, 4]}
          />
        </div>

        {/* CTA */}
        <a
          href="mailto:zachary2309zz@gmail.com"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition-colors"
        >
          Say hi
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Toggle menu"
        >
          <span className="block w-5 h-px bg-current mb-1.5" />
          <span className="block w-5 h-px bg-current mb-1.5" />
          <span className="block w-5 h-px bg-current" />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-950 border-b border-slate-800 overflow-hidden"
          >
            <ul className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => {
                const id = link.href.slice(1);
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                        activeSection === id
                          ? "text-indigo-400 bg-indigo-500/10"
                          : "text-slate-400 hover:text-indigo-400 hover:bg-slate-800"
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
