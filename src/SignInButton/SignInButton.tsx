import { useState } from "react";
import { ButtonS } from "../components/Buttons/Button.styled";

interface SignInButtonProps {
  children?: string;
}

export const SignInButton = ({ children }: SignInButtonProps) => {
  const [color, setColor] = useState("var(--color-light-grey)");
  const handleClick = () => {
    setColor(color === "var(--color-light-grey)" ? "var(--color-orange)" : "var(--color-light-grey)");
  };
  return (
    <ButtonS style={{ background: color }} onClick={handleClick}>
      {children}
    </ButtonS>
  );
};
