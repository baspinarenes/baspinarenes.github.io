import Image from "next/image";
import changeTheme from "../../../utils/changeTheme";
import HamburgerMenu from "./HamburgerMenu";
import NormalMenu from "./NormalMenu";
import Socials from "./Socials";

const Header = () => (
  <div className="flex items-center">
    <HamburgerMenu />
    <NormalMenu />
    <Socials />
    <button
      type="button"
      className="bg-gray-200 w-9 h-9 rounded-lg flex items-center justify-center ring-2 ring-transparent hover:ring-gray-400 transition-all ml-2"
      onClick={changeTheme}
    >
      <Image src="/images/dark.svg" alt="Dark icon" height={20} width={20} />
    </button>
  </div>
);

export default Header;
