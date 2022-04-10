/* eslint-disable global-require */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      height: {
        "full-outside-header": "calc(100vh - 5rem)",
      },
      spacing: {
        15: "60px",
      },
      animation: {
        scream: "scream 3s linear infinite",
      },
      keyframes: {
        scream: {
          "0%, 100%": { transform: "rotateY(-30deg)" },
          "50%": { transform: "rotate(10deg)" },
        },
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-exclude-last", "& > *:not(:last-child)");
    },
  ],
};
