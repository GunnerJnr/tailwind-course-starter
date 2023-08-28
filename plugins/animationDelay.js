const plugin = require("tailwindcss/plugin");

const animationDelay = plugin(
  function ({ matchUtilities, theme }) {
    matchUtilities(
      {
        // dynamic utility class for animation-delay
        "animation-delay": (value) => {
          return {
            animationDelay: value,
          };
        },
      },
      {
        values: theme("animationDelay"), // default values for animation-delay utility class
      }
    );
  },
  {
    theme: {
      // default animation-delay values for animation-delay utility class
      animationDelay: {
        100: "100ms",
        200: "200ms",
        300: "300ms",
        400: "400ms",
        500: "500ms",
        600: "600ms",
        700: "700ms",
        800: "800ms",
        900: "900ms",
        1000: "1000ms",
      },
    },
  }
);

module.exports = animationDelay;
