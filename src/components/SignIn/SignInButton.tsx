import { useState, useContext, useRef } from "react";

import "firebase/compat/auth";
import User from "../assets/User.png";
import Usernotlog from "../assets/Usernotlog.png";

import { SignOutButton } from "../SignOutButton/SignOutButton";
import { UserOptionsContainer } from "./SignInButton.styled";
import { AuthContext } from "../../Context/AuthContext";
import { UserPanelButton } from "../../UserPanelButton/UserPanelButton";

export const SignInButton = () => {
  const { currentUser } = useContext(AuthContext);
  const [showUserOptions, setShowUserOptions] = useState<boolean>(false);
  const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

  const handleToggleUserOptions = () => {
    setShowUserOptions(!showUserOptions);
  };

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setShowUserOptions(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowUserOptions(false);
    }, 500);
  };

  return (
    <div style={{ position: "relative" }}>
      <img
        src={currentUser ? User : Usernotlog}
        alt="User icon"
        width="50px"
        height="50px"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />

      {showUserOptions && currentUser && (
        <UserOptionsContainer onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <p>{currentUser.email}</p>
          <SignOutButton>Wyloguj</SignOutButton>
          <UserPanelButton />
        </UserOptionsContainer>
      )}
    </div>
  );
};
