/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./code/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
