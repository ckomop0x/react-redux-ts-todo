import { ChangeEvent, FC } from 'react';

import { InputWrapper } from './styles';

interface InputProps {
  placeholder?: string;
  value: string | number;
  onChange(event: ChangeEvent<HTMLInputElement>): void;
}

const Input: FC<InputProps> = ({ placeholder, onChange, value }) => (
  <InputWrapper type="text" placeholder={placeholder} onChange={onChange} value={value} />
);

export default Input;
