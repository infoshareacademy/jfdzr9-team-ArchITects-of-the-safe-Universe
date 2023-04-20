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
// import { getFunctions, httpsCallable } from "firebase/functions";
import { useAuth } from "../../utils/firebase/auth";
// import { useCloudFunction } from "react-use-firebase";
// import nodemailer from "nodemailer";import { getFirestore, collection, QuerySnapshot, getDocs } from "firebase/firestore";
import { query, where } from "firebase/firestore";
import { useLocation } from "react-router";

type ContactFormData = {
  email: string;
  name: string;
  message: string;
};

const Contact = () => {
  const [books, setBooks] = useState<{ id: string }[]>([]);
  const [tools, setTools] = useState<{ id: string }[]>([]);
  const [sport, setSport] = useState<{ id: string }[]>([]);

  const [success, setSuccess] = useState<boolean>(false);
  const { currentUser } = useAuth();
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ContactFormData>();
  const [file, setFile] = useState<File | undefined>(undefined);
  const location = useLocation();
  const userEmail = currentUser?.email || "";
  const [email, setEmail] = useState<string>(() => {
    const searchParams = new URLSearchParams(location.search);
    return searchParams.get("email") || userEmail;
  });

  const onSubmit = async (data: ContactFormData) => {
    // try {
    //   const db = getFirestore();
    //   const collections = ["books", "Tools", "Sport"];
    //   // const emailList: string[] = [];
    //   const productId = window.location.pathname.split("/")[2];
    //   let email = "";
    //   for (const collectionName of collections) {
    //     const q = query(collection(db, collectionName), where("productId", "==", productId));
    //     const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(q);
    //     querySnapshot.forEach((doc) => {
    //       const docData = doc.data();
    //       if (docData.email) {
    //         email = docData.email;
    //         // const email: string = doc.data().email;
    //         // if (email) {
    //         //   const defaultEmail = window.location.search.split("=")[1];
    //         //   const emailDefaultValue = defaultEmail || email;
    //         //   emailList.push(emailDefaultValue);
    //       }
    //     });
    //   }
    //   setValue("email", email);
    //   // setEmail(emailList[0]);
    // } catch (error) {
    //   console.error(error);
    // }
  };

  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const db = getFirestore();
    //     const collections = ["books", "Tools", "Sport"];
    //     const productId = window.location.pathname.split("/")[2];

    //     for (const collectionName of collections) {
    //       const q = query(collection(db, collectionName), where("productId", "==", productId));
    //       const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(q);
    //       querySnapshot.forEach((doc) => {
    //         const docData = doc.data();
    //         if (docData.email) {
    //           setEmail(docData.email);
    //           return;
    //         }
    //       });
    //     }
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };
    async function getUserFromBooksCollection(docId: string): Promise<string | null> {
      const collections = ["books", "Tools", "Sport"];
      for (const collectionName of collections) {
        const Ref = db.collection(collectionName);
        const doc = await Ref.doc(docId).get();
        if (doc.exists) {
          const userData = doc.data()?.user;
          return userData ?? null;
        }
      }
      console.log("Nie znaleziono dokumentu");
      return null;
    }

    async function fetchData() {
      const db = getFirestore();
      const booksRef = collection(db, "books");
      const toolsRef = collection(db, "Tools");
      const sportRef = collection(db, "Sport");

      const booksSnapshot = await getDocs(booksRef);
      setBooks(booksSnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

      const toolsSnapshot = await getDocs(toolsRef);
      setTools(toolsSnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

      const sportSnapshot = await getDocs(sportRef);
      setSport(sportSnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }

    fetchData();
  }, []);

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
            defaultValue={email}
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
