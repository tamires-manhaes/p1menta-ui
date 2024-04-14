import { Variant } from './types';

interface DictReturn {
  border: string;
  label: string;
}

export const variantDict = (variant: Variant): DictReturn => {
  const dict = {
    primary: {
      border: 'border-brand-500',
      label: 'text-brand-500',
    },
    secondary: {
      border: 'border-neutral-300',
      label: 'border-neutral-500',
    },
    disabled: {
      border: 'border-neutral-300 cursor-none pointer-events-none',
      label: 'text-neutral-300',
    },
    error: {
      border: 'border-red-400 ',
      label: 'text-red-400',
    },
  };

  return dict[variant];
};
