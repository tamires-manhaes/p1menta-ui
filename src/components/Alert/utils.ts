import { Variant } from './types';

interface DictReturn {
  bg: string;
  label: string;
  border: string;
}

export const variantDict = (variant: Variant): DictReturn => {
  const dict = {
    default: {
      bg: 'bg-neutral-50',
      label: 'text-neutral-700',
      border: 'border-neutral-300',
    },
    brand: {
      bg: 'bg-brand-600',
      label: 'text-brand-700',
      border: 'border-brand-300',
    },
    danger: {
      bg: 'bg-red-600',
      label: 'text-red-700',
      border: 'border-red-300',
    },
    warning: {
      bg: 'bg-yellow-600',
      label: 'text-yellow-700',
      border: 'border-yellow-300',
    },
    success: {
      bg: 'bg-emerald-600',
      label: 'text-emerald-700',
      border: 'border-emerald-300',
    },
  };

  return dict[variant];
};
