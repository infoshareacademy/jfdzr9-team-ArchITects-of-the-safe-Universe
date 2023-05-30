import { ChangeEventHandler, KeyboardEventHandler } from "react";
import { InputLabel } from "./Input.styled";
import { Input } from "../AddProductPage/AddNewProduct.styled";

interface InputProps {
  icon?: string;
  placeholder?: string;
  onChange?: ChangeEventHandler;
  value?: string;
  onKeyPress?: KeyboardEventHandler;
}

export const InputPassword = ({ icon, placeholder, onChange, value, onKeyPress }: InputProps) => {
  return (
    <InputLabel>
      {icon && <img src={icon} alt="" height={15} />}
      <Input type="password" placeholder={placeholder} onChange={onChange} value={value} onKeyPress={onKeyPress} />
    </InputLabel>
  );
};
