import { ChangeEventHandler } from 'react';

export interface CheckboxProps {
  label?: string;
  showLabel: boolean;
  value: string | number | readonly string[] | undefined;
  name: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}
