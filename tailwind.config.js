const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['PTSerif',  ...defaultTheme.fontFamily.sans], //"Roboto", 'adobe-arabic',
        comfortaa: ["'Comfortaa', cursive"],
      },
      colors: {
        sky: colors.sky,
        cyan: colors.cyan,
        primary: "#ffffff",
        secondary: "#ffffff",
      },
      height: {
        '207': '27vh',
        '118':'16vh',
      },
      borderWidth: {
        DEFAULT: '1px',
        '1': '1px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
