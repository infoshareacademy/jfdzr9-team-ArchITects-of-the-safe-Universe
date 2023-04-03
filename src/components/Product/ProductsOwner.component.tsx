import { collection, CollectionReference, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState, useContext } from "react";
import { db } from "../../utils/firebase/firebase.config";
import { ProductProps } from "../AddProductPage/AddNewProduct.component";
import { Arrow, Container, ContainerPhoto, ContainerText, ProductContainer } from "../Products/Product.styled";
import { Carousel } from "@trendyol-js/react-carousel";
import { AuthContext } from "../../Context/AuthContext";

const imageArrowLeft = new URL("../../assets/arrow-left.svg", import.meta.url).href;
const imageArrowRight = new URL("../../assets/arrow-right.svg", import.meta.url).href;

export const ProductsOwner = () => {
  const [products, setProducts] = useState<(ProductProps & { id: string })[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { currentUser } = useContext(AuthContext);

  const getProducts = async () => {
    try {
      const productsCollection = collection(db, "books") as CollectionReference<ProductProps>;
      const q = query(productsCollection, where("email", "==", currentUser?.email));
      const querySnapshot = await getDocs<ProductProps>(q);
      const products = querySnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      setProducts(products);
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
