/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        black: "#151515",
        offBlack: "#191919",
        white: "#FFFEFB",
        offWhite: "#F7F7F7",
        primary: "#2493D1",
      },
    },
  },
  plugins: [],
};
