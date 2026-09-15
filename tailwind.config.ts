import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "var(--c-cream)",
        sand: "var(--c-sand)",
        taupe: "var(--c-taupe)",
        ink: "var(--c-ink)",
        accent: "var(--c-accent)",
        deep: "var(--c-deep)",
        line: "var(--c-line)",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"],
      },
    },
  },
  plugins: [],
};

export default config;