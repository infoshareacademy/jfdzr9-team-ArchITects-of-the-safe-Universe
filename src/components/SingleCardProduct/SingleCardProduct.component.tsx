import { collection, CollectionReference, getDocs, QuerySnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../utils/firebase/firebase.config";
import { ProductProps } from "../AddProductPage/AddNewProduct.component";
import { Container, ContainerPhoto, ContainerText, ProductContainer } from "../Products/Product.styled";

export const SingleCardProduct = () => {
  const [products, setProducts] = useState<(ProductProps & { id: string })[]>([]);

  const getProducts = () => {
    const productsCollection = collection(db, "books") as CollectionReference<ProductProps>;
    getDocs<ProductProps>(productsCollection).then((querySnapshot) => {
      const products = querySnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      setProducts(products.slice(0, 6));
    });
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductContainer>
      {products.map(({ id, name, author, img }) => (
        <Container key={id}>
          <ContainerPhoto>{img && <img src={img} alt={name} />}</ContainerPhoto>
          <ContainerText>
            <h3>{name}</h3>
            <h5>{author}</h5>
          </ContainerText>
        </Container>
      ))}
    </ProductContainer>
  );
};
