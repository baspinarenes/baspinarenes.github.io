import { useContext } from "react";
import Navlink from "./Navlink";
import { navigations, siteData } from "../../../../constants";
import { HamburgerMenuContext } from "../../../../contexts/hamburger-menu";

const Navbar = () => {
  const { isOpenHamburgerMenu } = useContext(HamburgerMenuContext);

  return (
    <div
      className={`${
        isOpenHamburgerMenu ? "flex" : "hidden"
      } fixed z-10 bottom-0 left-0 w-screen h-full-outside-header bg-gray-100 flex-col gap-5 p-5`}
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
