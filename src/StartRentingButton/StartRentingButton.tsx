import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { ButtonM, ButtonS } from "../components/Buttons/Button.styled";
import "firebase/compat/auth";
import { Link, useNavigate } from "react-router-dom";

export const StartRentingButton = () => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleStartRenting = () => {
    navigate(currentUser ? "/contact" : "/account");
  };

  return (
    <>
      {currentUser ? (
        <Link to="/contact">
          <ButtonM onClick={handleStartRenting}>Kontakt z właścicielem</ButtonM>
        </Link>
      ) : (
        <Link to="/account">
          <ButtonM>Kontakt z właścicielem</ButtonM>
        </Link>
      )}
    </>
  );
};
