/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          background: '#121212',
          container: '#1E1E1E',
        },
        light: {
          background: '#FFFFFF',
          container: '#F8F9FA',
        }
      }
    },
  },
  plugins: [],
}