import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { ButtonS } from "../components/Buttons/Button.styled";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { useNavigate } from "react-router-dom";

export const SignInButton = () => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await firebase.auth().signOut();
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {currentUser ? (
        <>
          <ButtonS onClick={handleSignOut}>Wyloguj</ButtonS>
        </>
      ) : (
        <ButtonS>Zarejestruj</ButtonS>
      )}
    </>
  );
};
