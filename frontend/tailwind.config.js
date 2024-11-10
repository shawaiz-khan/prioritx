/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          primary: '#6A1B9A',
          secondary: '#9C27B0',
          accent: '#E1BEE7',
        }
      },
    },
  },
  plugins: [],
}