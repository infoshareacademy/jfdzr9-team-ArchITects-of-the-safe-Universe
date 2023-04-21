import {
  collection,
  onSnapshot,
  doc,
  updateDoc,
  getDoc,
  query,
  where,
  getDocs,
  deleteDoc,
  getFirestore,
  Query,
  addDoc,
} from "firebase/firestore";
import { getAuth, sendPasswordResetEmail, deleteUser, signOut } from "firebase/auth";
import { useState, useEffect } from "react";
import { db, storage } from "../utils/firebase/firebase.config";
import { Link } from "react-router-dom";
import { DocumentData } from "@firebase/firestore-types";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { Input, InputFile, Label } from "../components/AddProductPage/AddNewProduct.styled";
import { ButtonM } from "../GoogleButton/SignInGoogle.styled";
import { UserDataConstainer, UserDataContainer, UserDataForm } from "../components/UserData/UserData.styled";
import { ButtonS } from "../components/Buttons/Button.styled";

export const UserDataPanel = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [users, setUsers] = useState<
    Array<{
      id: string;
      firstName: string;
      lastName: string;
      phoneNumber: string;
      location: string;
      email: string;
      photo: string;
    }>
  >([]);
  const [editingUser, setEditingUser] = useState("");
  const auth = getAuth();
  const [userDataExists, setUserDataExists] = useState(false);
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "users"), (snapshot) => {
      const currentUser = auth.currentUser;
      if (currentUser) {
        const currentUserDocs = snapshot.docs.filter((doc) => doc.data().email === currentUser.email);

        if (currentUserDocs.length > 0) {
          setUserDataExists(true);
        }
        setUsers(
          currentUserDocs.map((doc) => ({
            id: doc.id,
            ...(doc.data() as {
              firstName: string;
              lastName: string;
              phoneNumber: string;
              location: string;
              email: string;
              photo: string;
            }),
          })),
        );
      }
    });
    return unsubscribe;
  }, [auth]);

  const handleEdit = (userId: string) => {
    setEditingUser(userId);
  };
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFile(event.target.files[0]);
    }
  };
  const handleSave = async (userId: string) => {
    const userRef = doc(db, "users", userId);

    try {
      const firstNameInput = document.getElementById(`firstName${userId}`) as HTMLInputElement;
      const firstNameValue = firstNameInput?.value || "";
      const lastNameInput = document.getElementById(`lastName${userId}`) as HTMLInputElement;
      const lastNameValue = lastNameInput?.value || "";
      const phoneNumberInput = document.getElementById(`phoneNumber${userId}`) as HTMLInputElement;
      const phoneNumberValue = phoneNumberInput?.value || "";
      const locationInput = document.getElementById(`location${userId}`) as HTMLInputElement;
      const locationValue = locationInput?.value || "";
      const photoInput = document.getElementById(`photo${userId}`) as HTMLInputElement;
      const user = users.find((u) => u.id === userId);
      const photoValue = selectedFile ? selectedFile : user?.photo || null;

      if (!firstNameInput || !lastNameInput || !phoneNumberInput || !locationInput || !photoInput) {
        throw new Error("Input element not found");
      }

      await updateDoc(userRef, {
        firstName: firstNameValue,
        lastName: lastNameValue,
        phoneNumber: phoneNumberValue,
        location: locationValue,
        photo: photoValue,
      });
      setEditingUser("");
    } catch (error) {
      console.error(error);
    }
  };
  const [addingUser, setAddingUser] = useState(false);
  const handleAddUser = () => {
    setAddingUser(true);
  };
  const handleChangePassword = async (userId: string) => {
    try {
      const userDoc = await getDoc(doc(db, "users", userId));
      if (userDoc.exists()) {
        const userEmail = userDoc.data().email;
        await sendPasswordResetEmail(auth, userEmail);
        alert("Wysłano link do zmiany hasła na adres email użytkownika.");
      }
    } catch (error) {
      //;
    }
  };
  const handleSaveUser = async () => {
    const firstName = (document.getElementById("firstName") as HTMLInputElement)?.value || "";
    const lastName = (document.getElementById("lastName") as HTMLInputElement)?.value || "";
    const phoneNumber = (document.getElementById("phoneNumber") as HTMLInputElement)?.value || "";
    const location = (document.getElementById("location") as HTMLInputElement)?.value || "";
    const email = auth.currentUser?.email;
    if (!firstName) {
      const firstNameInput = document.getElementById("firstName");
      const firstNameError = document.createElement("span");
      firstNameError.textContent = "Podaj imię";
      firstNameError.style.color = "red";
      firstNameInput?.parentElement?.appendChild(firstNameError);
      return;
    }
    if (!lastName) {
      const lastNameInput = document.getElementById("lastName");
      const lastNameError = document.createElement("span");
      lastNameError.textContent = "Podaj nazwisko";
      lastNameError.style.color = "red";
      lastNameInput?.parentElement?.appendChild(lastNameError);
      return;
    }
    if (!phoneNumber) {
      const phoneNumberInput = document.getElementById("phoneNumber");
      const phoneNumberError = document.createElement("span");
      phoneNumberError.textContent = "Podaj numer telefonu";
      phoneNumberError.style.color = "red";
      phoneNumberInput?.parentElement?.appendChild(phoneNumberError);
      return;
    }
    if (!location) {
      const locationInput = document.getElementById("location");
      const locationError = document.createElement("span");
      locationError.textContent = "Podaj lokalizację";
      locationError.style.color = "red";
      locationInput?.parentElement?.appendChild(locationError);
      return;
    }
    const photoInput = document.getElementById("photo") as HTMLInputElement;
    let photoUrl = "";
    if (photoInput.files && photoInput.files[0]) {
      const photoRef = ref(storage, `users/${email}/photo`);
      await uploadBytes(photoRef, photoInput.files[0]);
      photoUrl = await getDownloadURL(photoRef);
    }
    if (!email) {
      //
      return;
    }
    try {
      const usersRef = collection(db, "users");
      const newUserRef = await addDoc(usersRef, {
        firstName,
        lastName,
        phoneNumber,
        location,
        email,
        photo: photoUrl,
      });
      setAddingUser(false);
      setUserDataExists(true);
    } catch (error) {
      //
    }
  };
  const handleDeleteAccount = async () => {
    try {
      const auth = getAuth();
      const user = auth.currentUser;
      if (user) {
        await user.reload();
        if (user.metadata.lastSignInTime === user.metadata.creationTime) {
          await auth.signOut();
          alert("Aby usunąć konto, musisz się ponownie zalogować.");
          return;
        }
        const db = getFirestore();
        const toolsRef = collection(db, "Tools");
        const booksRef = collection(db, "books");
        const sportRef = collection(db, "Sport");
        const usersRef = collection(db, "users");
        const toolsQuery = query(toolsRef, where("email", "==", user.email));
        const booksQuery = query(booksRef, where("email", "==", user.email));
        const sportQuery = query(sportRef, where("email", "==", user.email));
        const usersQuery = query(usersRef, where("email", "==", user.email));
        const deleteDocuments = async (query: Query<DocumentData>) => {
          const querySnapshot = await getDocs(query);
          querySnapshot.forEach((doc) => {
            deleteDoc(doc.ref);
          });
        };
        await deleteDocuments(toolsQuery);
        await deleteDocuments(booksQuery);
        await deleteDocuments(sportQuery);
        await deleteDocuments(usersQuery);
        const userRef = doc(db, `users/${user.uid}`);
        await deleteDoc(userRef);
        await deleteUser(user);
        await signOut(auth);
      }
    } catch (error) {
      //;
    }
  };
  const [photo, setPhoto] = useState<File | null>(null);
  const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setPhoto(file || null);
  };
  return (
    <UserDataContainer>
      {users.map((user) => (
        <div key={user.id}>
          {editingUser === user.id ? (
            <UserDataForm>
              {" "}
              <Label>
                <Input type="text" placeholder="Imię" defaultValue={user.firstName} id={`firstName${user.id}`} />
              </Label>
              <Label>
                <Input type="text" placeholder="Nazwisko" defaultValue={user.lastName} id={`lastName${user.id}`} />
              </Label>
              <Label>
                <Input
                  type="text"
                  placeholder="Numer telefonu"
                  defaultValue={user.phoneNumber}
                  id={`phoneNumber${user.id}`}
                />
              </Label>
              <Label>
                <Input type="text" placeholder="Lokalizacja" defaultValue={user.location} id={`location${user.id}`} />
              </Label>
              <Label>
                <InputFile type="file" onChange={handleFileChange} id={`photo${user.id}`} />
              </Label>
              <ButtonS onClick={() => handleSave(user.id)}>Zapisz</ButtonS>
              <ButtonS onClick={() => setEditingUser("")}>Anuluj</ButtonS>
            </UserDataForm>
          ) : (
            <UserDataForm>
              <p>
                Imię: <b>{user.firstName}</b>
              </p>
              <p>
                Nazwisko: <b>{user.lastName}</b>
              </p>
              <p>
                Numer telefonu: <b>{user.phoneNumber}</b>
              </p>
              <p>
                Lokalizacja: <b>{user.location}</b>
              </p>
              <img src={user.photo} alt="User photo" />
              <p>
                Adres email: <b>{user.email}</b>
              </p>
              <ButtonS onClick={() => handleEdit(user.id)}>Edytuj</ButtonS>
              <ButtonS onClick={() => handleChangePassword(user.id)}>Zmień hasło</ButtonS>
              <Link to="/">
                <ButtonS onClick={handleDeleteAccount}>Usuń konto</ButtonS>
              </Link>
            </UserDataForm>
          )}
        </div>
      ))}
      {!users.length && (
        <div>
          <p>Brak danych użytkownika. Dodaj dane.</p>
          {addingUser ? (
            <div>
              <Label>
                Imię:
                <Input type="text" id="firstName" />
              </Label>
              <Label>
                Nazwisko:
                <Input type="text" id="lastName" />
              </Label>
              <Label>
                Numer telefonu:
                <Input type="text" id="phoneNumber" />
              </Label>
              <Label>
                Lokalizacja:
                <Input type="text" id="location" />
              </Label>
              <Label>
                Zdjęcie:
                <Input type="file" id="photo" accept="image/*" onChange={handlePhotoChange} />
              </Label>
              <ButtonM onClick={handleSaveUser}>Zapisz</ButtonM>
              <ButtonM onClick={() => setAddingUser(false)}>Anuluj</ButtonM>
            </div>
          ) : (
            <ButtonM onClick={handleAddUser}>Dodaj dane</ButtonM>
          )}
        </div>
      )}
    </UserDataContainer>
  );
};
