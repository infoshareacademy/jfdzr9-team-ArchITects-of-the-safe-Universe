import { useState } from "react";
import { Link } from "react-router-dom";
// import CategoryDropdown from "../../CategoryDropdown/CategoryDropdown";
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

export const AddNewProduct = () => {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const handleAuthorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuthor(event.target.value);
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
  };

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  };

  const handleCategoryChange = (category: string) => {
    setCategory(category);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = { author, title, location, description, category };
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const selectedImage = event.target.files[0];
      setImage(selectedImage);
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormGroup>
        <Label htmlFor="author">Autor:</Label>
        <Input id="author" type="text" value={author} onChange={handleAuthorChange} />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="title">Tytuł:</Label>
        <Input id="title" type="text" value={title} onChange={handleTitleChange} />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="location">Lokalizacja:</Label>
        <Input id="location" type="text" value={location} onChange={handleLocationChange} />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="description">Opis:</Label>
        <TextArea id="description" value={description} onChange={handleDescriptionChange} />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="image">Zdjęcie:</Label>
        <FormGroupImg>
          <input id="image" type="file" accept="image/*" onChange={handleImageChange} />
        </FormGroupImg>
      </FormGroup>
      {/* <CategoryDropdown onChange={handleCategoryChange} /> */}
      <FormGroupNextTo>
        <Link to="/">
          <ButtonM type="submit">Anuluj</ButtonM>
        </Link>
        <ButtonM>Dodaj</ButtonM>
      </FormGroupNextTo>
    </FormContainer>
  );
};
