import { Variant } from './types';

interface DictReturn {
  bg: string;
  label: string;
  border: string;
  disabled: string;
}

export const variantDict = (variant: Variant): DictReturn => {
  const dict = {
    primary: {
      bg: 'bg-brand-600 hover:opacity-hover',
      label: 'text-neutral-0',
      border: 'none',
      disabled: 'bg-opacity-disabled',
    },
    secondary: {
      bg: 'bg-neutral-0 hover:bg-neutral-200',
      label: 'text-neutral-950',
      border: 'border-1 border-neutral-200',
      disabled: 'bg-opacity-disabled',
    },
    text: {
      bg: 'bg-transparent hover:bg-neutral-400',
      label: 'text-neutral-950',
      border: 'border-none',
      disabled: 'bg-opacity-disabled',
    },
    link: {
      bg: 'bg-transparent ',
      label: 'underline text-brand-600',
      border: 'border-none',
      disabled: 'bg-opacity-disabled',
    },
    danger: {
      bg: 'bg-red-600 hover:opacity-hover',
      label: 'text-neutral-0',
      border: 'border-none',
      disabled: 'bg-opacity-disabled',
    },
  };

  return dict[variant];
};
