/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    colors:{
      primary:{
        
          100: "#e2f6ff",
          200: "#c4eeff",
          300: "#a7e5ff",
          400: "#89ddff",
          500: "#6cd4ff",
          600: "#56aacc",
          700: "#417f99",
          800: "#2b5566",
          900: "#162a33",
      }
    },
    fontFamily:{
      'poppin':['Poppins','san'],
    },
    extend: {},
  },
  plugins: [],
}

