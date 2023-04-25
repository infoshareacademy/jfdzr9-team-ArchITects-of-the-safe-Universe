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

export const AddProductButton = () => {
  const { currentUser } = useContext<AuthContextType>(AuthContext);
  const navigate = useNavigate();

  const handleAddProduct = async () => {
    if (!currentUser) {
      navigate("/account");
      return;
    }
    const user = currentUser as UserWithUserDataPanel;
    console.log("user:", user);

    try {
      const userData = await firebase.firestore().collection("users").where("email", "==", user.email).get();

      if (userData.docs.length === 0) {
        console.log("No user data found");
        navigate("/userDataPanel");
        return;
      }
      const userDataPanel = userData.docs[0].data();

      console.log("userDataPanel:", userDataPanel);

      if (userDataPanel) {
        const { firstName, lastName, phoneNumber, location, email, photo } = userDataPanel;
        if (firstName && lastName && phoneNumber && location && email && photo) {
          navigate("/addProduct");
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
      <ButtonM onClick={handleAddProduct}>Chcę dodać produkt</ButtonM>
    </>
  );
};
