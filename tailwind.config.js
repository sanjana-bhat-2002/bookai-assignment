/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "accent": "var(--accent)",
        "section": "var(--section-background)",
        "secondary": "var(--secondary-color)",
        "heading": "var(--heading-color)",
        "border-color": "var(--border-color)"
      },

      backgroundImage: {
        'gradient': "var(--primary)"
      }

    },
  },
  plugins: [require("@anishshobithps/tailwind-breakpoints")]
}

