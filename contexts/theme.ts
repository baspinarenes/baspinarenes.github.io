/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, SyntheticEvent } from "react";

const ThemeContext = createContext({
  theme: "light",
  setTheme: (theme: string) => {},
});

const ThemeContextProvider = ThemeContext.Provider;

export { ThemeContext, ThemeContextProvider };
