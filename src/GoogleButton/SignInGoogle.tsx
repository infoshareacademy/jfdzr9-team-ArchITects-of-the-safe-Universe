import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { ButtonM } from "../components/Buttons/Button.styled";
import { firebaseConfig } from "../utils/firebase/firebase.config";

firebase.initializeApp(firebaseConfig);

export const SignInGoogle = () => {
  const handleSignInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      const result = await firebase.auth().signInWithPopup(provider);
      const { user } = result;
      if (user) {
        console.log("Zalogowano za pomocą Google");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return <ButtonM onClick={handleSignInWithGoogle}>Zaloguj przez Google</ButtonM>;
};
