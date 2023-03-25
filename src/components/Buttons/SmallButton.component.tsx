import { useState } from "react";
import { ButtonS } from "./Button.styled";

interface SmallButtonProps {
  children?: string;
}

export const SmallButton = ({ children }: SmallButtonProps) => {
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
