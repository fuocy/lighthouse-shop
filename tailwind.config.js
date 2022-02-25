const { colors } = require("tailwindcss/defaultTheme");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ["Plus Jakarta Display", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "primary-color": "#fec734",
        "background-grayec": "#ececec",
        "background-grayfa": "#fafafa",
        rede7: "#e72b2b",
      },
      keyframes: {
        navigation: {
          "0%": { width: "0%", height: "3px" },
          "50%": { width: "100%", height: "3px" },
          "100%": {
            width: "100%",
            height: "100%",
            backgroundColor: "theme('colors.primary-color')",
          },
        },
      },
      animation: {
        "nav-move": "navigation 800ms forwards",
      },
      gridTemplateColumns: {
        "product-detail": "3fr 19fr 23fr",
      },
    },
  },
  plugins: [],
};
