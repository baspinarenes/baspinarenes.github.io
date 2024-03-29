import Link from "next/link";

type NavlinkProps = {
  name: string;
  path: string;
  isActive: boolean;
};

const Navlink = (props: NavlinkProps) => {
  const { name, path, isActive } = props;

  return (
    <Link href={path}>
      <a
        className={`text-gray-600 px-3 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all ${
          isActive
            ? "[text-shadow:-0.05ex_0_currentColor,_0.05ex_0_currentColor] dark:text-white"
            : "dark:text-gray-400"
        }`}
      >
        {name}
      </a>
    </Link>
  );
};

export default Navlink;
