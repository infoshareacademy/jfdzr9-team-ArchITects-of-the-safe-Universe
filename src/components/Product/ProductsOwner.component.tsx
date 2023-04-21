import {
  collection,
  CollectionReference,
  deleteDoc,
  doc,
  getDocs,
  getDoc,
  onSnapshot,
  query,
  where,
  setDoc,
  DocumentReference,
} from "firebase/firestore";
import { useEffect, useState, useContext } from "react";
import { db } from "../../utils/firebase/firebase.config";
import { ProductProps } from "../AddProductPage/AddNewProduct.component";
import { ContainerPhoto, ContainerText, UserContainer, UserProductContainer } from "../Products/Product.styled";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { AuthContext } from "../../Context/AuthContext";
import { ButtonS } from "../Buttons/Button.styled";

export const ProductsOwner = () => {
  const [books, setBooks] = useState<(ProductProps & { id: string; isReserved: boolean })[]>([]);
  const [tools, setTools] = useState<(ProductProps & { id: string; isReserved: boolean })[]>([]);
  const [sport, setSport] = useState<(ProductProps & { id: string; isReserved: boolean })[]>([]);
  const [deletedProducts, setDeletedProducts] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { currentUser } = useContext(AuthContext);
  const [status, setStatus] = useState("Dostępne");
  useEffect(() => {
    //
  }, [status]);
  const handleStatusUpdate = async (id: string) => {
    try {
      const booksRef = collection(db, "books");
      const bookDocRef = doc(booksRef, id);
      const bookDoc = await getDoc(bookDocRef);
      const currentStatus = bookDoc?.data()?.status;
      const newStatus = currentStatus === "Dostępne" ? "Niedostępne" : "Dostępne";
      await setDoc(bookDocRef, { status: newStatus }, { merge: true });
      const toolsRef = collection(db, "Tools");
      const toolDocRef = doc(toolsRef, id);
      await setDoc(toolDocRef, { status: newStatus }, { merge: true });
      const sportRef = collection(db, "Sport");
      const sportDocRef = doc(sportRef, id);
      await setDoc(sportDocRef, { status: newStatus }, { merge: true });
      setStatus(newStatus);
      window.location.reload();
    } catch (error) {
      //;
    }
  };
  const getProducts = async () => {
    if (!currentUser) return;
    try {
      const booksCollection = collection(db, "books") as CollectionReference<ProductProps>;
      const sportCollection = collection(db, "Sport") as CollectionReference<ProductProps>;
      const toolsCollection = collection(db, "Tools") as CollectionReference<ProductProps>;
      const booksQuery = query(booksCollection, where("email", "==", currentUser.email));
      const sportQuery = query(sportCollection, where("email", "==", currentUser.email));
      const toolsQuery = query(toolsCollection, where("email", "==", currentUser.email));
      const [booksSnapshot, sportSnapshot, toolsSnapshot] = await Promise.all([
        getDocs<ProductProps>(booksQuery),
        getDocs<ProductProps>(sportQuery),
        getDocs<ProductProps>(toolsQuery),
      ]);
      setBooks(booksSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data(), isReserved: false })));
      setSport(sportSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data(), isReserved: false })));
      setTools(toolsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data(), isReserved: false })));
    } catch (error) {
      //
    }
  };
  useEffect(() => {
    setIsLoading(true);
    getProducts().then(() => {
      setIsLoading(false);
    });
  }, [currentUser]);

  useEffect(() => {
    //
  }, [books]);
  useEffect(() => {
    const unsubBooks = onSnapshot(collection(db, "books") as CollectionReference<ProductProps>, () => {
      //
    });
    const unsubSport = onSnapshot(collection(db, "Sport") as CollectionReference<ProductProps>, () => {
      //
    });
    const unsubTools = onSnapshot(collection(db, "Tools") as CollectionReference<ProductProps>, () => {
      //
    });
    return () => {
      unsubBooks();
      unsubTools();
      unsubSport();
    };
  }, []);
  const handleDelete = async (id: string) => {
    try {
      await deleteDoc(doc(db, "books", id) as DocumentReference<ProductProps>);
      await deleteDoc(doc(db, "Tools", id) as DocumentReference<ProductProps>);
      await deleteDoc(doc(db, "Sport", id) as DocumentReference<ProductProps>);
      setDeletedProducts([...deletedProducts, id]);
      setBooks(books.filter((book) => book.id !== id));
      setTools(tools.filter((tool) => tool.id !== id));
      setSport(sport.filter((sport) => sport.id !== id));
      window.location.reload();
    } catch (error) {
      //;
    }
  };
  const handleImageLoadError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    const target = event.target as HTMLImageElement;
    target.src = "https://via.placeholder.com/150";
  };
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <UserProductContainer>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        focusOnSelect={false}
        minimumTouchDrag={80}
        responsive={{
          largeDesktop: {
            breakpoint: {
              max: 3000,
              min: 1400,
            },
            items: 5,

            partialVisibilityGutter: 40,
          },
          desktop: {
            breakpoint: {
              max: 1400,
              min: 1025,
            },
            items: 5,

            partialVisibilityGutter: 40,
          },
          smallDesktop: {
            breakpoint: {
              max: 1024,
              min: 701,
            },
            items: 3,

            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 700,
              min: 465,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        slidesToSlide={1}
        swipeable
      >
        {[...books, ...tools, ...sport].map(({ id, name, author, img, status }) => (
          <UserContainer key={id}>
            <ContainerPhoto>
              <>
                {img ? (
                  <img src={img} alt={name} onError={handleImageLoadError} />
                ) : (
                  <img src="https://via.placeholder.com/150" alt="Placeholder" />
                )}
              </>
            </ContainerPhoto>
            <ContainerText>
              <h3>{name}</h3>
              <h5>{author}</h5>
            </ContainerText>
            <ButtonS onClick={() => handleDelete(id)}>Usuń z bazy</ButtonS>
            <ButtonS onClick={() => handleStatusUpdate(id)}>{status}</ButtonS>
          </UserContainer>
        ))}
      </Carousel>
    </UserProductContainer>
  );
};
