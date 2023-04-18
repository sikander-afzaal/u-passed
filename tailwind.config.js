const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*"],
  theme: {
    extend: {
      colors: {
        primary: "#fba41c",
        dark: "#292929",
      },
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        hero: 'url("./assets/hero.png")',
      },
    },
  },
  plugins: [],
};
