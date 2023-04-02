import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { db, storage } from "../../utils/firebase/firebase.config";
import { ButtonM, ButtonS } from "../Buttons/Button.styled";
import { FormContainer, FormGroupImg, FormGroupNextTo, Input, InputFile, TextArea } from "./AddNewProduct.styled";
import { useForm, Controller } from "react-hook-form";
import { Title } from "../../UI/Title.styled";
import CategoryDropdown from "../../CategoryDropdown/CategoryDropdown";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";

export type ProductProps = {
  author: string;
  description: string;
  img: string;
  kind: string;
  location: string;
  name: string;
  email: string;
};

export const AddNewProduct = () => {
  const [success, setSuccess] = useState(false);
  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<Partial<ProductProps>>();
  const [imageUrl, setImageUrl] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const onSubmit = handleSubmit((data) => {
    addProduct(data).then(() => {
      setSuccess(true);
    });
  });

  const uploadImage = () => {
    if (!file) return;
    const imageRef = ref(storage, `img/${file.name}`);
    uploadBytes(imageRef, file).then((snapShot) => {
      getDownloadURL(snapShot.ref).then((url) => {
        setImageUrl(url);
        setValue("img", url);
      });
    });
  };

  const { currentUser } = useContext(AuthContext);

  const addProduct = async (product: Partial<ProductProps>) => {
    if (!currentUser) {
      throw new Error("User not authenticated");
    }
    const productWithUserEmail = { ...product, email: currentUser.email };
    const productRef = collection(db, "books");
    await addDoc(productRef, productWithUserEmail);
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
            rules={{ required: "Tytuł jest wymagany" }}
            render={({ field }) => (
              <>
                {errors.name && <span>{errors.name.message}</span>}
                <Input placeholder="Tytuł" type={"text"} {...field} />
              </>
            )}
          />
          <Controller
            name="author"
            control={control}
            rules={{ required: "Autor jest wymagany" }}
            render={({ field }) => (
              <>
                {errors.author && <span>{errors.author.message}</span>}
                <Input placeholder="Autor" type={"text"} {...field} />
              </>
            )}
          />
          <Controller
            name="kind"
            control={control}
            rules={{ required: "Wybierz kategorię" }}
            render={({ field: { value, onChange } }) => (
              <>
                {errors.kind && <span>{errors.kind.message}</span>}
                <CategoryDropdown value={value} onChange={onChange} label={""} />
              </>
            )}
          />
          <Controller
            name="location"
            control={control}
            rules={{ required: "Lokalizacja jest wymagana" }}
            render={({ field }) => (
              <>
                {errors.location && <span>{errors.location.message}</span>}
                <Input placeholder="Lokalizacja" type={"text"} {...field} />
              </>
            )}
          />
          <Controller
            name="description"
            control={control}
            rules={{ required: "Opis jest wymagany" }}
            render={({ field }) => (
              <>
                {errors.description && <span>{errors.description.message}</span>}
                <TextArea placeholder="Opis" rows={5} {...field} />
              </>
            )}
          />
          <FormGroupImg>
            <InputFile
              type="file"
              onChange={(e) => {
                const uploadedFile = e.target.files?.[0];
                setFile(uploadedFile);
              }}
            />
            <ButtonS type="button" onClick={uploadImage}>
              Dodaj zdjęcie
            </ButtonS>
            {imageUrl && <img src={imageUrl} alt="uploaded" style={{ maxWidth: "200px", maxHeight: "200px" }} />}
          </FormGroupImg>
          <FormGroupNextTo>
            <ButtonM type="submit">Dodaj</ButtonM>
          </FormGroupNextTo>
        </FormContainer>
      )}
    </>
  );
};

export default AddNewProduct;
