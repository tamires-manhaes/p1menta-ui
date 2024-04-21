
export const variants = [
  'default',
  'brand',
  'warning',
  'success',
  'danger',
] as const;
export type Variant = (typeof variants)[number];

export interface ProgressBarProps {
  progress: number,
  variant: Variant
}