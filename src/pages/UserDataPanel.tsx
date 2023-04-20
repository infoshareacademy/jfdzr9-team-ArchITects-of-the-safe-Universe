import {
  collection,
  onSnapshot,
  doc,
  updateDoc,
  getDoc,
  addDoc,
  query,
  where,
  getDocs,
  deleteDoc,
  getFirestore,
  Query,
} from "firebase/firestore";
import { getAuth, sendPasswordResetEmail, deleteUser, signOut } from "firebase/auth";
import { useState, useEffect } from "react";
import { db } from "../utils/firebase/firebase.config";
import { Link } from "react-router-dom";
import { DocumentData } from "@firebase/firestore-types";

export const UserDataPanel = () => {
  const [users, setUsers] = useState<
    Array<{ id: string; firstName: string; lastName: string; phoneNumber: string; location: string; email: string }>
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
      const firstNameValue = firstNameInput ? firstNameInput.value : "";
      const lastNameInput = document.getElementById(`lastName${userId}`) as HTMLInputElement;
      const lastNameValue = lastNameInput ? lastNameInput.value : "";
      const phoneNumberInput = document.getElementById(`phoneNumber${userId}`) as HTMLInputElement;
      const phoneNumberValue = phoneNumberInput ? phoneNumberInput.value : "";
      const locationInput = document.getElementById(`location${userId}`) as HTMLInputElement;
      const locationValue = locationInput ? locationInput.value : "";
      await updateDoc(userRef, {
        firstName: firstNameValue,
        lastName: lastNameValue,
        phoneNumber: phoneNumberValue,
        location: locationValue,
      });
      const userDoc = await getDoc(userRef);
      if (userDoc.exists()) {
        await updateDoc(userRef, {
          firstName: firstNameValue,
          lastName: lastNameValue,
          phoneNumber: phoneNumberValue,
          location: locationValue,
        });
      }
      setEditingUser("");
    } catch (error) {
      //
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

    if (!email) {
      //;
      return;
    }

    try {
      const userRef = collection(db, "users");
      await addDoc(userRef, { firstName, lastName, phoneNumber, location, email });
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
    <div>
      {users.map((user) => (
        <div key={user.id}>
          {editingUser === user.id ? (
            <div>
              {" "}
              <label>
                Imię:
                <input type="text" defaultValue={user.firstName} id={`firstName${user.id}`} />
              </label>
              <label>
                Nazwisko:
                <input type="text" defaultValue={user.lastName} id={`lastName${user.id}`} />
              </label>
              <label>
                Numer telefonu:
                <input type="text" defaultValue={user.phoneNumber} id={`phoneNumber${user.id}`} />
              </label>
              <label>
                Lokalizacja:
                <input type="text" defaultValue={user.location} id={`location${user.id}`} />
              </label>
              <button onClick={() => handleSave(user.id)}>Zapisz</button>
              <button onClick={() => setEditingUser("")}>Anuluj</button>
            </div>
          ) : (
            <div>
              <p>Imię: {user.firstName}</p>
              <p>Nazwisko: {user.lastName}</p>
              <p>Numer telefonu: {user.phoneNumber}</p>
              <p>Lokalizacja: {user.location}</p>
              <p>
                Adres email: <span>{user.email}</span>
              </p>
              <button onClick={() => handleEdit(user.id)}>Edytuj</button>
              <button onClick={() => handleChangePassword(user.id)}>Zmień hasło</button>
              <Link to="/">
                <button onClick={handleDeleteAccount}>Usuń konto</button>
              </Link>
            </div>
          )}
        </div>
      ))}
      {!users.length && (
        <div>
          <p>Brak danych użytkownika. Dodaj dane.</p>
          {addingUser ? (
            <div>
              <label>
                Imię:
                <input type="text" id="firstName" />
              </label>
              <label>
                Nazwisko:
                <input type="text" id="lastName" />
              </label>
              <label>
                Numer telefonu:
                <input type="text" id="phoneNumber" />
              </label>
              <label>
                Lokalizacja:
                <input type="text" id="location" />
              </label>
              <button onClick={handleSaveUser}>Zapisz</button>
              <button onClick={() => setAddingUser(false)}>Anuluj</button>
            </div>
          ) : (
            <button onClick={handleAddUser}>Dodaj dane</button>
          )}
        </div>
      )}
    </div>
  );
};
