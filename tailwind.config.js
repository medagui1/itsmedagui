/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      // raleway: ["Raleway", "sans-serif"],
      // satoshi: ["Satoshi", "sans-serif"],
      recoleta: ["Recoleta", "serif"],
      gordita: ["Gordita", "sans-serif"],
    },
    extend: {
      colors: {
        black_primary: "#141414",
        white_primary: "#e5f4e3",
        text_primary: "#d7a3e5",
      },
    },
  },
  plugins: [],
};
