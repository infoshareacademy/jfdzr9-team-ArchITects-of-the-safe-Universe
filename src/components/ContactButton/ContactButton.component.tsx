import { useContext } from "react";
import "firebase/compat/auth";
import { useNavigate } from "react-router-dom";
import { ButtonS } from "../Buttons/Button.styled";
import { AuthContext, AuthContextType } from "../../Context/AuthContext";
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
interface ContactButtonProps {
  email?: string;
}

export const ContactButton = ({ email }: ContactButtonProps) => {
  const { currentUser } = useContext<AuthContextType>(AuthContext);
  const navigate = useNavigate();

  const handleContact = async () => {
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
        const { firstName, lastName, phoneNumber, location, email: userDataPanelEmail } = userDataPanel;
        if (firstName && lastName && phoneNumber && location && (email || userDataPanelEmail)) {
          navigate(`/contact?email=${email || userDataPanelEmail}`);
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
      <ButtonS style={{ width: 250 }} onClick={handleContact}>
        Kontakt z właścicielem
      </ButtonS>
    </>
  );
};
