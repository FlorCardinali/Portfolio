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
        secondary: "#a46c3c",
        bgColor: "#211e1c",
        contrast: "#cecbca",
        green: "#7a9a43"
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

