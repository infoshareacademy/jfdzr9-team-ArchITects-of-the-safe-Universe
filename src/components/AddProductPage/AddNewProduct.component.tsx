import { addDoc, collection, CollectionReference } from "firebase/firestore";
import { useState } from "react";
import { db, storage } from "../../utils/firebase/firebase.config";
import { ButtonM, ButtonS } from "../Buttons/Button.styled";
import { FormContainer, FormGroupNextTo, Input, TextArea } from "./AddNewProduct.styled";
import { useForm, Controller } from "react-hook-form";
import { Title } from "../../UI/Title.styled";
import CategoryDropdown from "../../CategoryDropdown/CategoryDropdown";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

type ProductProps = {
  author: string;
  description: string;
  img: string;
  kind: string;
  location: string;
  name: string;
  covers: string;
  cover: string;
};

export const AddNewProduct = () => {
  const [products, setProducts] = useState<(ProductProps & { id: string })[]>([]);
  const productsCollection = collection(db, "books") as CollectionReference<ProductProps>;
  const [success, setSuccess] = useState(false);
  const { handleSubmit, control, setValue } = useForm<Partial<ProductProps>>();
  const [description, setDescription] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const imagesRef = ref(storage, "covers/");
  const [file, setFile] = useState<File | null>(null);

  const onSubmit = handleSubmit((data) => {
    addProduct(data).then(() => {
      setSuccess(true);
    });
  });

  const uploadImage = () => {
    if (!file) return;
    const imageRef = ref(storage, `covers/${file.name}`);
    uploadBytes(imageRef, file).then((snapShot) => {
      getDownloadURL(snapShot.ref).then((url) => {
        setImageUrl(url);
        setValue("cover", url);
      });
    });
  };

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
          <div>
            <input
              type="file"
              onChange={(e) => {
                e.preventDefault();
                if (!e.target.files) return;
                setFile(e.target.files[0]);
              }}
            />
            <ButtonS
              onClick={(e) => {
                e.preventDefault();
                uploadImage();
              }}
            >
              Załaduj obrazek
            </ButtonS>
          </div>
          <Controller
            name="cover"
            control={control}
            render={({ field }) => <Input placeholder="Okładka" type={"hidden"} {...field} />}
          />
          <FormGroupNextTo>
            <ButtonM type="submit">Dodaj</ButtonM>
          </FormGroupNextTo>
        </FormContainer>
      )}
    </>
  );
};
