import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { ButtonM, ButtonS } from "../components/Buttons/Button.styled";
import "firebase/compat/auth";
import { Link, useNavigate } from "react-router-dom";
import { User } from "firebase/auth";

interface CustomUser extends firebase.User {
  userDataPanel?: {
    email: string;
    firstName: string;
    lastName: string;
    location: string;
    phoneNumber: string;
  };
}

export const AddOpinionButton = () => {
  const { currentUser } = useContext<firebase.User>(AuthContext);

  const navigate = useNavigate();

  const handleStartRenting = () => {
    navigate(currentUser?.userDataPanel ? "/addOpinion" : "/userDataPanel");
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
