import { ChangeEvent } from "react";
import { Select } from "../AddProductPage/AddNewProduct.styled";

export interface CategoryProps {
  value?: string;
  label?: string;
  options?: string;
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const options = [
  { value: "literatura", label: "Literatura piękna" },
  { value: "fantastyka", label: "Fantastyka" },
  { value: "komiks", label: "Komiks" },
  { value: "reportaz", label: "Reportaż" },
  { value: "thriller", label: "Thriller" },
  { value: "biografia", label: "Biografia" },
  { value: "nauka", label: "Nauka" },
  { value: "pozostale", label: "Pozostałe" },
];

export const CategoryDropdown = ({ value, onChange }: CategoryProps) => {
  return (
    <Select id="categories" value={value} onChange={onChange}>
      <option value="">Kategoria</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </Select>
  );
};

export default CategoryDropdown;
