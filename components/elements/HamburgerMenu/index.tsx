import React, { useRef } from "react";
import Image from "next/image";
import Navbar from "./Navbar";

const HamburgerMenu = () => {
  const hamburgerMenuElementRef = useRef<HTMLInputElement>(null);

  const handleHamburgerToggleClick = () => {
    if (!hamburgerMenuElementRef.current) {
      return;
    }

    if (hamburgerMenuElementRef.current.style.display === "flex") {
      hamburgerMenuElementRef.current.style.display = "none";
    } else {
      hamburgerMenuElementRef.current.style.display = "flex";
    }
  };

  return (
    <div className="mr-auto relative sm:hidden">
      <button
        type="button"
        className="w-9 h-9 flex items-center justify-center sm:hidden"
        onClick={handleHamburgerToggleClick}
      >
        <Image
          src="/images/menu.svg"
          alt="Hamburger menu icon"
          height={20}
          width={20}
        />
      </button>
      <Navbar
        hamburgerMenuElementRef={hamburgerMenuElementRef}
        handleHamburgerToggleClick={handleHamburgerToggleClick}
      />
    </div>
  );
};

export default HamburgerMenu;
