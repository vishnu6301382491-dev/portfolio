import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        "surface-2": "var(--surface-2)",
        text: "var(--text)",
        "text-dim": "var(--text-dim)",
        accent: "var(--accent)",
        green: {
          status: "var(--green)",
        },
        spot: "var(--spot)",
      },
      fontFamily: {
        heading: ["'Inter Tight'", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        body: ["'Inter'", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      borderRadius: {
        card: "24px",
        pill: "999px",
      },
      animation: {
        "purple-haze": "driftHaze 20s ease-in-out infinite alternate",
        "pulse-slow": "pulseSlow 4s ease-in-out infinite",
        "float-card": "floatCard 6s ease-in-out infinite",
        "bob-arrow": "bobArrow 1.6s ease-in-out infinite",
      },
      keyframes: {
        driftHaze: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "50%": { transform: "translate(30px, -20px) scale(1.08)" },
          "100%": { transform: "translate(-20px, 30px) scale(0.95)" },
        },
        pulseSlow: {
          "0%, 100%": { opacity: "0.22" },
          "50%": { opacity: "0.45" },
        },
        floatCard: {
          "0%, 100%": { transform: "translateY(0px) rotate(-6deg)" },
          "50%": { transform: "translateY(-10px) rotate(-6deg)" },
        },
        bobArrow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(6px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
