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
                {errors.email && <span>{errors.email.message}</span>}
                <span>Skontaktuj się z właścicielem produktu pod wskazanym adresem e-mail</span>
                <Input
                  placeholder="E-mail"
                  type={"text"}
                  {...field}
                  onChange={(e) => setValue("email", e.target.value)}
                />
              </>
            )}
          />
          <Controller
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
          />
        </FormContainer>
      )}
    </>
  );
};

export default Contact;
