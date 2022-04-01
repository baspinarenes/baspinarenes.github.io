import React, { useContext } from "react";
import Image from "next/image";
import Navbar from "./Navbar";
import { HamburgerMenuContext } from "../../../../contexts/hamburger-menu";

const HamburgerMenu = () => {
  const { setIsOpenHamburgerMenu } = useContext(HamburgerMenuContext);

  return (
    <div className="mr-auto relative sm:hidden">
      <button
        type="button"
        className="w-9 h-9 flex items-center justify-center sm:hidden"
        onClick={() =>
          setIsOpenHamburgerMenu((prevState: boolean) => !prevState)
        }
      >
        <Image
          src="/images/menu.svg"
          alt="Hamburger menu icon"
          height={20}
          width={20}
        />
      </button>
      <Navbar />
    </div>
  );
};

export default HamburgerMenu;
