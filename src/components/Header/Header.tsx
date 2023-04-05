import React, { useContext, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { firebaseConfig } from "../../utils/firebase/firebase.config";
import { AuthContext } from "../../Context/AuthContext";
import { SignInButton } from "../../SignInButton/SignInButton";
import { Link } from "react-router-dom";
import CompanyLogo from "../../CompanyLogo/CompanyLogo";
import SearchIcon from "../../assets/magnifying-glass-solid.svg";
import { Input } from "../Input/Input.component";
import {
  CompanyHeaderLeft,
  CompanyHeaderLogo,
  CompanyHeaderRight,
  CompanyHeaderSearch,
  CompanyHeaderSection,
  CompanyHeaderSign,
} from "./Header.styled";
import CategoryDropdowncopy from "../../CategoryDropdown/CategoryDropdownMain";

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
            console.log("User logged out");
          }
        });
      } else {
        console.log("User logged out");
      }
    };

    const unregisterAuthObserver = auth.onAuthStateChanged(handleUserStateChange);

    window.addEventListener("unload", () => {
      if (unsubscribe) {
        unsubscribe();
      }

      auth.signOut().then(() => {
        console.log("User logged out");
      });
    });

    return () => unregisterAuthObserver();
  }, []);

  return (
    <CompanyHeaderSection>
      <Link to="/">
        <CompanyHeaderLogo>
          <CompanyLogo />
        </CompanyHeaderLogo>
      </Link>
      <CompanyHeaderSearch>
        <CompanyHeaderLeft>
          <Input icon={SearchIcon} placeholder="Znajdz"></Input>
        </CompanyHeaderLeft>
        <CompanyHeaderRight>
          <CategoryDropdowncopy />
        </CompanyHeaderRight>
      </CompanyHeaderSearch>
      <CompanyHeaderSign>
        {currentUser ? (
          <SignInButton />
        ) : (
          <Link to="/account">
            <SignInButton />
          </Link>
        )}
      </CompanyHeaderSign>
    </CompanyHeaderSection>
  );
}

export default Header;
