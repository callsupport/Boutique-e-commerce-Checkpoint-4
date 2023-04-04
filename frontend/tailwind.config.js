/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#5CB9FF",
        darkblue: "#03557C",

        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
