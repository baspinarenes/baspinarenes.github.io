/* eslint-disable import/prefer-default-export */
const changeTailwindTheme = (newTheme: string) => {
  if (newTheme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};

const getInitialThemeValue = () => {
  if (typeof window === "undefined") {
    return "light";
  }

  const hasDarkThemeOnDevice = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  const themeOnLocalStorage = String(localStorage.getItem("color-theme"));

  return hasDarkThemeOnDevice ? "dark" : themeOnLocalStorage || "light";
};

export { changeTailwindTheme, getInitialThemeValue };
