import { useContext } from "react";
import { navigations, siteData } from "constants/index";
import { HamburgerMenuContext } from "contexts/hamburger-menu";
import Navlink from "./Navlink";

const Navbar = () => {
  const { isOpenHamburgerMenu } = useContext(HamburgerMenuContext);

  return (
    <div
      className={`${
        isOpenHamburgerMenu ? "flex" : "hidden"
      } fixed z-10 bottom-0 left-0 w-screen h-full-outside-header bg-gray-100 dark:bg-[#444] flex-col gap-5 p-5`}
    >
      {navigations.map((navigation) => (
        <Navlink key={navigation.name} {...navigation} />
      ))}
      <div className="absolute bottom-3 left-4 right-4 text-center text-sm">
        {siteData.footer}
      </div>
    </div>
  );
};

export default Navbar;
