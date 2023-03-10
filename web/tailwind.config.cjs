const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    screens: {
      xs: "425px",
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        background: "#09090A",
      },
      gridTemplateRows: {
        7: "repeat(7, minmax(0, 1fr))",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
    plugin(function ({ theme, matchUtilities, addUtilities }) {
      matchUtilities(
        {
          "scrollbar-track-rounded": value => ({
            "&::-webkit-scrollbar-track": {
              borderRadius: value,
            },
          }),
          "scrollbar-thumb-rounded": value => ({
            "&::-webkit-scrollbar-thumb": {
              borderRadius: value,
            },
          }),
        },
        { values: theme("borderRadius") },
      );
    }),
  ],
};
