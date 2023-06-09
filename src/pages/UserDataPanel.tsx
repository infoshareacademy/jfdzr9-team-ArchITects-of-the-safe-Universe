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
import { db } from "../utils/firebase/firebase.config";
import { Link } from "react-router-dom";
import { DocumentData } from "@firebase/firestore-types";
import { Input } from "../components/AddProductPage/AddNewProduct.styled";
import {
  EmptyDataContainer,
  UserDataContainer,
  UserDataForm,
  UserDataInfo,
} from "../components/UserData/UserData.styled";
import { ButtonS, ButtonM } from "../components/Buttons/Button.styled";

export const UserDataPanel = () => {
  const [users, setUsers] = useState<
    Array<{
      id: string;
      firstName: string;
      lastName: string;
      phoneNumber: string;
      location: string;
      email: string;
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

      if (!firstNameInput || !lastNameInput || !phoneNumberInput || !locationInput) {
        throw new Error("Input element not found");
      }

      if (phoneNumberValue.length < 8 || phoneNumberValue.length > 9) {
        throw new Error("Numer telefonu powinien zawierać od 8 do 9 cyfr.");
      }

      await updateDoc(userRef, {
        firstName: firstNameValue,
        lastName: lastNameValue,
        phoneNumber: phoneNumberValue,
        location: locationValue,
      });

      setEditingUser("");
    } catch (error: any) {
      console.error(error);
      alert(error.message);
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
    } else if (phoneNumber.length < 8 || phoneNumber.length > 9) {
      alert("Numer telefonu powinien składać się z 8 lub 9 cyfr.");
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

    if (!email) {
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
      });
      setAddingUser(false);
      setUserDataExists(true);
    } catch (error) {
      //;
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

  return (
    <UserDataContainer>
      {users.map((user) => (
        <div key={user.id}>
          {editingUser === user.id ? (
            <UserDataForm>
              {" "}
              <Input
                type="text"
                placeholder="Imię"
                defaultValue={user.firstName}
                id={`firstName${user.id}`}
                onKeyPress={(event) => {
                  const pattern = /[a-zA-ZęóąśłżźćńĘÓĄŚŁŻŹĆŃ]/;
                  if (!pattern.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
              <Input
                type="text"
                placeholder="Nazwisko"
                defaultValue={user.lastName}
                id={`lastName${user.id}`}
                onKeyPress={(event) => {
                  const pattern = /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ-]+$/;
                  if (!pattern.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
              <Input
                type="text"
                placeholder="Numer telefonu"
                defaultValue={user.phoneNumber}
                id={`phoneNumber${user.id}`}
                maxLength={9}
                required
                onKeyPress={(event) => {
                  const pattern = /[0-9]/;
                  if (!pattern.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
              <Input
                type="text"
                placeholder="Lokalizacja"
                defaultValue={user.location}
                id={`location${user.id}`}
                maxLength={20}
                onKeyPress={(event) => {
                  const pattern = /^[a-zA-Z\s]*$/;
                  if (!pattern.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
              <ButtonS onClick={() => handleSave(user.id)}>Zapisz</ButtonS>
              <ButtonS onClick={() => setEditingUser("")}>Anuluj</ButtonS>
            </UserDataForm>
          ) : (
            <UserDataInfo>
              <div className="info">
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
                <p>
                  Adres email: <b>{user.email}</b>
                </p>
              </div>
              <div className="buttons">
                <ButtonS onClick={() => handleEdit(user.id)}>Edytuj</ButtonS>
                <ButtonS onClick={() => handleChangePassword(user.id)}>Zmień hasło</ButtonS>
                <Link to="/">
                  <ButtonS onClick={handleDeleteAccount}>Usuń konto</ButtonS>
                </Link>
              </div>
            </UserDataInfo>
          )}
        </div>
      ))}
      {!users.length && (
        <EmptyDataContainer>
          <p>Brak danych użytkownika. Dodaj dane.</p>
          {addingUser ? (
            <UserDataForm>
              <Input
                type="text"
                id="firstName"
                placeholder="Imię"
                onKeyPress={(event) => {
                  const pattern = /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+$/;
                  if (!pattern.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />

              <Input
                type="text"
                id="lastName"
                placeholder="Nazwisko"
                onKeyPress={(event) => {
                  const pattern = /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ-]+$/;
                  if (!pattern.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />

              <Input
                type="text"
                id="phoneNumber"
                placeholder="Numer telefonu"
                maxLength={9}
                required
                onKeyPress={(event) => {
                  const pattern = /^\d$/;
                  const phoneNumberInput = event.target as HTMLInputElement;
                  const phoneNumber = phoneNumberInput.value;
                  if (!pattern.test(event.key) || phoneNumber.length >= 9) {
                    event.preventDefault();
                  }
                }}
              />

              <Input
                type="text"
                id="location"
                placeholder="Lokalizacja"
                onKeyPress={(event) => {
                  const pattern = /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ\s]+$/;
                  if (!pattern.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
              <ButtonM onClick={handleSaveUser}>Zapisz</ButtonM>
            </UserDataForm>
          ) : (
            <ButtonM onClick={handleAddUser}>Dodaj dane</ButtonM>
          )}
        </EmptyDataContainer>
      )}
    </UserDataContainer>
  );
};
