/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./team.html","./teams.html","./login.html","./course.html","./course1.html"], 
  theme: {
    extend: {
      colors: {
        blue1: "#0F4C7B", // Custom blue color
      },
      fontFamily: {
        averia: ['"Averia Serif Libre"', 'serif'],
      },
    },
  },
  plugins: [],
};
