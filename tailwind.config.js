/** @type {import('tailwindcss').Config} */
// const nativewind = require("nativewind/tailwind/css")

module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#7469B6",
        "brand-color": "#4D869C",
      },
    },
  },
  plugins: [],
};

