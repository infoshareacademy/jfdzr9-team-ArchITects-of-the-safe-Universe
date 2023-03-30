import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { ButtonM } from "../components/Buttons/Button.styled";
import { firebaseConfig } from "../utils/firebase/firebase.config";
import { useNavigate } from "react-router";

firebase.initializeApp(firebaseConfig);

export const SignInGoogle = () => {
  const navigate = useNavigate();

  const handleSignInGoogle = async () => {
    try {
      const auth = firebase.auth();
      const provider = new firebase.auth.GoogleAuthProvider();
      await auth.signInWithPopup(provider);
      navigate("/userPanelBorrow");
    } catch (error) {
      alert(`Nieprawidłowe dane logowania`);
    }
  };

  return <ButtonM onClick={handleSignInGoogle}>Zaloguj przez Google</ButtonM>;
};
