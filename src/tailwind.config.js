/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // obavezno uključiti sve relevantne fajlove
  ],
  theme: {
    extend: {
      fontFamily: {
        timesCondensed: ['Libre Baskerville', 'serif'],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
};
