// // import React from "react";

// // import {
// //   collection,
// //   onSnapshot,
// //   doc,
// //   updateDoc,
// //   getDoc,
// //   query,
// //   where,
// //   getDocs,
// //   deleteDoc,
// //   getFirestore,
// //   Query,
// //   addDoc,
// // } from "firebase/firestore";
// // import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

// import { useState, ChangeEvent } from "react";
// import firebase from "firebase/compat/app";

// import "firebase/compat/auth";
// import "firebase/compat/firestore";
// import firebaseConfig from "../utils/firebase/firebase.config";
// import { useNavigate } from "react-router-dom";
// import { Input } from "../components/AddProductPage/AddNewProduct.styled";
// import { UserDataContainer } from "../components/UserData/UserData.styled";
// import { InputPassword } from "../components/Input/Input.componentpassword";
// import ReactDOM from "react-dom";
// // import ReactDOM from "react-dom/client";
// import { Registration, SignInContainer, TwoMainContainers } from "../components/SignIn/SignIn.styled";
// // import { useForm } from "react-hook-form";
// import { ButtonS } from "../components/Buttons/Button.styled";
// import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
// import app from "../utils/firebase/firebase.config";
// // import { FirebaseError } from "firebase/app";

// // interface IFormInputs {
// //   email: string;
// //   password: string;
// // }

// export const SignUpPage = () => {
//   const [email, setEmail] = useState<string>("");
//   const [password, setPassword] = useState<string>("");
//   const [isSignUpSuccess, setIsSignUpSuccess] = useState(false);
//   const navigate = useNavigate();

//   const handleSignUp = () => {
//     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//       const errorMessage = document.getElementById("error-message");
//       ReactDOM.render(<div style={{ color: "red" }}>Nieprawidłowy adres email</div>, errorMessage);
//       return;
//     }

//     try {
//       const app = firebase.initializeApp(firebaseConfig);
//       const auth = app.auth();
//       auth.createUserWithEmailAndPassword(email, password);
//       setIsSignUpSuccess(true);
//       navigate("/UserDataPanel");
//     } catch (error: any) {
//       const errorMessage = document.getElementById("error-message");
//       if (error.code === "auth/email-already-in-use") {
//         ReactDOM.render(<div style={{ color: "red" }}>Podany adres email jest już używany</div>, errorMessage);
//       } else {
//         ReactDOM.render(<div style={{ color: "red" }}>Hasło powinno zawierać min 6 znaków</div>, errorMessage);
//       }
//     }
//   };

import { useState, useRef } from "react";
import { ButtonM, ButtonS } from "../components/Buttons/Button.styled";
import { Input } from "../components/AddProductPage/AddNewProduct.styled";
import { SignInGoogle } from "../GoogleButton/SignInGoogle";
import {
  TwoMainContainers,
  // LogoConteiner,
  ForgotPasswordLink,
  SignInBottomConrainer,
  SignInContainer,
  SignInWord,
  Registration,
  SingleLine,
} from "../components/SignIn/SignIn.styled";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { firebaseConfig } from "../utils/firebase/firebase.config";
import { ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { InputPassword } from "../components/Input/Input.componentpassword";
import ReactDOM from "react-dom";
import { UserDataContainer } from "../components/UserData/UserData.styled";

export const SignUpPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isSignUpSuccess, setIsSignUpSuccess] = useState(false);
  const [isEnterPressed, setIsEnterPressed] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);

  const navigate = useNavigate();

  const handleSignUp = async () => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      const errorMessage = document.getElementById("error-message");
      ReactDOM.render(<div style={{ color: "red" }}>Nieprawidłowy adres email</div>, errorMessage);
      return;
    }

    try {
      const app = firebase.initializeApp(firebaseConfig);
      const auth = app.auth();
      await auth.createUserWithEmailAndPassword(email, password);
      setIsSignUpSuccess(true);
      navigate("/UserDataPanel");
    } catch (error: any) {
      const errorMessage = document.getElementById("error-message");
      if (error.code === "auth/email-already-in-use") {
        ReactDOM.render(<div style={{ color: "red" }}>Podany adres email jest już używany</div>, errorMessage);
      } else {
        ReactDOM.render(<div style={{ color: "red" }}>Hasło powinno zawierać min 6 znaków</div>, errorMessage);
      }
    }
  };

  const loginButtonRef = useRef<HTMLButtonElement>(null);

  return (
    <TwoMainContainers>
      <SignInContainer>
        <UserDataContainer>
          <h3>Zarejestruj konto:</h3>
          <div id="error-message"></div>
          <Input
            placeholder="email"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            type="email"
          />
          <InputPassword
            placeholder="hasło"
            value={password}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          />
          <Registration>
            <ButtonS onClick={handleSignUp}>Zarejestruj się</ButtonS>
          </Registration>
        </UserDataContainer>
      </SignInContainer>
    </TwoMainContainers>
  );
};
