import { RefObject } from "react";
import Navlink from "./Navlink";
import { navigations } from "../../../constants";

interface NavbarProps {
  hamburgerMenuElementRef: RefObject<HTMLInputElement>;
  handleHamburgerToggleClick: () => void;
}

const Navbar = (props: NavbarProps) => {
  const { hamburgerMenuElementRef, handleHamburgerToggleClick } = props;

  return (
    <div
      ref={hamburgerMenuElementRef}
      className="hidden absolute top-12 -left-3 w-screen h-full-outside-header bg-gray-100 flex-col gap-5 p-5"
    >
      {navigations.map((navigation) => (
        <Navlink
          key={navigation.name}
          handleHamburgerToggleClick={handleHamburgerToggleClick}
          {...navigation}
        />
      ))}
      <div className="absolute bottom-3 left-4 right-4 text-center text-sm">
        2022 © No rights are reserved.
      </div>
    </div>
  );
};

export default Navbar;
