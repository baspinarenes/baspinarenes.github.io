import Image from "next/image";
import { Icons } from "components/elements/common";
import { useContext } from "react";
import { ThemeContext } from "contexts/theme";
import { changeTailwindTheme } from "../../../utils/theme";
import HamburgerMenu from "./HamburgerMenu";
import NormalMenu from "./NormalMenu";
import Socials from "./Socials";

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleChangeThemeClick = () => {
    const newTheme = theme === "dark" ? "light" : "dark";

    setTheme(newTheme);
    changeTailwindTheme(newTheme);
    localStorage.setItem("color-theme", newTheme);
  };

  return (
    <div className="flex items-center">
      <HamburgerMenu />
      <NormalMenu />
      <Socials />
      <button
        type="button"
        className="bg-gray-200 dark:bg-[#444] w-8 h-8 rounded-lg flex items-center justify-center ring-2 ring-transparent hover:ring-gray-400 ml-2"
        onClick={handleChangeThemeClick}
      >
        <Image
          src={theme === "dark" ? Icons.LightTheme : Icons.DarkTheme}
          alt="Dark icon"
          height={20}
          width={20}
        />
      </button>
    </div>
  );
};

export default Header;
