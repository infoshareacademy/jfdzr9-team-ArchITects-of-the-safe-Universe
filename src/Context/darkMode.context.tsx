import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";
import { Theme, darkTheme, lightTheme } from "../theme/theme";

interface DarkModeContextState {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
  theme: Theme;
}

const initialState = {
  darkMode: false,
  setDarkMode: () => null,
  theme: lightTheme,
};

interface ProviderProps {
  children: ReactNode;
}

export const DarkModeContext = createContext<DarkModeContextState>(initialState);

export const DarkModeProvider = ({ children }: ProviderProps) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <DarkModeContext.Provider
        value={{
          theme: darkMode ? darkTheme : lightTheme,
          setDarkMode,
          darkMode,
        }}
      >
        {children}
      </DarkModeContext.Provider>
    </>
  );
};
