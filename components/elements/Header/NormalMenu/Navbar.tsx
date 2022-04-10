import { useRouter } from "next/router";
import { navigations } from "constants/index";
import Navlink from "./Navlink";

const Navbar = () => {
  const router = useRouter();

  return (
    <div className="flex gap-2 -ml-3">
      {navigations.map((navigation) => (
        <Navlink
          key={navigation.name}
          name={navigation.name}
          path={navigation.path}
          isActive={
            router.pathname.match(/(?<path>\/\w*)\/*/)?.groups?.path ===
            navigation.path
          }
        />
      ))}
    </div>
  );
};

export default Navbar;
