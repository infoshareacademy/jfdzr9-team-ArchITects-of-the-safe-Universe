import { ChangeEventHandler } from "react";
import { InputField, InputLabel } from "./Input.styled";

interface InputProps {
  icon?: string;
  placeholder?: string;
  onChange?: ChangeEventHandler;
  value?: string;
}

export const Input = ({ icon, placeholder, onChange, value }: InputProps) => {
  return (
    <InputLabel>
      {icon && <img src={icon} alt="" height={15} />}
      <InputField placeholder={placeholder} onChange={onChange} value={value} />
    </InputLabel>
  );
};
