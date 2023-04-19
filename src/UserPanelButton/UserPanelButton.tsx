import { ButtonS } from "../components/Buttons/Button.styled";
import { Link } from "react-router-dom";

interface UserPanelButtonProps {
  onClick: () => void;
}

export const UserPanelButton = ({ onClick }: UserPanelButtonProps) => {
  return (
    <Link to="/userPanelBorrow">
      <ButtonS onClick={onClick}>Panel użytkownika</ButtonS>
    </Link>
  );
};
