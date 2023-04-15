import { collection, CollectionReference, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState, useContext } from "react";
import { db } from "../../utils/firebase/firebase.config";
import { ProductProps } from "../AddProductPage/AddNewProduct.component";
import { Arrow, Container, ContainerPhoto, ContainerText, ProductContainer } from "../Products/Product.styled";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { AuthContext } from "../../Context/AuthContext";

const imageArrowLeft = new URL("../../assets/arrow-left.svg", import.meta.url).href;
const imageArrowRight = new URL("../../assets/arrow-right.svg", import.meta.url).href;

export const ProductsOwner = () => {
  const [products, setProducts] = useState<(ProductProps & { id: string })[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { currentUser } = useContext(AuthContext);
  const getProducts = async () => {
    try {
      const booksCollection = collection(db, "books") as CollectionReference<ProductProps>;
      const sportCollection = collection(db, "Sport") as CollectionReference<ProductProps>;
      const toolsCollection = collection(db, "Tools") as CollectionReference<ProductProps>;
      const booksQuery = currentUser
        ? query(booksCollection, where("email", "==", currentUser.email))
        : booksCollection;
      const sportQuery = currentUser
        ? query(sportCollection, where("email", "==", currentUser.email))
        : sportCollection;
      const toolsQuery = currentUser
        ? query(toolsCollection, where("email", "==", currentUser.email))
        : toolsCollection;
      const [booksSnapshot, sportSnapshot, toolsSnapshot] = await Promise.all([
        getDocs<ProductProps>(booksQuery),
        getDocs<ProductProps>(sportQuery),
        getDocs<ProductProps>(toolsQuery),
      ]);

      const books = booksSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      const sport = sportSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      const tools = toolsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setProducts([...books, ...sport, ...tools]);
    } catch (error) {
      console.error("Error fetching products: ", error);
    }
  };
  useEffect(() => {
    setIsLoading(true);
    getProducts().then(() => {
      setIsLoading(false);
    });
  }, []);
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
            items: 6,

            partialVisibilityGutter: 40,
          },
          desktop: {
            breakpoint: {
              max: 1400,
              min: 1100,
            },
            items: 5,

            partialVisibilityGutter: 40,
          },
          smallDesktop: {
            breakpoint: {
              max: 1100,
              min: 700,
            },
            items: 4,

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
              min: 464,
            },
            items: 3,
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
        {products.map(({ id, name, author, img }) => (
          <Container key={id}>
            <ContainerPhoto>
              {img ? (
                <img src={img} alt={name} onError={handleImageLoadError} />
              ) : (
                <img src="https://via.placeholder.com/150" alt="Placeholder" />
              )}
            </ContainerPhoto>
            <ContainerText>
              <h3>{name}</h3>
              <h5>{author}</h5>
            </ContainerText>
          </Container>
        ))}
      </Carousel>
    </ProductContainer>
  );
};
