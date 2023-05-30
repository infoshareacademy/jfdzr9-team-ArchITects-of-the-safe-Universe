import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { db, storage } from "../../utils/firebase/firebase.config";
import { ButtonM, ButtonS } from "../Buttons/Button.styled";
import { FormContainer, FormGroupImg, Input, InputFile, TextArea } from "./AddNewProduct.styled";
import { useForm, Controller } from "react-hook-form";
import { Title } from "../../UI/Title.styled";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";

export type ProductProps = {
  description: string;
  img: string;
  location: string;
  name: string;
  email: string;
};

export const AddNewProductTools = () => {
  const [success, setSuccess] = useState(false);
  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<Partial<ProductProps>>();
  const [imageUrl, setImageUrl] = useState("");
  const [file, setFile] = useState<File | undefined>(undefined);

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
    const productWithUserEmail = { ...product, email: currentUser.email, status: "Dostępne" };
    const productRef = collection(db, "Tools");
    await addDoc(productRef, productWithUserEmail);
  };

  return (
    <>
      {success ? (
        <Title>Produkt został dodany</Title>
      ) : (
        <FormContainer onSubmit={onSubmit}>
          <Controller
            name="name"
            control={control}
            rules={{ required: "Nazwa jest wymagana" }}
            render={({ field }) => (
              <>
                {errors.name && <span style={{ color: "red" }}>{errors.name.message}</span>}
                <Input placeholder="Nazwa" type={"text"} {...field} />
              </>
            )}
          />

          <Controller
            name="location"
            control={control}
            rules={{ required: "Lokalizacja jest wymagana" }}
            render={({ field }) => (
              <>
                {errors.location && <span style={{ color: "red" }}>{errors.location.message}</span>}
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
                {errors.description && <span style={{ color: "red" }}>{errors.description.message}</span>}
                <TextArea placeholder="Opis" rows={5} {...field} />
              </>
            )}
          />

          <FormGroupImg>
            <InputFile
              type="file"
              onChange={(e) => {
                e.preventDefault();
                if (!e.target.files) return;
                const selectedFile = e.target.files?.[0];
                if (!selectedFile.type.includes("image/")) {
                  alert("Please select an image file (jpg, png, gif)");
                  return;
                }
                setFile(selectedFile);
              }}
            />

            <ButtonS
              onClick={(e) => {
                e.preventDefault();
                uploadImage();
              }}
            >
              Dodaj zdjęcie
            </ButtonS>
            {imageUrl && <img src={imageUrl} alt="uploaded" style={{ maxWidth: "200px", maxHeight: "200px" }} />}
          </FormGroupImg>

          <Controller
            name="img"
            control={control}
            rules={{ required: "Dodaj zdjęcie" }}
            render={({ field }) => (
              <>
                {errors.img && <span style={{ color: "red" }}>{errors.img.message}</span>}
                <Input placeholder="Zdjęcie" type={"hidden"} {...field} />
              </>
            )}
          />
          <ButtonM type="submit">Dodaj</ButtonM>
        </FormContainer>
      )}
    </>
  );
};

export default AddNewProductTools;
