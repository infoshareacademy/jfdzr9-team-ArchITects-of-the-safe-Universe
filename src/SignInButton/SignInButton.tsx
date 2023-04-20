import { AuthContext } from "../Context/AuthContext";
import "firebase/compat/auth";
import User from "../assets/User.png";
import Usernotlog from "../assets/Usernotlog.png";
import { UserPanelButton } from "../UserPanelButton/UserPanelButton";
import { SignOutButton } from "../SignOutButton/SignOutButton";
import { UserOptionsContainer } from "./SignInButton.styled";
import { UserDataButton } from "../components/UserData/UserDataButton";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import React, { useState, useEffect, useContext, useRef } from "react";
import styled from "styled-components";

const UserPhoto = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Container = styled.div`
  position: relative;
`;

export const SignInButton = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const { currentUser } = useContext(AuthContext);
  const [showUserOptions, setShowUserOptions] = useState<boolean>(false);
  const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);
  const storage: firebase.storage.Storage = firebase.storage();
  const [userPhotoURL, setUserPhotoURL] = useState<string>("");

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setShowUserOptions(true);
  };

  useEffect(() => {
    setIsMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
  }, []);

  const handleCloseButtonClick = () => {
    setShowUserOptions(false);
  };
  useEffect(() => {
    if (currentUser) {
      const userRef = storage.ref(`users/${currentUser.email}/photo`);
      userRef.getDownloadURL().then((url) => {
        setUserPhotoURL(url);
      });
    }
  }, [currentUser]);

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowUserOptions(false);
    }, 500);
  };

  return (
    <Container>
      <UserPhoto
        src={userPhotoURL ? userPhotoURL : currentUser ? User : Usernotlog}
        alt={currentUser ? "User icon" : ""}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />

      {showUserOptions && currentUser && (
        <UserOptionsContainer onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} isMobile={isMobile}>
          <div className="user-info">
            <div>{isMobile && <button className="close-button" onClick={handleCloseButtonClick} />}</div>
            <div style={{ marginLeft: "20px" }}>{currentUser.email}</div>
          </div>
          <div className="options">
            <UserPanelButton onClick={() => setShowUserOptions(false)} />
            <UserDataButton onClick={() => setShowUserOptions(false)} />
            <SignOutButton>Wyloguj</SignOutButton>
          </div>
        </UserOptionsContainer>
      )}
    </Container>
  );
};
