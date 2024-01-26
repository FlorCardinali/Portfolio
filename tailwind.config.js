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
      backgroundImage: {
        bg_wave: "url('./wave-haikei.svg')",
      },
      colors :{
        primary: "#be8c58",
        secondary: "#a46c3c",
        bgColor: "#262321",
        contrast: "#cecbca",
        green: "#7a9a43"
      }
    },
  },
  plugins: [],
}

