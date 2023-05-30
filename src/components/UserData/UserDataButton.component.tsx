import { Link } from "react-router-dom";
import { ButtonS } from "../Buttons/Button.styled";

interface UserDataButtonProps {
  onClick: () => void;
}

export const UserDataButton = ({ onClick }: UserDataButtonProps) => {
  return (
    <Link to="/userDataPanel">
      <ButtonS onClick={onClick}>Dane użytkownika</ButtonS>
    </Link>
  );
};
