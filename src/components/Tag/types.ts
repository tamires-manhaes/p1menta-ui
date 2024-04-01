import { ReactNode } from 'react';

export const variants = [
  'brand',
  'neutral',
  'red',
  'yellow',
  'cyan',
  'purple',
  'pink',
] as const;
export type Variant = (typeof variants)[number];

export interface TagProps {
  variant: Variant;
  label: string;
  icon?: ReactNode;
}
