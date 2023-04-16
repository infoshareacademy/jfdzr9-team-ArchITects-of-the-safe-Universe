// import { Link } from "react-router-dom";
// import { ProductsOwner } from "../components/Product/ProductsOwner.component";
// import { ProductConteiner } from "../components/OneSingleProduct/OneSingleProduct.component";
// import { Products } from "../components/Product/Product.component";
// import { Container } from "../components/Product/Product.component";

import { doc, DocumentReference, getDoc } from "firebase/firestore";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { db } from "../utils/firebase/firebase.config";
import { ProductProps } from "../components/AddProductPage/AddNewProduct.component";
import { OrangeButton } from "../components/Buttons/Button.styled";
import {
  OneSingleProductStyle,
  OneSingleProductPhoto,
  OneSingleProductContainer,
} from "../components/OneSingleProduct/OneSingleProduct.styled";
import {
  AllPhotos,
  MainPhoto,
  OneSingleProductContainerButton,
} from "../components/OneSingleProduct/OneSingleProduct.styled";
import { RentingProductButton } from "../RentingProductButton/RentingProductButton.component";

export const OneSingleProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<ProductProps | undefined>(undefined);

  const getProduct = async () => {
    try {
      if (id) {
        const collectionNames = ["books", "Sport", "Tools"];
        const promises = collectionNames.map((collection) =>
          getDoc(doc(db, collection, id) as DocumentReference<ProductProps>),
        );
        const results = await Promise.all(promises);

        for (const docSnap of results) {
          if (docSnap.exists()) {
            setProduct(docSnap.data());
            break;
          }
        }
      }
    } catch (error) {
      setProduct(undefined);
      console.error("Error fetching products: ", error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <OneSingleProductStyle>
        <AllPhotos>
          <MainPhoto>
            <img src={product?.img} alt={product?.name} />
          </MainPhoto>
        </AllPhotos>

        <OneSingleProductContainer>
          <OneSingleProductPhoto>
            <OneSingleProductContainer>
              <h1>
                <p>{product?.name}</p>
              </h1>
            </OneSingleProductContainer>

            {/* <OneSingleProductText>
              <h3>
                <p>{product?.author}</p>
              </h3>
            </OneSingleProductText> */}

            <OneSingleProductContainer>
              <p>
                <p>{product?.description}</p>
                <br />
                <h3>{product?.location}</h3>
              </p>
            </OneSingleProductContainer>
            <OneSingleProductContainerButton>
              <RentingProductButton />
            </OneSingleProductContainerButton>
          </OneSingleProductPhoto>
        </OneSingleProductContainer>
      </OneSingleProductStyle>
    </>
  );
};
