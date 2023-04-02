import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { ButtonM, ButtonS } from "../components/Buttons/Button.styled";
import "firebase/compat/auth";
import { Link, useNavigate } from "react-router-dom";

export const AddOpinionButton = () => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleStartRenting = () => {
    navigate(currentUser ? "/addOpinion" : "/account");
  };

  return (
    <>
      {currentUser ? (
        <Link to="/addOpinion">
          <ButtonM onClick={handleStartRenting}>Dodaj opinię</ButtonM>
        </Link>
      ) : (
        <Link to="/account">
          <ButtonM>Dodaj opinię</ButtonM>
        </Link>
      )}
    </>
  );
};
