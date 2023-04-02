import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { ButtonS } from "../components/Buttons/Button.styled";
import "firebase/compat/auth";
import { Link, useNavigate } from "react-router-dom";

export const OpinionButton = () => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleStartRenting = () => {
    navigate(currentUser ? "/opinionsUser" : "/opinions");
  };

  return (
    <>
      {currentUser ? (
        <Link to="/opinionsUser">
          <ButtonS onClick={handleStartRenting}>Opinie</ButtonS>
        </Link>
      ) : (
        <Link to="/opinions">
          <ButtonS>Opinie</ButtonS>
        </Link>
      )}
    </>
  );
};
