import { FormContainer } from "./Contact.styled";
import { Controller, useForm } from "react-hook-form";
import { useLocation } from "react-router";
interface ContactFormData {
  email: string;
  name: string;
  message: string;
}

const Contact = () => {
  const {
    control,
    formState: { errors },
    setValue,
  } = useForm<ContactFormData>();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get("email") || "";
  window.addEventListener("load", () => {
    setValue("email", email);
  });

  return (
    <>
      <FormContainer>
        <Controller
          name="email"
          control={control}
          rules={{ required: "E-mail jest wymagany" }}
          defaultValue={email || ""}
          render={() => (
            <>
              {errors.email && <span>{errors.email.message}</span>}{" "}
              <span className="title">Chcąć skorzystać z oferty wypożyczenia przedmiotu?</span>
              <br />
              <span className="title">
                Skontaktuj się z właścicielem produktu pod podanym poniżej adresem e-mail:
              </span>{" "}
              <br />
              <strong className="title">{email}</strong>
              <br />
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
          - Okres wypożyczenia powinien zostać precyzyjnie określony między wypożyczającym a wypożyczającym. <br /> - W
          przypadku przedłużenia terminu wypożyczenia, należy wcześniej uzgodnić to z wypożyczającym.
        </span>
        <br />
        <span>
          3. Sposób użytkowania wypożyczonego przedmiotu
          <br />
          - Wypożyczający zobowiązany jest do szanowania wypożyczonego przedmiotu i użytkowania go zgodnie z
          przeznaczeniem. <br /> - W przypadku jakichkolwiek uszkodzeń lub zniszczeń, wypożyczający jest zobowiązany
          poinformować o tym natychmiast wypożyczającego. <br /> - W przypadku uszkodzenia lub zniszczenia wypożyczonego
          przedmiotu, wypożyczający zobowiązany jest do naprawienia lub zastąpienia go nowym, takim samym lub
          równoważnym przedmiotem.
        </span>
        <br />
        <span>
          4. Odpowiedzialność strony wypożyczającej
          <br /> - Wypożyczający ponosi pełną odpowiedzialność za wypożyczony przedmiot, w tym za szkody wyrządzone
          przez wypożyczony przedmiot. <br />- W przypadku utraty lub zniszczenia wypożyczonego przedmiotu,
          wypożyczający zobowiązany jest do naprawienia szkody lub zastąpienia przedmiotu takim samym lub równoważnym
          przedmiotem.
        </span>
      </FormContainer>
    </>
  );
};

export default Contact;
