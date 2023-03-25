import { useState } from "react";
import { ButtonS } from "../components/Buttons/Button.styled";

interface SignInButtonProps {
  children?: string;
}

// kolory buttonów będą podmienione po podłączeniu styli globalnych

export const SignInButton = ({ children }: SignInButtonProps) => {
  const [color, setColor] = useState("grey");
  const handleClick = () => {
    setColor(color === "grey" ? "orange" : "grey");
    // setColor(color === "var(--color-light-grey)" ? "var(--color-orange)" : "var(--color-light-grey)");
  };
  return (
    <ButtonS style={{ background: color }} onClick={handleClick}>
      {children}
    </ButtonS>
  );
};
