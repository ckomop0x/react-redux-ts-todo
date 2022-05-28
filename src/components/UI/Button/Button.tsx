import { FC, ReactNode } from 'react';

import { VariantInterface } from '../../../types';

import { ButtonWrapper } from './styles';

interface ButtonProps {
  children: ReactNode;
  variant?: VariantInterface;
  disabled?: boolean;
  type?: string;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ variant, children, onClick, disabled }) => (
  <ButtonWrapper variant={variant} onClick={onClick} disabled={disabled}>
    {children}
  </ButtonWrapper>
);

export default Button;
