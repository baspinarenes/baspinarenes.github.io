import Link from "next/link";
import { useContext } from "react";
import { HamburgerMenuContext } from "contexts/hamburger-menu";

type NavlinkProps = {
  name: string;
  path: string;
};

const Navlink = (props: NavlinkProps) => {
  const { name, path } = props;

  const { setIsOpenHamburgerMenu } = useContext(HamburgerMenuContext);

  const handleClickHamburgerMenuNavlink = () => {
    setTimeout(() => {
      setIsOpenHamburgerMenu((prevState: boolean) => !prevState);
    }, 100);
  };

  return (
    <Link href={path}>
      <a
        onClick={handleClickHamburgerMenuNavlink}
        className="px-5 py-4 text-lg dark:text-[#e0e0e0]"
      >
        {name}
      </a>
    </Link>
  );
};

export default Navlink;
