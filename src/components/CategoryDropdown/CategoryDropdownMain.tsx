import { ChangeEvent } from "react";
import { Select } from "../AddProductPage/AddNewProduct.styled";

export interface CategoryProps {
  value?: string;
  label?: string;
  options?: string;
  onChange?: (category: string) => void;
}
const options = [
  { value: "Sport", label: "Sport i rekreacja" },
  { value: "Tools", label: "Dom i ogród" },
  { value: "books", label: "Nauka i rozrywka" },
];
export const CategoryDropdownMain = ({ value, onChange }: CategoryProps) => {
  const handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = event.target.value;
    onChange?.(selectedCategory);
  };
  return (
    <Select id="categories" value={value} onChange={handleCategoryChange}>
      <option value="Kategoria">Kategoria</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </Select>
  );
};

export default CategoryDropdownMain;
