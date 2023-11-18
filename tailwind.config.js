/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily : {
      'raleway' : ['Raleway', 'sans-serif'],
      'satoshi' : ['Satoshi', 'sans-serif']
    },
    extend: {
      colors : {
        'black_primary' : '#323234',
        'black_secondary' : '#1C1C22',
        'white_primary' : '#e6e6e6',
        'white_secondary' : '#f5f5f5'
      }
    },
  },
  plugins: [],
}