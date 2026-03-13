/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
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
        // Light theme colors
        'light-bg': '#FAFAFA',
        'light-surface': '#FFFFFF',
        'light-border': '#E5E5E5',
        'light-text': '#1A1A1A',
        'light-muted': '#6B7280',
        'light-accent': '#3B82F6',
        // Dark theme colors (existing)
        'dark-bg': '#050505',
        'dark-surface': '#0A0A0A',
        'dark-border': '#1A1A1A',
        'dark-text': '#FFFFFF',
        'dark-muted': '#6B7280',
        'dark-accent': '#8B5CF6',
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
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-in': 'slideIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
    require('tailwindcss/plugin')(({ addVariant }) => {
      addVariant('light', '.light &')
    }),
  ],
};
