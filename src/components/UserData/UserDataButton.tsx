import { Link } from "react-router-dom";
import { ButtonS } from "../Buttons/Button.styled";

export const UserDataButton = () => {
  return (
    <Link to="/userDataPanel">
      <ButtonS>Dane użytkownika</ButtonS>
    </Link>
  );
};
