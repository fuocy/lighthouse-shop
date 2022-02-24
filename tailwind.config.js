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
      keyframes: {
        navigation: {
          "0%": { width: "0%", height: "3px" },
          "50%": { width: "100%", height: "3px" },
          "100%": { width: "100%", height: "100%", backgroundColor: "#fec734" },
        },
      },
      animation: {
        "nav-move": "navigation 800ms forwards",
      },
    },
  },
  plugins: [],
};
