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
        jelly: {
          "0%": { transform: "scale(1, 1)" },
          "100%": { transform: "scale(1, 1)" },
          "25%": { transform: "scale(0.9, 1.1)" },
          "50%": { transform: "scale(1.1, 0.9)" },
          "75%": { transform: "scale(0.95, 1.05)" },
        },
      },
      animation: {
        "nav-move": "navigation 800ms forwards",
        "btn-search": "jelly 500ms",
      },
      gridTemplateColumns: {
        "product-detail": "3fr 19fr 23fr",
        "product-category": "10fr 37fr",
      },
    },
  },
  plugins: [],
};
