import { FunctionComponent } from 'react';
import { CheckboxProps } from './types';

export const Checkbox: FunctionComponent<CheckboxProps> = ({
  label,
  name,
  onChange,
  showLabel,
  value,
}) => {
  return (
    <div className="flex items-center flex-wrap" id="jarvis_checkbox">
      <input
        className="mr-2 border-brand-600 border-1 p-2  w-4 h-4"
        type="checkbox"
        name={name}
        value={value}
        onChange={onChange}
      />
      {showLabel && (
        <label id={name} className="font-semibold">
          {label}
        </label>
      )}
    </div>
  );
};
