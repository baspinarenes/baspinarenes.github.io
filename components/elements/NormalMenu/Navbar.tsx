import { useRouter } from "next/router";
import Navlink from "./Navlink";
import { navigations } from "../../../constants";

const Navbar = () => {
  const router = useRouter();

  return (
    <div className="flex gap-2 -ml-3">
      {navigations.map((navigation) => (
        <Navlink
          key={navigation.name}
          name={navigation.name}
          path={navigation.path}
          isActive={router.pathname === navigation.path}
        />
      ))}
    </div>
  );
};

export default Navbar;
