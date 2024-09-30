/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",

  theme: {
    extend: {
      colors: {
        loulou: {
          50: "#fbf7fc",
          100: "#f8eef9",
          200: "#efdbf3",
          300: "#e4bfe8",
          400: "#d499d9",
          500: "#bf70c5",
          600: "#a351a8",
          700: "#88418a",
          800: "#703672",
          900: "#5e315e",
          950: "#4d1d4d",
        },
      },
    },
  },
  plugins: [],
};
