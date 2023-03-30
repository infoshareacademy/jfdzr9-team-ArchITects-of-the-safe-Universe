import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { db } from "../../utils/firebase/firebase.config";
import { ButtonM } from "../Buttons/Button.styled";
import { FormContainer, FormGroupNextTo, Input, TextArea } from "./AddNewOpinion.styled";
import { useForm, Controller } from "react-hook-form";
import { Title } from "../../UI/Title.styled";

type OpinionProps = {
  name: string;
  describe: string;
  rating: number;
};

export const AddNewOpinion = () => {
  const [success, setSuccess] = useState(false);
  const {
    handleSubmit,
    control,

    formState: { errors },
  } = useForm<Partial<OpinionProps>>();

  const onSubmit = handleSubmit((data) => {
    addOpinion(data).then(() => {
      setSuccess(true);
    });
  });

  const addOpinion = async (opinion: Partial<OpinionProps>) => {
    const opinionRef = collection(db, "opinions");
    await addDoc(opinionRef, opinion);
  };

  return (
    <>
      {success ? (
        <Title>You just added new opinion</Title>
      ) : (
        <FormContainer onSubmit={onSubmit}>
          <Controller
            name="name"
            control={control}
            rules={{ required: "Imię jest wymagane" }}
            render={({ field }) => (
              <>
                {errors.name && <span>{errors.name.message}</span>}
                <Input placeholder="Imię" type={"text"} {...field} />
              </>
            )}
          />
          <Controller
            name="describe"
            control={control}
            rules={{ required: "Opinia jest wymagana" }}
            render={({ field }) => (
              <>
                {errors.describe && <span>{errors.describe.message}</span>}
                <TextArea placeholder="Opinia" {...field} />
              </>
            )}
          />
          <Controller
            name="rating"
            control={control}
            rules={{ required: "Podaj wartość od 1 do 5" }}
            render={({ field }) => (
              <>
                {errors.rating && <span>{errors.rating.message}</span>}
                <Input placeholder="Ocena" type={"number"} min="1" max="5" {...field} />
              </>
            )}
          />
          <FormGroupNextTo>
            <ButtonM type="submit">Dodaj</ButtonM>
          </FormGroupNextTo>
        </FormContainer>
      )}
    </>
  );
};