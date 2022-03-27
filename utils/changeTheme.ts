const changeTheme = () => {
  const currentColorTheme = localStorage.getItem("color-theme");

  if (currentColorTheme && currentColorTheme === "light") {
    document.documentElement.classList.add("dark");
    localStorage.setItem("color-theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("color-theme", "light");
  }
};

export default changeTheme;
