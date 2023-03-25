import { initializeApp } from "firebase/app";
import { getAuth } from "@firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAx-xjg1UerYZBfAxg20-NykYTCF1qsZVs",
  authDomain: "rentme-b2f45.firebaseapp.com",
  projectId: "rentme-b2f45",
  storageBucket: "rentme-b2f45.appspot.com",
  messagingSenderId: "923510903856",
  appId: "1:923510903856:web:923ba8cc4d41b5fc1ec9f5",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

export const storage = getStorage(app);
