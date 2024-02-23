/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'themeBlack': '#4D4D4D',
        'themeGreen': '#BBDC40'
      }
    },
  },
  plugins: [],
}

