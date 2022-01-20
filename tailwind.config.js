module.exports = {
  content: ["index.html", "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    extend: {
      colors: {
        "text-own-yellow": "#ffc812",
        "own-orange-high": "#fab23d",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
