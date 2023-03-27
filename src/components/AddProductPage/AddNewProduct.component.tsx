import {
  addDoc,
  collection,
  CollectionReference,
  getDoc,
  doc,
  onSnapshot,
  QuerySnapshot,
  updateDoc,
} from "firebase/firestore";
import { FormEvent, useEffect, useState } from "react";
import { db } from "../../utils/firebase/firebase.config";
import { ButtonM } from "../Buttons/Button.styled";
import {
  FormContainer,
  FormGroup,
  FormGroupImg,
  FormGroupNextTo,
  Input,
  Label,
  TextArea,
} from "./AddNewProduct.styled";
import { useForm, Controller } from "react-hook-form";
import { Title } from "../../UI/Title.styled";

type ProductProps = {
  author: string;
  description: string;
  img: string;
  kind: string;
  location: string;
  name: string;
};

type FormElements = HTMLFormControlsCollection & {
  author: HTMLInputElement;
  description: HTMLInputElement;
  img: HTMLInputElement;
  kind: HTMLInputElement;
  location: HTMLInputElement;
  name: HTMLInputElement;
};

type AddNewProductProps = HTMLFormElement & {
  elements: FormElements;
};

export const AddNewProduct = () => {
  const [products, setProducts] = useState<(ProductProps & { id: string })[]>([]);
  const [draftId, setDraftId] = useState<string | null>(null);
  const productsCollection = collection(db, "books") as CollectionReference<ProductProps>;
  const [success, setSuccess] = useState(false);
  const { handleSubmit, control, setValue } = useForm<Partial<ProductProps>>();

  const getProducts = (querySnapshot: QuerySnapshot<ProductProps>) => {
    const products: (ProductProps & { id: string })[] = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return products;
  };

  const getFormData = (event: FormEvent<AddNewProductProps>) => {
    event.preventDefault();
    const { author, description, img, kind, location, name } = event.currentTarget.elements;

    const product: ProductProps = {
      author: author.value,
      description: description.value,
      img: img.value,
      kind: kind.value,
      location: location.value,
      name: name.value,
    };

    event.currentTarget.reset();
    return product;
  };

  const onSubmit = handleSubmit((data) => {
    addProduct(data).then(() => {
      setSuccess(true);
    });
  });

  const addProduct = async (product: Partial<ProductProps>) => {
    const productRef = collection(db, "books");
    await addDoc(productRef, product);
  };

  useEffect(() => {
    onSnapshot(productsCollection, (querySnapshot) => {
      const products = getProducts(querySnapshot);
      setProducts(products);
    });
  }, []);

  return (
    <>
      {success ? (
        <Title>You just added new product</Title>
      ) : (
        <FormContainer onSubmit={onSubmit}>
          <Controller
            name="name"
            control={control}
            render={({ field }) => <Input placeholder="Tytuł" type={"text"} {...field} />}
          />
          <Controller
            name="author"
            control={control}
            render={({ field }) => <Input placeholder="Autor" type={"text"} {...field} />}
          />
          <Controller
            name="kind"
            control={control}
            render={({ field }) => <Input placeholder="Gatunek" type={"text"} {...field} />}
          />
          <Controller
            name="location"
            control={control}
            render={({ field }) => <Input placeholder="Lokalizacja" type={"text"} {...field} />}
          />
          <Controller
            name="description"
            control={control}
            render={({ field }) => <Input placeholder="Opis" type={"text"} {...field} />}
          />

          <FormGroupNextTo>
            <ButtonM type="submit">Dodaj</ButtonM>
          </FormGroupNextTo>
        </FormContainer>
      )}
    </>
  );
};
