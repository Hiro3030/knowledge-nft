/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'top-bg': "url('/lp/book-background.png')",
        'thought-yellow': "url('/lp/gradation-blue.png')",
      }
    },
  },
  plugins: [],
}
