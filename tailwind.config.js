/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '70': '70%',
      },
      fontFamily: {
        'Poppins':['Poppins','sans-serif']
      }
    },
  },
  plugins: [],
}
