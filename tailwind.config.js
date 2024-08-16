/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        "accent-secondary": "var(--accent-secondary)",
        "text-heading": "var(--text-heading)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        border: "var(--border)",
        "primary-dark": "var(--primary-dark)",
        "secondary-dark": "var(--secondary-dark)",
        "accent-dark": "var(--accent-dark)",
        "text-heading-dark": "var(--text-heading-dark)",
        "text-primary-dark": "var(--text-primary-dark)",
        "text-secondary-dark": "var(--text-secondary-dark)",
        "border-dark": "var(--border-dark)",
      },

      hyphens: {
        auto: "auto",
        none: "none",
        manual: "manual",
      },

      backgroundImage: {
        gradient: "var(--primary)",
      },

      animation: {
        'fade-in': 'fadeIn 0.7s ease-in-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      }
    },
  },
  plugins: [
    require("@anishshobithps/tailwind-breakpoints"),
    function ({ addUtilities }) {
      addUtilities({
        ".hyphens-auto": {
          hyphens: "auto",
        },
        ".hyphens-none": {
          hyphens: "none",
        },
        ".hyphens-manual": {
          hyphens: "manual",
        },
      });
    },
  ],
  darkMode: "class",
};
