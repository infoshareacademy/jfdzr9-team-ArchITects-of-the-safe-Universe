import { ButtonS } from "../components/Buttons/Button.styled";
import { Link } from "react-router-dom";
import React from "react";

interface UserPanelButtonProps {
  onClick: () => void;
}

export const UserPanelButton: React.FC<UserPanelButtonProps> = ({ onClick }) => {
  return (
    <Link to="/userPanelBorrow">
      <ButtonS onClick={onClick}>Panel użytkownika</ButtonS>
    </Link>
  );
};
