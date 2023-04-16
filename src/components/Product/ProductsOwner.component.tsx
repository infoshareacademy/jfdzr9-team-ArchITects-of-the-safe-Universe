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
import { Arrow, Container, ContainerPhoto, ContainerText, ProductContainer } from "../Products/Product.styled";
import { Carousel } from "@trendyol-js/react-carousel";
import { AuthContext } from "../../Context/AuthContext";
import { ButtonD } from "../Buttons/Button.styled";

const imageArrowLeft = new URL("../../assets/arrow-left.svg", import.meta.url).href;
const imageArrowRight = new URL("../../assets/arrow-right.svg", import.meta.url).href;
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
      setStatus(newStatus);
      window.location.reload();
    } catch (error) {
      // handle error
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
    <ProductContainer>
      <Carousel
        show={6}
        slide={1}
        leftArrow={
          <Arrow>
            <img src={imageArrowLeft} alt="Left" />
          </Arrow>
        }
        rightArrow={
          <Arrow>
            <img src={imageArrowRight} alt="Right" />
          </Arrow>
        }
        swiping={true}
      >
        {[...books, ...tools, ...sport].map(({ id, name, author, img, status }) => (
          <Container key={id}>
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
              <h1>{status}</h1>
            </ContainerText>
            <ButtonD onClick={() => handleDelete(id)}>Usuń z bazy</ButtonD>
            <ButtonD onClick={() => handleStatusUpdate(id)}>{status}</ButtonD>
          </Container>
        ))}
      </Carousel>
    </ProductContainer>
  );
};
