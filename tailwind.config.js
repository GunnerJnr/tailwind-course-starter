/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        wavey: {
          "0%, 100%": { transform: "scaleY(0.5)" },
          "50%": { transform: "scaleY(1.5)" },
        },
      },
      // animation-wavey
      animation: {
        wavey: "wavey 1s linear infinite" /* animation-name duration timing-function delay iteration-count direction fill-mode play-state */,
      }
    },
  },
  plugins: [require("./plugins/openVariant"), require("./plugins/animationDelay")],
};
