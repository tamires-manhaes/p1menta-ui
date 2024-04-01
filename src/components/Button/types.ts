import { MouseEventHandler, ReactNode } from 'react';

export const variants = [
  'primary',
  'secondary',
  'text',
  'link',
  'danger',
] as const;
export type Variant = (typeof variants)[number];

export interface ButtonProps {
  label?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  fullWidth?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  classNames?: string;
  variant: Variant;
}
