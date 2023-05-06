import React, { useContext, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { firebaseConfig } from "../../utils/firebase/firebase.config";
import { AuthContext } from "../../Context/AuthContext";
import { SignInButton } from "../../SignInButton/SignInButton";
import { Link } from "react-router-dom";
import CompanyLogo from "../../CompanyLogo/CompanyLogo";

import { CompanyHeaderSection, CompanyHeaderSign, RightHeaderContainer } from "./Header.styled";
import { ThemeButton } from "../ThemeButton/ThemeButton.component";

function Header() {
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const app = firebase.initializeApp(firebaseConfig);
    const auth = app.auth();
    let unsubscribe: firebase.Unsubscribe;

    const handleUserStateChange = (user: firebase.User | null) => {
      if (user) {
        unsubscribe = auth.onAuthStateChanged((user: firebase.User | null) => {
          if (!user) {
            // user logout
          }
        });
      } else {
        // user logout
      }
    };

    const unregisterAuthObserver = auth.onAuthStateChanged(handleUserStateChange);

    window.addEventListener("unload", () => {
      if (unsubscribe) {
        unsubscribe();
      }

      auth.signOut();
    });

    return () => unregisterAuthObserver();
  }, []);

  return (
    <CompanyHeaderSection>
      <Link to="/">
        <CompanyLogo />
      </Link>
      <RightHeaderContainer>
        <ThemeButton />
        <CompanyHeaderSign>
          {currentUser ? (
            <SignInButton />
          ) : (
            <Link to="/account">
              <SignInButton />
            </Link>
          )}
        </CompanyHeaderSign>
      </RightHeaderContainer>
    </CompanyHeaderSection>
  );
}

export default Header;
