const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*"],
  theme: {
    extend: {
      colors: {
        primary: "#f8a11e",
        dark: "#292929",
        secondary: "#e1b387",
      },
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        hero: 'url("./assets/hero.png")',
        leader: 'url("/assets/leader.png")',
      },
    },
  },
  plugins: [],
};
