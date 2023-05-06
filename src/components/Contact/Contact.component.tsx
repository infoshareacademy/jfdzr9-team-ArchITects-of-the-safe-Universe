import { useState } from "react";
import { Title } from "../../UI/Title.styled";
import { FormContainer, Input } from "./Contact.styled";
import { Controller, useForm } from "react-hook-form";
import { useAuth } from "../../utils/firebase/auth";
import { useLocation } from "react-router";
// import axios from "axios";
// import { MailDataRequired, send } from "@sendgrid/mail";
// import sgMail from "@sendgrid/mail";
// import "firebase/compat/auth";

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
    getValues,
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
                <span className="title">Chcąć skorzystać z oferty wypożyczenia przedmiotu?</span>
                <br />
                <span className="title">
                  Skontaktuj się z właścicielem produktu pod podanym poniżej adresem e-mail:
                  {/* <strong>{email}</strong> */}
                </span>{" "}
                <br />
                <strong className="title">{email}</strong>
                {/* <span>
                  <strong>{email}</strong>
                </span>{" "} */}
                <br />
                {/* <Input
                  placeholder="E-mail"
                  type={"text"}
                  {...field}
                  onChange={(e) => setValue("email", e.target.value)}
                />{" "} */}
              </>
            )}
          />
          <span className="rules">
            Wypożyczanie przedmiotów to świetny sposób na zaoszczędzenie pieniędzy i zwiększenie dostępności potrzebnych
            nam rzeczy.
          </span>{" "}
          <br />
          <span>Jednak przed wypożyczeniem należy ustalić kilka ważnych kwestii:</span>
          <br />
          <span>
            1. Forma realizacji wypożyczenia <br />
            - Forma realizacji wypożyczenia powinna być uzgodniona między wypożyczającym a wypożyczającym. <br /> -
            Wypożyczający może wybrać, czy przedmiot zostanie odebrany osobiście, czy też może zostać dostarczony do
            wskazanego miejsca.
          </span>
          <br />
          <span>
            2. Okres wypożyczenia <br />
            - Okres wypożyczenia powinien zostać precyzyjnie określony między wypożyczającym a wypożyczającym. <br /> -
            W przypadku przedłużenia terminu wypożyczenia, należy wcześniej uzgodnić to z wypożyczającym.
          </span>
          <br />
          <span>
            3. Sposób użytkowania wypożyczonego przedmiotu
            <br />
            - Wypożyczający zobowiązany jest do szanowania wypożyczonego przedmiotu i użytkowania go zgodnie z
            przeznaczeniem. <br /> - W przypadku jakichkolwiek uszkodzeń lub zniszczeń, wypożyczający jest zobowiązany
            poinformować o tym natychmiast wypożyczającego. <br /> - W przypadku uszkodzenia lub zniszczenia
            wypożyczonego przedmiotu, wypożyczający zobowiązany jest do naprawienia lub zastąpienia go nowym, takim
            samym lub równoważnym przedmiotem.
          </span>
          <br />
          <span>
            4. Odpowiedzialność strony wypożyczającej
            <br /> - Wypożyczający ponosi pełną odpowiedzialność za wypożyczony przedmiot, w tym za szkody wyrządzone
            przez wypożyczony przedmiot. <br />- W przypadku utraty lub zniszczenia wypożyczonego przedmiotu,
            wypożyczający zobowiązany jest do naprawienia szkody lub zastąpienia przedmiotu takim samym lub równoważnym
            przedmiotem.
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
