import { ButtonS } from "../components/Buttons/Button.styled";
import { Link } from "react-router-dom";

export const UserPanelButton = () => {
  return (
    <Link to="/userPanelBorrow">
      <ButtonS>Panel użytkownika</ButtonS>
    </Link>
  );
};
