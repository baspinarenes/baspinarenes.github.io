module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      screens: {
        xs: { raw: "(max-width: 639px)" },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      width: {
        "fit": "fit-content",
      },
    },
  },
  variants: {
    extend: {
      ringWidth: ["hover", "active"],
    },
  },
  plugins: [],
};
