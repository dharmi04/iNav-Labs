/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Saira:['Saira', 'sans-serif'],
      },
      colors:{
        primary: "#00f054",
      }
    },
  },
  plugins: [],
}

