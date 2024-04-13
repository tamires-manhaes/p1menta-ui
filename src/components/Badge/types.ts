import { ReactNode } from 'react';

export const variants = [
  'default',
  'brand',
  'danger',
  'warning',
  'success',
] as const;
export type Variant = (typeof variants)[number];

export const sizes = ['sm', 'md', 'xl'] as const;
export type Size = (typeof sizes)[number];

export interface BadgeProps {
  size?: Size;
  variant?: Variant;
  icon?: ReactNode;
  showIcon?: boolean;
  label: string;
}
