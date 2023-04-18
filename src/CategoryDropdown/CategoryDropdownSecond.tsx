import { ChangeEvent, useState } from "react";
import { Select } from "../components/AddProductPage/AddNewProduct.styled";
import AddNewProduct from "../components/AddProductPage/AddNewProduct.component";
import AddNewProductSport from "../components/AddProductPage/AddNewProductSport.component";
import AddNewProductTools from "../components/AddProductPage/AddNewProductTools.component";
import { SelectContainer } from "./CategoryDropdownSecond.styled";

export interface CategoryProps {
  value?: string;
  label?: string;
  options?: string;
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const options = [
  { value: "books", label: "Kultura i rozrywka" },
  { value: "Sport", label: "Sport i turystyka" },
  { value: "Tools", label: "Dom i ogród" },
];

export const CategoryDropdownSecond = ({ value, onChange }: CategoryProps) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <SelectContainer>
      <Select id="categories" value={selectedCategory} onChange={handleCategoryChange}>
        <option value="">Wybierz kategorię</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
      {selectedCategory === "books" && <AddNewProduct />}
      {selectedCategory === "Sport" && <AddNewProductSport />}
      {selectedCategory === "Tools" && <AddNewProductTools />}
    </SelectContainer>
  );
};

export default CategoryDropdownSecond;
