import { useContext, ChangeEvent, Dispatch, SetStateAction } from "react";
import { DarkModeContext } from "../context/darkMode.context";
import MoonIcon from "../../assets/moon-regular.svg";
import { Button, ButtonWrapper } from "./ThemeButton.styled";
import SunIcon from "../../assets/sunny-outline.svg";

export const ThemeButton = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  let icon;

  if (!darkMode) {
    icon = <img src={MoonIcon} alt="dark mode icon" height={15} />;
  } else {
    icon = <img src={SunIcon} alt="light mode icon" height={15} />;
  }

  let option = "";

  if (!darkMode) {
    option = "Dark mode";
  } else {
    option = "Light mode";
  }

  return (
    <ButtonWrapper>
      {icon}
      <Button onClick={() => setDarkMode(!darkMode)}>{option}</Button>
    </ButtonWrapper>
  );
};
