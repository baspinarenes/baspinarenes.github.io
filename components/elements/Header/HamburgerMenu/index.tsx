import { memo, useContext } from "react";
import Image from "next/image";
import { Icons } from "components/common";
import { HamburgerMenuContext } from "contexts/hamburger-menu";
import Navbar from "./Navbar";

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
          src={Icons.HamburgerMenu}
          alt="Hamburger menu icon"
          height={20}
          width={20}
          className="dark:brightness-0 dark:invert"
        />
      </button>
      <Navbar />
    </div>
  );
};

export default memo(HamburgerMenu);
