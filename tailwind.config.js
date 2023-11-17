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
        'black_primary' : '#161513',
        'black_secondary' : '#1C1C22',
        'white_primary' : '#F0F2F5',
        'white_secondary' : '#ffffff'
      }
    },
  },
  plugins: [],
}