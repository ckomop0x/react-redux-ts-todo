import { VariantInterface } from '../../types';

export enum COLORS {
  success = 'success',
  alert = 'danger',
  disabled = 'disabled',
  default = 'primary',
}

export const getColor = (variant?: VariantInterface) => {
  switch (variant) {
    case 'success':
      return COLORS.success;

    case 'alert':
      return COLORS.alert;

    case 'disabled':
      return COLORS.disabled;

    default:
      return COLORS.default;
  }
};
