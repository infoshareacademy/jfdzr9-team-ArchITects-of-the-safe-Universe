import { doc, DocumentReference, getDoc } from "firebase/firestore";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { db } from "../utils/firebase/firebase.config";
import { ProductProps } from "../components/AddProductPage/AddNewProduct.component";
import { OrangeButton } from "../components/Buttons/Button.styled";
import {
  OneSingleProductStyle,
  OneSingleProductContainer,
} from "../components/OneSingleProduct/OneSingleProduct.styled";
import { AllPhotos } from "../components/OneSingleProduct/OneSingleProduct.styled";
import { ContactButton } from "../ContactButton/ContactButton.component";

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
            setProduct(docSnap.data() as ProductProps);
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
          <img src={product?.img} alt={product?.name} />
        </AllPhotos>
        <OneSingleProductContainer>
          <h3>{product?.name}</h3>
          <h4>{product?.author}</h4>
          <p>{product?.description}</p>
          <h4>{product?.location}</h4>
          <ContactButton email={product?.email} />
        </OneSingleProductContainer>
      </OneSingleProductStyle>
    </>
  );
};
