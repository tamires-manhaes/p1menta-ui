import { ReactNode } from "react";

export const variants = [
  'default',
  'brand',
  'danger',
  'warning',
  'success',
] as const;
export type Variant = (typeof variants)[number];

export interface AlertProps {
  variant: Variant;
  icon?: ReactNode;
  title: string;
  description: string;
}