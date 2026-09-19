import type { Config } from "tailwindcss";
import containerQueries from "@tailwindcss/container-queries";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      zIndex: {
        "-1": "-1",
      },
      fontFamily: {
        sans: ["var(--font-source-serif)", "serif"],
        heading: ["var(--font-fraunces)", "serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      colors: {
        paper: {
          DEFAULT: "#F7F4EE",
          dim: "#EFEBE1",
        },
        ink: {
          DEFAULT: "#17181C",
          soft: "#54545C",
          faint: "rgba(23,24,28,0.14)",
        },
        cobalt: {
          DEFAULT: "#2F5FFF",
          dark: "#1F44D6",
        },
        invert: {
          DEFAULT: "#111319",
          card: "#1B1D24",
          border: "rgba(247,244,238,0.14)",
        },
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [containerQueries],
};

export default config;
