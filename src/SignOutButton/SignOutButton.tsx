import { ButtonS } from "../components/Buttons/Button.styled";
import firebase from "firebase/compat/app";
import { useNavigate } from "react-router-dom";

type SignOutButtonProps = {
  children?: React.ReactNode;
};

const handleSignOut = async (navigate: any) => {
  try {
    await firebase.auth().signOut();
    navigate("/");
    window.location.reload();
  } catch (error) {
    console.error(error);
  }
};

export const SignOutButton = ({ children }: SignOutButtonProps) => {
  const navigate = useNavigate();
  return <ButtonS onClick={() => handleSignOut(navigate)}>{children}</ButtonS>;
};
