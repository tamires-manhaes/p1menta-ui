import { ReactNode } from "react";

export const sizes = [
  'sm',
  'md',
  'lg',
] as const;
export type Size = (typeof sizes)[number];

export const variants = [
  'primary',
  'secondary',
  'error',
  'disabled'
] as const;
export type Variant = (typeof variants)[number];

export interface ISelectProps {
  label?: string;
  error?: boolean;
  disabled?: boolean;
  required: boolean;
  onValueChange?: (value: string) => void;
  value: string;
  defaultValue?: string;
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  id?: string;
  children?: ReactNode;
  placeholder?: string;
  name?: string;
}

