/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rt1': '#56CAD1', // Replace with your desired color
      },
      fontFamily: {
        roboto: ['Roboto Condensed', 'sans-serif'],
      },
    },
  },
  plugins: [],
}