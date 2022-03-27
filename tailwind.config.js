module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      height: {
        "full-outside-header": "calc(100vh - 61px)",
      },
      spacing: {
        15: "60px",
      },
    },
  },
  plugins: [],
};
