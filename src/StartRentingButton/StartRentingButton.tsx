import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { ButtonS } from "../components/Buttons/Button.styled";
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
          <ButtonS onClick={handleStartRenting}>Zacznij wypożyczać</ButtonS>
        </Link>
      ) : (
        <Link to="/account">
          <ButtonS>Zacznij wypożyczać</ButtonS>
        </Link>
      )}
    </>
  );
};
