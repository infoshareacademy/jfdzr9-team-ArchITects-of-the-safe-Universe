import { useContext } from "react";
import { AuthContext, AuthContextType } from "../Context/AuthContext";
import { ButtonM } from "../components/Buttons/Button.styled";
import { useNavigate } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

interface UserWithUserDataPanel extends firebase.User {
  userDataPanel?: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    location: string;
    email: string;
  };
}

export const AddOpinionButton = () => {
  const { currentUser } = useContext<AuthContextType>(AuthContext);
  const navigate = useNavigate();

  const handleAddOpinion = async () => {
    if (!currentUser) {
      navigate("/account");
      return;
    }
    const user = currentUser as UserWithUserDataPanel;

    try {
      const userData = await firebase.firestore().collection("users").where("email", "==", user.email).get();

      if (userData.docs.length === 0) {
        navigate("/userDataPanel");
        return;
      }
      const userDataPanel = userData.docs[0].data();

      if (userDataPanel) {
        const { firstName, lastName, phoneNumber, location, email } = userDataPanel;
        if (firstName && lastName && phoneNumber && location && email) {
          navigate("/addOpinion");
        } else {
          navigate("/userDataPanel");
        }
      } else {
        navigate("/account");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  return (
    <>
      <ButtonM onClick={handleAddOpinion}>Dodaj opinię</ButtonM>
    </>
  );
};
