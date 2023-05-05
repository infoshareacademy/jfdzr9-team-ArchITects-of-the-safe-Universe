import { useEffect, useState } from "react";
import { Title } from "../../UI/Title.styled";
import { FormContainer, Input, TextArea } from "./Contact.styled";
import { ButtonM } from "../Buttons/Button.styled";
import { Controller, useForm } from "react-hook-form";
import { useAuth } from "../../utils/firebase/auth";
import { useLocation } from "react-router";
// import axios from "axios";
import { MailDataRequired, send } from "@sendgrid/mail";
import sgMail from "@sendgrid/mail";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

interface ContactFormData {
  email: string;
  name: string;
  message: string;
}

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const { currentUser } = useAuth();
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<ContactFormData>();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get("email") || "";
  window.addEventListener("load", () => {
    setValue("email", email);
  });

  // const sendEmailMessage = async (formData: ContactFormData) => {
  //   const { email, name, message } = formData;

  //   const msg: MailDataRequired = {
  //     to: email,
  //     from: currentUser?.email ?? "",
  //     subject: "Wiadomość ze strony internetowej",
  //     text: `${name} napisał(a):\n\n${message}`,
  //   };
  //   try {
  //     setLoading(true);
  //     // await sgMail.send({ ...msg, from: currentUser?.email ?? "" });
  //     await sgMail.send(msg);
  //     setSuccess(true);
  //   } catch (error) {
  //     console.error(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <>
      {success ? (
        <Title>Wiadomość została wysłana</Title>
      ) : (
        <FormContainer>
          <Controller
            name="email"
            control={control}
            rules={{ required: "E-mail jest wymagany" }}
            defaultValue={email || ""}
            render={({ field }) => (
              <>
                {errors.email && <span>{errors.email.message}</span>}{" "}
                <span>
                  Chcąć skorzystać z oferty wypożyczenia przedmiotu?
                  <br />
                  Skontaktuj się z właścicielem produktu pod podanym poniżej adresem e-mail.
                </span>{" "}
                <br />
                <Input
                  placeholder="E-mail"
                  type={"text"}
                  {...field}
                  onChange={(e) => setValue("email", e.target.value)}
                />{" "}
              </>
            )}
          />
          <br />
          <span>
            Wypożyczanie przedmiotów to świetny sposób na zaoszczędzenie pieniędzy i zwiększenie dostępności potrzebnych
            nam rzeczy. <br />
            Jednak przed wypożyczeniem należy ustalić kilka ważnych kwestii.
          </span>
          <br />
          <span>
            Po pierwsze, należy uzgodnić formę realizacji wypożyczenia. <br />
            Czy przedmiot zostanie odebrany osobiście, czy może zostanie dostarczony do wskazanego miejsca?
          </span>
          <br />
          <span>
            Po drugie, ważne jest ustalenie okresu wypożyczenia. <br />
            Należy precyzyjnie określić, na jaki czas chcemy wypożyczyć dany produkt. <br /> W przypadku przedłużenia
            terminu wypożyczenia, należy pamiętać o wcześniejszym uzgodnieniu z wypożyczającym.
          </span>
          <br />
          <span>
            Po trzecie, nie zapominajmy o szanowaniu wypożyczonego przedmiotu. <br />
            Powinniśmy dbać o niego tak, jakby był naszą własnością, a w przypadku jakichkolwiek uszkodzeń lub
            zniszczeń, poinformować o tym natychmiast wypożyczającego.
          </span>
          <br />
          <span>
            Podsumowując, przed wypożyczeniem przedmiotu, warto ustalić formę realizacji wypożyczenia, okres
            wypożyczenia oraz zwrócić uwagę na konieczność szanowania wypożyczonej rzeczy.
            <br /> W ten sposób unikniemy nieporozumień i będziemy mogli cieszyć się udaną i owocną współpracą z
            wypożyczającym.
          </span>
          {/* <Controller
            name="name"
            control={control}
            rules={{ required: "Imię jest wymagane" }}
            defaultValue={currentUser?.displayName || ""}
            render={({ field }) => (
              <>
                {errors.name && <span>{errors.name.message}</span>}
                <span>Podpisz się używając Twoich danych z konta użtkownika</span>
                <Input placeholder="Imię" type={"text"} {...field} />
              </>
            )}
          /> */}
        </FormContainer>
      )}
    </>
  );
};

export default Contact;
