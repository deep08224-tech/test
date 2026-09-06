/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#8B1E22",
          hover: "#7A1519",
          dark: "#7A1519"
        },
        signature: "#8B1E22",
        logoRed: "#7A1519",
        microaccent: "#E5E5E0",
        topBar: "#18181B",
        ivory: "#F4F4F0",
        darkText: "#1C1B1B",
        mutedText: "#6B7280",
        gold: "#D4AF37",
        border: "#E5E7EB"
      },
      fontFamily: {
        sans: ["'Montserrat'", "'Plus Jakarta Sans'", "sans-serif"],
        jost: ["'Jost'", "sans-serif"],
        serif: ["'Cormorant Garamond'", "'Playfair Display'", "Georgia", "serif"],
      },
      boxShadow: {
        'premium': "0 10px 30px -10px rgba(18, 59, 109, 0.08)",
        'premium-hover': "0 20px 40px -15px rgba(18, 59, 109, 0.15)",
        'luxury': "0 15px 35px -10px rgba(139, 30, 34, 0.12)",
      }
    },
  },
  plugins: [],
}
