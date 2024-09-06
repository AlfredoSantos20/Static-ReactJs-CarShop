/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}",],
  darkMode: "class",
  theme: {
    extend: {
      colors:{
        primary: "#f42c37",
        secondary: "#f42c37",
        brandYellow: "#fdc62e",
        brandGold:"#F6C324",
        brandGreen: "#2dcc6f",
        brandBlue: "#1376f4",
        brandWhite: "#eeeeee",
        brandPurple: "#A020F0",
        brandTeal: "#14b8a6",
      },
      container:{
        center:true,
        padding:{
          DEFAULT: "1rem",
          sm: "3rem",
       
        }
      }
    },
  },
  plugins: [],
}