/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./transaction.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        work: ['"Work Sans"']
      }
    },
  },
  plugins: [],
}

