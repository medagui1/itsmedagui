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
        black_primary: "#272727",
        white_primary: "#e5f4e3w",
        text_primary: "#ca2c92",
      },
    },
  },
  plugins: [],
};
