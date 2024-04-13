import { Variant } from "./types";

interface DictReturn {
  border: string;
  label: string;
}

export const variantDict = (variant: Variant): DictReturn => {
  const dict = {
    primary: {
      border: '',
      label: ''
    },
    secondary: {
      border: '',
      label: ''
    },
    error: {
      border: '',
      label: ''
    },
    disabled: {
      border: '',
      label: ''
    }
  }

  return dict[variant];
}