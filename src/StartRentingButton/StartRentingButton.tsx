import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { ButtonM } from "../components/Buttons/Button.styled";
import "firebase/compat/auth";
import { Link, useNavigate } from "react-router-dom";

export const StartRentingButton = () => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleStartRenting = () => {
    navigate(currentUser ? "/" : "/account");
  };

  return (
    <>
      {currentUser ? (
        <Link to="/">
          <ButtonM onClick={handleStartRenting}>Zacznij wypożyczać</ButtonM>
        </Link>
      ) : (
        <Link to="/account">
          <ButtonM>Zacznij wypożyczać</ButtonM>
        </Link>
      )}
    </>
  );
};
