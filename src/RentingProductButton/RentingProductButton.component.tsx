import { useContext } from "react";

import "firebase/compat/auth";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { OrangeButton } from "../components/Buttons/Button.styled";

export const RentingProductButton = () => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleStartRenting = () => {
    navigate(currentUser ? "/contact" : "/account");
  };

  return (
    <>
      {currentUser ? (
        <Link to="/contact">
          <OrangeButton onClick={handleStartRenting}>Kontakt z właścicielem</OrangeButton>
        </Link>
      ) : (
        <Link to="/account">
          <OrangeButton>Kontakt z właścicielem</OrangeButton>
        </Link>
      )}
    </>
  );
};
