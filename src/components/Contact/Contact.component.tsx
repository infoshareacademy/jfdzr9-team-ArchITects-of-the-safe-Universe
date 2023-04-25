import { useEffect, useState } from "react";
import { Title } from "../../UI/Title.styled";
import { FormContainer, Input, TextArea } from "./Contact.styled";
import { ButtonS } from "../Buttons/Button.styled";
import { Controller, useForm } from "react-hook-form";
import {
  collection,
  getDoc,
  getDocs,
  getFirestore,
  doc,
  CollectionReference,
  QueryDocumentSnapshot,
  QuerySnapshot,
  DocumentData,
} from "firebase/firestore";
import { auth, db } from "../../utils/firebase/firebase.config";
import "firebase/firestore";
import { useAuth } from "../../utils/firebase/auth";
import { query, where } from "firebase/firestore";
import { useLocation } from "react-router";
import "firebase/firestore";
import { getFunctions, httpsCallable } from "firebase/functions";
// import { useCloudFunction } from "react-use-firebase";
// import nodemailer from "nodemailer";

type ContactFormData = {
  email: string;
  name: string;
  message: string;
};

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const { currentUser } = useAuth();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>();
  const [file, setFile] = useState<File | undefined>(undefined);

  const onSubmit = async (data: ContactFormData) => {
    try {
      const currentUser = auth.currentUser;
      const userEmail = currentUser?.email;

      if (!userEmail) {
        throw new Error("Użytkownik nie jest zalogowany");
      }

      const db = getFirestore();
      const collections = ["books", "Tools", "Sport"];
      const emails: string[] = [];

      for (const collectionName of collections) {
        const querySnapshot = await getDocs(collection(db, collectionName));
        querySnapshot.forEach((doc) => {
          const { email } = doc.data();
          if (email) {
            emails.push(email);
          }
        });
      }

      const functions = getFunctions();
      const sendEmail = httpsCallable(functions, "sendEmail");

      const result = await sendEmail({
        to: emails,
        from: userEmail,
        subject: "Wiadomość ze strony internetowej",
        text: `Wiadomość od: ${data.name}\n\n${data.message}`,
      });

      setSuccess(true);
    } catch (error) {
      console.error(error);
      // alert(error.message);
    }
  };

  return (
    <>
      {success ? (
        <Title>Wiadomość została wysłana</Title>
      ) : (
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="email"
            control={control}
            rules={{ required: "E-mail jest wymagany" }}
            defaultValue={undefined}
            render={({ field }) => (
              <>
                {errors.email && <span>{errors.email.message}</span>}
                <Input placeholder="E-mail" type={"text"} {...field} />
              </>
            )}
          />

          <Controller
            name="message"
            control={control}
            rules={{ required: "Wiadomość jest wymagana" }}
            render={({ field }) => (
              <>
                {errors.message && <span>{errors.message.message}</span>}
                <TextArea placeholder="Wiadomość" rows={5} {...field} />
              </>
            )}
          />
          <Controller
            name="name"
            control={control}
            rules={{ required: "Imię jest wymagane" }}
            defaultValue={currentUser?.displayName || ""}
            render={({ field }) => (
              <>
                {errors.name && <span>{errors.name.message}</span>}
                <Input placeholder="Imię" type={"text"} {...field} />
              </>
            )}
          />
          <ButtonS type="submit">Wyślij wiadomość</ButtonS>
        </FormContainer>
      )}
    </>
  );
};

export default Contact;
