import { Variant } from './types';

interface DictReturn {
  bg: string;
  label: string;
}

export const variantDict = (variant: Variant): DictReturn => {
  const dict = {
    brand: {
      bg: 'bg-brand-200',
      label: 'text-brand-950',
    },
    neutral: {
      bg: 'bg-neutral-200',
      label: 'bg-neutral-950',
    },
    red: {
      bg: 'bg-red-200',
      label: 'bg-red-950',
    },
    yellow: {
      bg: 'bg-yellow-200',
      label: 'text-yellow-950',
    },
    cyan: {
      bg: 'bg-cyan-200',
      label: 'text-cyan-950',
    },
    purple: {
      bg: 'bg-purple-200',
      label: 'text-purple-950',
    },
    pink: {
      bg: 'bg-pink-200',
      label: 'text-pink-950',
    },
  };

  return dict[variant];
};
