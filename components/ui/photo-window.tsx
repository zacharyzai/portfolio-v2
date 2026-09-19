"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const TITLE = "photos of me & friends";

const PHOTOS = [
  "/images/zachary-4.jpg",
  "/images/zachary-1.jpg",
  "/images/zachary-2.jpg",
  "/images/zachary-3.jpg",
];

export function PhotoWindow() {
  const [index, setIndex] = useState(0);
  const photo = PHOTOS[index];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, rotate: -2 }}
      animate={{ opacity: 1, y: 0, rotate: -1.5 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="w-full max-w-md rounded-xl border-2 border-ink bg-invert shadow-[8px_8px_0_0_#17181C] overflow-hidden"
    >
      <div className="flex items-center gap-1.5 border-b-2 border-ink/60 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-xs text-paper/50">
          {TITLE}
        </span>
      </div>

      <button
        type="button"
        onClick={() => setIndex((i) => (i + 1) % PHOTOS.length)}
        aria-label="Show next photo"
        className="group relative block w-full aspect-[4/5] overflow-hidden"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={photo}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0"
          >
            <Image
              src={photo}
              alt={`Zachary — photo ${index + 1}`}
              fill
              sizes="(max-width: 1024px) 90vw, 448px"
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>

        <span className="absolute bottom-3 right-3 rounded-full border-2 border-ink bg-paper px-3 py-1 font-mono text-xs text-ink shadow-[2px_2px_0_0_#17181C] group-hover:bg-cobalt group-hover:text-paper group-hover:border-cobalt transition-colors">
          click me ☺ {index + 1}/{PHOTOS.length}
        </span>
      </button>
    </motion.div>
  );
}
