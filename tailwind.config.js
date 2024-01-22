/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors :{
        primary: "#be8c58",
        bgColor: "#2f2d2d",
        contrast: "#d1cfcd"
      }
    },
  },
  plugins: [],
}

