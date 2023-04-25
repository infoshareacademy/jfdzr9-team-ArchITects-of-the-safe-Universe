import { useContext } from "react";
import { AuthContext, AuthContextType } from "../Context/AuthContext";
import { ButtonM } from "../components/Buttons/Button.styled";
import { Link, useNavigate } from "react-router-dom";
import { User } from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

interface UserWithUserDataPanel extends firebase.User {
  userDataPanel?: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    location: string;
    email: string;
    photo: string;
  };
}

export const AddOpinionButton = () => {
  const { currentUser } = useContext<AuthContextType>(AuthContext);
  const navigate = useNavigate();

  const handleStartRenting = async () => {
    const user = currentUser as UserWithUserDataPanel;
    console.log("user:", user);

    try {
      const userData = await firebase.firestore().collection("users").where("email", "==", user.email).get();
      const userDataPanel = userData.docs[0].data();

      console.log("userDataPanel:", userDataPanel);

      if (userDataPanel) {
        const { firstName, lastName, phoneNumber, location, email, photo } = userDataPanel;
        if (firstName && lastName && phoneNumber && location && email && photo) {
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
      <ButtonM onClick={handleStartRenting}>Dodaj opinię</ButtonM>
    </>
  );
};
