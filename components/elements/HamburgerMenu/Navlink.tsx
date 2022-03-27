import Link from "next/link";

type NavlinkProps = {
  name: string;
  path: string;
  handleHamburgerToggleClick: () => void;
};

const Navlink = (props: NavlinkProps) => {
  const { name, path, handleHamburgerToggleClick } = props;

  return (
    <Link href={path}>
      <a onClick={handleHamburgerToggleClick}>{name}</a>
    </Link>
  );
};

export default Navlink;
