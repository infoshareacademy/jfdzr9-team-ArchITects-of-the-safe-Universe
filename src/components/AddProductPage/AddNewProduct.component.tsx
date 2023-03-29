import { addDoc, collection, CollectionReference } from "firebase/firestore";
import { useState } from "react";
import { db } from "../../utils/firebase/firebase.config";
import { ButtonM } from "../Buttons/Button.styled";
import { FormContainer, FormGroupNextTo, Input, TextArea } from "./AddNewProduct.styled";
import { useForm, Controller } from "react-hook-form";
import { Title } from "../../UI/Title.styled";
import CategoryDropdown from "../../CategoryDropdown/CategoryDropdown";

type ProductProps = {
  author: string;
  description: string;
  img: string;
  kind: string;
  location: string;
  name: string;
};

export const AddNewProduct = () => {
  const [products, setProducts] = useState<(ProductProps & { id: string })[]>([]);
  const productsCollection = collection(db, "books") as CollectionReference<ProductProps>;
  const [success, setSuccess] = useState(false);
  const { handleSubmit, control, setValue } = useForm<Partial<ProductProps>>();
  const [description, setDescription] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);

  const onSubmit = handleSubmit((data) => {
    addProduct(data).then(() => {
      setSuccess(true);
    });
  });

  const addProduct = async (product: Partial<ProductProps>) => {
    const productRef = collection(db, "books");
    await addDoc(productRef, product);
  };

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
            render={({ field: { value, onChange } }) => (
              <CategoryDropdown value={value} onChange={onChange} label={""} />
            )}
          />
          <Controller
            name="location"
            control={control}
            render={({ field }) => <Input placeholder="Lokalizacja" type={"text"} {...field} />}
          />
          <Controller
            name="description"
            control={control}
            render={({ field }) => <TextArea placeholder="Opis" {...field} />}
          />
          <FormGroupNextTo>
            <ButtonM type="submit">Dodaj</ButtonM>
          </FormGroupNextTo>
        </FormContainer>
      )}
    </>
  );
};
