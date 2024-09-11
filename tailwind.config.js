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
        text_primary: "#00bae2",
      },
      spacing : {
        widest : '48px',
        wide : '32px',
        normal : '24px',
        thin : '16px',
        thinner : '8px'
      }
    },
  },
  plugins: [],
};
