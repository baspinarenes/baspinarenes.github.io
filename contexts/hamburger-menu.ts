/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from "react";

const HamburgerMenuContext = createContext({
  isOpenHamburgerMenu: false,
  setIsOpenHamburgerMenu: (
    state: boolean | ((prevState: boolean) => boolean)
  ) => {},
});

const HamburgerMenuContextProvider = HamburgerMenuContext.Provider;

export { HamburgerMenuContext, HamburgerMenuContextProvider };
