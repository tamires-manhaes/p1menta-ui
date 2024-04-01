import { Size, Variant } from './types';

export const sizeDict = (size: Size): string => {
  const dict = {
    sm: 'w-spacing-4',
    md: 'w-spacing-6',
    xl: 'w-spacing-8',
  };

  return dict[size];
};

export const variantDict = (variant: Variant): string => {
  const dict = {
    default: 'bg-neutral-950',
    brand: 'bg-brand-500',
    danger: 'bg-red-500',
    warning: 'bg-yellow-500',
    success: 'bg-emerald-500',
  };

  return dict[variant];
};
