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

      backgroundImage: {
        gradient: "var(--primary)",
      },
    },
  },
  plugins: [require("@anishshobithps/tailwind-breakpoints")],
  darkMode: "class",
};
