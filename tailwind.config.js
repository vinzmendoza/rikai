const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slide: {
          "0%": { opacity: 0, transform: "translateY(100%)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        "slide-up": "slide 0.3s ease-in-out",
      },
      screens: {
        xs: "600px",
        sm: "800px",
        md: "960px",
      },
    },
  },
  plugins: [
    plugin(function (helpers) {
      dataStateVariant("open", helpers);
      dataStateVariant("closed", helpers);
      dataStateVariant("on", helpers);
      dataStateVariant("checked", helpers);
      dataStateVariant("unchecked", helpers);
      dataStateVariant("visible", helpers);
    }),
  ],
};

function dataStateVariant(state, { addVariant, e }) {
  addVariant(`data-state-${state}`, ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.${e(
        `data-state-${state}${separator}${className}`
      )}[data-state='${state}']`;
    });
  });

  addVariant(`group-data-state-${state}`, ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.group[data-state='${state}'] .${e(
        `group-data-state-${state}${separator}${className}`
      )}`;
    });
  });

  addVariant(`peer-data-state-${state}`, ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.peer[data-state='${state}'] ~ .${e(
        `peer-data-state-${state}${separator}${className}`
      )}`;
    });
  });
}
