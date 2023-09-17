/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      colors: {
        'marron-secondary': '#47465A',
        'marron-primary': '#484848',
        'marron-content': '#5b5b5b',
      },
    },
  },
  plugins: [],
}

