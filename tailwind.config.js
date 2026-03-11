/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        border:     "hsl(var(--border) / <alpha-value>)",
        input:      "hsl(var(--input) / <alpha-value>)",
        ring:       "hsl(var(--ring) / <alpha-value>)",
        primary: {
          DEFAULT:    "hsl(var(--primary) / <alpha-value>)",
          foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT:    "hsl(var(--accent) / <alpha-value>)",
          foreground: "hsl(var(--accent-foreground) / <alpha-value>)",
        },
        card: {
          DEFAULT:    "hsl(var(--card) / <alpha-value>)",
          foreground: "hsl(var(--card-foreground) / <alpha-value>)",
        },
        // Direct color tokens from home.md palette
        mint:   "#5effd8",
        rose:   "#e040a0",
        purple: "#b44fdf",
      },
      fontFamily: {
        sans:  ["var(--font-sans)", "sans-serif"],
        mono:  ["var(--font-mono)", "monospace"],
        serif: ["var(--font-serif)", "serif"],
      },
      backgroundImage: {
        "gradient-main": "linear-gradient(135deg, #e040a0 0%, #b44fdf 100%)",
        "gradient-mint": "linear-gradient(135deg, #5effd8 0%, #00c9a7 100%)",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
  ],
};
