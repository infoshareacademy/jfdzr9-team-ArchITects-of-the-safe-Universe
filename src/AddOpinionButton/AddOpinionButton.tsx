import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { ButtonS } from "../components/Buttons/Button.styled";
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
          <ButtonS onClick={handleStartRenting}>Dodaj opinię</ButtonS>
        </Link>
      ) : (
        <Link to="/account">
          <ButtonS>Dodaj opinię</ButtonS>
        </Link>
      )}
    </>
  );
};
