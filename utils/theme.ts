/* eslint-disable import/prefer-default-export */
const changeTailwindTheme = (newTheme: string) => {
  if (
    newTheme === "dark" ||
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};

export { changeTailwindTheme };
