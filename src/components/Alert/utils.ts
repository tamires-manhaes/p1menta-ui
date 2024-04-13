import { Variant } from "./types";

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
      border: 'border-neutral-700'
    },
    brand: {
      bg: 'bg-brand-600',
      label: 'text-brand-700',
      border: 'border-brand-700'
    },
    danger: {
      bg: 'bg-danger-600',
      label: 'text-danger-700',
      border: 'border-danger-700'
    },
    warning: {
      bg: 'bg-warning-600',
      label: 'text-warning-700',
      border: 'border-warning-700'
    },
    success: {
      bg: 'bg-success-600',
      label: 'text-success-700',
      border: 'border-success-700'
    }
  };

  return dict[variant];
}